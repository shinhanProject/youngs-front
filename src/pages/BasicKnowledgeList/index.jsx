import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../apis";
import { basicCategoryState, alreadyLearn } from "../../store/atoms";
import {
  Header,
  CategoryBundle,
  Footer,
  Text,
  Pagination,
  BasicKnowledgeCategory,
  BasicKnowledgeCard,
  Toggle,
} from "../../components";
import {
  Container,
  Wrapper,
  Wrapperpage,
  List,
  CategoryWrapper,
  InnerOuterWrapper,
} from "./styled";

const BasicKnowledgeList = () => {
  const isAlreadyLearn = useRecoilValue(alreadyLearn);
  const category = useRecoilValue(basicCategoryState);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const fetchData = async () => {
    axiosInstance
      .get(
        `/basic/category?categorySeq=${category}&isChecked=${isAlreadyLearn}`,
      )
      .then(response => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    fetchData();
  }, [isAlreadyLearn]);
  useEffect(() => {
    fetchData();
  }, [category]);
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
      <Text theme="infoTitle">기초 지식</Text>
      <Text theme="infoText">
        주식 투자에 필요한 기초 지식 정보를 통해 주식 투자 0 단계 부터 성장해
        나가세요!
      </Text>
      <CategoryBundle selected="basicknowledge" />
      <Wrapper>
        <BasicKnowledgeCategory />
        <InnerOuterWrapper>
          <Toggle flag={1} />
          <CategoryWrapper>
            <List>
              {getCurrentPosts(posts).map(post => (
                <Link to={`/bsdetail/${category}/${post.basicSeq}`}>
                  <BasicKnowledgeCard
                    name={post.subject}
                    description={post.information}
                  />
                </Link>
              ))}
            </List>
            <Wrapperpage>
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={setCurrentPage}
              />
            </Wrapperpage>
          </CategoryWrapper>
        </InnerOuterWrapper>
      </Wrapper>
      <Footer />
    </Container>
  );
};
export default BasicKnowledgeList;
