import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { axiosInstance } from "../../apis";

import {
  Header,
  CategoryBundle,
  Footer,
  Text,
  BasicKnowledgeCategory,
  Input,
  Button,
} from "../../components";
import {
  Container,
  Wrapper,
  ContentContainer,
  ContentWrapper,
  SummaryInput,
} from "./styled";

const BasicKnowledgeDetail = () => {
  const { category, id } = useParams();
  const [posts, setPosts] = useState({
    title: "basicTitle",
    info: "description",
  });
  useEffect(() => {
    const fetchData = async () => {
      axiosInstance
        .get(`/basic/detail?categorySeq=${category}&basicSeq=${id}`)
        .then(response => {
          console.log(response.data);
          setPosts({
            title: response.data.subject,
            info: response.data.information,
          });
        })
        .catch(e => {
          console.log(e);
        });
    };
    fetchData();
  }, [category]);

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

        <ContentContainer>
          <ContentWrapper>
            <Text theme="textbasicDetailTitle"> {posts.title}</Text>
            <p>{posts.info}</p>
            <SummaryInput>
              <Input />
              <Button theme="summaryEnrollBtn">수정하기</Button>
            </SummaryInput>
          </ContentWrapper>
        </ContentContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};
export default BasicKnowledgeDetail;
