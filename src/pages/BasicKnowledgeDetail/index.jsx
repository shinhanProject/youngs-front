import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { axiosInstance } from "../../apis";
import { summaryCheck } from "../../store/atoms";
import {
  Header,
  CategoryBundle,
  Footer,
  Text,
  BasicKnowledgeCategory,
  Input,
  UpdateInput,
  LoadFile,
} from "../../components";
import { Container, Wrapper, ContentContainer, ContentWrapper } from "./styled";

const BasicKnowledgeDetail = () => {
  const [isSummaryDone, setIsSummaryDone] = useRecoilState(summaryCheck);
  const { category, id } = useParams();
  const [posts, setPosts] = useState({
    title: "",
    info: "",
  });

  const getContent = async () => {
    axiosInstance
      .get(`/basic/detail?categorySeq=${category}&basicSeq=${id}`)
      .then(response => {
        setPosts({
          title: response.data.subject,
          info: response.data.information,
        });
        setIsSummaryDone(response.data.wasWritten);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getContent();
  }, []);

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
            {category === "1" || category === "4" ? (
              <p>{posts.info}</p>
            ) : (
              <LoadFile currentHTMLKey={posts.info} />
            )}
            {isSummaryDone ? (
              <UpdateInput
                label="한 줄 요약하기"
                type="text"
                id={id}
                categorySeq="basic"
              />
            ) : (
              <Input
                label="한 줄 요약하기"
                type="text"
                placeholder="요약을 입력하세요"
                id={id}
                categorySeq="basic"
              />
            )}
          </ContentWrapper>
        </ContentContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};
export default BasicKnowledgeDetail;
