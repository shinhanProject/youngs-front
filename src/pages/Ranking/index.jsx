import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { axiosInstance } from "../../apis";
import {
  Header,
  Footer,
  Text,
  RankingList,
  Pagination,
  RankingModal,
} from "../../components";
import { Container, Wrapper, WrapperTitile, Wrapperpage } from "./styled";
import { rankModalOpenState } from "../../store/atoms";

const Ranking = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const [modalstate, setIsModalOpen] = useRecoilState(rankModalOpenState);
  const [useridState, setUserid] = useState(1);
  const [usernameState, setUsername] = useState(1);
  const [followState, setfollow] = useState(0);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [profileImg, setprofileImg] = useState("SOL");

  const ismodalOpen = () => {
    setIsModalOpen(true);
  };
  const ismodalClose = () => {
    setIsModalOpen(false);
  };

  const followOnClick = () => {
    if (followState === 1) {
      setfollow(2);
    } else {
      setfollow(1);
    }
  };
  const handlePosition = event => {
    setModalPosition({
      top: event.clientY + window.scrollY,
      left: event.clientX,
    });
  };

  const postData = {
    userSeq: 30,
  };
  useEffect(() => {
    const fetchData = async () => {
      axiosInstance
        .post("/rank", postData)
        .then(response => {
          const dataWithRank = response.data.map((item, index) => ({
            ...item,
            rank: index + 1,
          }));
          setPosts(dataWithRank);
        })
        .catch(e => {
          console.log(e);
        });
    };
    fetchData();
  }, []);
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const getCurrentPosts = () => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  return (
    <Container>
      <Header />
      <Wrapper>
        <WrapperTitile onClick={ismodalClose}>
          <Text theme="text2"> RANKING</Text>
          <Text theme="textRankPageSubTitle">요약 개수 랭킹</Text>
        </WrapperTitile>
        {modalstate && (
          <RankingModal
            setModalState={setIsModalOpen}
            userSeq={useridState}
            username={usernameState}
            isfollow={followState}
            modalPosition={modalPosition}
            followOnClick={followOnClick}
            profileImg={profileImg}
          />
        )}
        <RankingList
          setUserid={setUserid}
          posts={getCurrentPosts(posts)}
          setmodalOpen={ismodalOpen}
          setUsername={setUsername}
          setfollow={setfollow}
          handlePosition={handlePosition}
          changeProfile={setprofileImg}
        />
        <Wrapperpage
          onClick={() => {
            ismodalClose();
          }}
        >
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={setCurrentPage}
          />
        </Wrapperpage>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Ranking;
