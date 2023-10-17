import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { axiosInstance } from "../../apis";
import { searchStock } from "../../store/atoms";

import {
  Header,
  CategoryBundle,
  Footer,
  Text,
  Pagination,
  StockItemCard,
  SearchCard,
} from "../../components";
import {
  Container,
  Wrapper,
  Wrapperpage,
  List,
  CategoryWrapper,
  InnerOuterWrapper,
} from "./styled";

const StockItemList = () => {
  // 이거 const [stockname, setStockname] = useState(); 로 바꿔서 검색 시 사용하기
  const stockSearchValue = useRecoilValue(searchStock);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  // ###################### Search !!! => goekd
  // const searched = posts.filter((item) =>
  //   item.name.toLowerCase().includes(userInput)
  // );

  // 주식 api 나오면 수정할 부분
  useEffect(() => {
    const fetchData = async () => {
      console.log("stockSearchValue 바뀌면 다시 api 받아옴 ", stockSearchValue);
      axiosInstance
        .get(`news/1`)
        .then(response => {
          const searched = response.data.filter(item =>
            item.title.toLowerCase().includes(stockSearchValue.toLowerCase()),
          );
          setPosts(searched);
        })
        .catch(e => {
          console.log(e);
        });
    };
    fetchData();
  }, [stockSearchValue]);
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
      <Text theme="infoTitle">주식 정보</Text>
      <Text theme="infoText">
        실제 주식 정보를 보며 공부한 내용을 확인해 보세요! 관심있는 기업의
        정보를 보고, 직접 분석해 볼 수 있습니다.
      </Text>
      <CategoryBundle selected="stockitem" />
      <Wrapper>
        <SearchCard />
        <InnerOuterWrapper>
          <CategoryWrapper>
            <List>
              {getCurrentPosts(posts).map(post => (
                <Link to={`/stdetail/${post.newsSeq}`}>
                  <StockItemCard
                    price={post.newsSeq}
                    name={post.title}
                    priceChange={post.newsSeq}
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
        </InnerOuterWrapper>
      </Wrapper>
      <Footer />
    </Container>
  );
};
export default StockItemList;
