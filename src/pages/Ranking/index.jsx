import React, { useState, useEffect } from "react";

import { axiosInstance } from "../../apis";
import {
  Header,
  Footer,
  Text,
  RankingList,
  Pagination,
} from "../../components";
import { Container, Wrapper, WrapperTitile, Wrapperpage } from "./styled";

const Ranking = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
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
          console.log(response.data);
          console.log(dataWithRank);
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
  console.log(posts);
  return (
    <Container>
      <Header />
      <Wrapper>
        <WrapperTitile>
          <Text theme="text2"> RANKING</Text>
          <Text theme="text1">2023년 랭킹</Text>
        </WrapperTitile>
        <RankingList posts={getCurrentPosts(posts)} />
        <Wrapperpage>
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
