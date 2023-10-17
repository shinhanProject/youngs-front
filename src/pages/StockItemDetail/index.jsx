import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import React, { useState, useEffect } from "react";
import { gptDragState } from "../../store/atoms";

import { axiosInstance } from "../../apis";

import {
  Header,
  CategoryBundle,
  Footer,
  Text,
  SearchCard,
  StockChart,
  Toggle,
  GptModal,
  StockTable,
} from "../../components";
import {
  Container,
  Wrapper,
  ContentContainer,
  ContentWrapper,
  DummyWrapper,
} from "./styled";

const StockItemDetail = () => {
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
  // GPT
  const gptDrag = useRecoilValue(gptDragState);
  const [word, setWord] = useState("");
  const [explanation, setExplanation] = useState("설명을 불러오는 중입니다.");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const showModal = () => {
    setModalOpen(true);
  };

  const handleSelect = event => {
    if (gptDrag) {
      const text = window.getSelection().toString().trim();
      console.log(text);
      if (text.length <= 20) {
        setModalPosition({
          top: event.clientY,
          left: event.clientX,
        });
        setWord(text);
      } else {
        console.log("길어");
      }
    }
  };

  const getWord = ({ w }) => {
    axiosInstance
      .get(`/word/${w}`)
      .then(response => {
        console.log(response.data);
        setExplanation(response.data.description);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (word !== "" && gptDrag === true) {
      showModal();
      getWord({ w: word });
    }
  }, [word]);
  console.log(gptDrag, word, " 여기요 ... ");
  return (
    <Container>
      <Header />
      <DummyWrapper>
        <Text theme="infoTitle">기초 지식</Text>
        <Text theme="infoText">
          주식 투자에 필요한 기초 지식 정보를 통해 주식 투자 0 단계 부터 성장해
          나가세요!
        </Text>
        <CategoryBundle selected="stockitem" />
      </DummyWrapper>
      <Wrapper>
        <SearchCard />
        {modalOpen && (
          <GptModal
            setModalOpen={setModalOpen}
            word={word}
            explanation={explanation}
            setExplanation={setExplanation}
            position={modalPosition}
          />
        )}
        <ContentContainer>
          <Toggle flag={2} />
          <ContentWrapper onMouseUp={event => handleSelect(event)}>
            <Text theme="textbasicDetailTitle"> {posts.title}</Text>
            <StockChart />
            <StockTable />
          </ContentWrapper>
        </ContentContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};
export default StockItemDetail;
