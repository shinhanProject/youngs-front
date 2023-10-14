import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../apis";
import { newsCategoryState } from "../../store/atoms";
import {
  Header,
  CategoryBundle,
  Footer,
  Text,
  Pagination,
  NewsCategory,
  NewsListItem,
} from "../../components";
import {
  Container,
  Wrapper,
  Wrapperpage,
  List,
  CategoryWrapper,
} from "./styled";

const PressReleaseList = () => {
  const category = useRecoilValue(newsCategoryState);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;
  useEffect(() => {
    const fetchData = async () => {
      axiosInstance
        .get(`news/${category}`)
        .then(response => {
          console.log(response.data);
          setPosts(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    };
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
      <Text theme="infoTitle">뉴스 정보</Text>
      <Text theme="infoText">
        배운 내용들을 기반으로 뉴스 정보를 탐색해보세요! 주식에 밀접한
        카테고리로 구성했어요.
      </Text>
      <CategoryBundle selected="pressrelease" />
      <Wrapper>
        <NewsCategory />
        <CategoryWrapper>
          <List>
            {getCurrentPosts(posts).map(post => (
              <Link to={`/prdetail/${category}/${post.newsSeq}`}>
                <NewsListItem
                  key={post.newsSeq}
                  id={post.newsSeq}
                  title={post.title}
                  content={post.description}
                  date={post.pubDate}
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
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default PressReleaseList;
