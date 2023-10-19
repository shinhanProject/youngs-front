import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { axiosInstance } from "../../apis";
import { gptDragState } from "../../store/atoms";
import {
  Header,
  CategoryBundle,
  Footer,
  Text,
  NewsCategory,
  Toggle,
  GptModal,
  Input,
  UpdateInput,
  AlertModal,
  LoadFile,
} from "../../components";
import { Container, Wrapper, ContentContainer, ContentWrapper } from "./styled";

const PressReleaseDetail = () => {
  const [isSummaryDone, setIsSummaryDone] = useState(false);
  const { category, id } = useParams();
  const [posts, setPosts] = useState({
    title: "",
    url: "",
    pubDate: "",
  });

  const gptDrag = useRecoilValue(gptDragState);
  const [word, setWord] = useState("");
  const [explanation, setExplanation] = useState("설명을 불러오는 중입니다.");
  const [modalOpen, setModalOpen] = useState(false);
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const showModal = () => {
    setModalOpen(true);
  };

  const handleSelect = event => {
    if (gptDrag) {
      const text = window.getSelection().toString().trim();
      if (text.length <= 20) {
        setModalPosition({
          top: event.clientY + window.scrollY,
          left: event.clientX,
        });
        setWord(text);
      } else {
        setAlertModalOpen(true);
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

  const getContent = async () => {
    axiosInstance
      .get(`/news?categorySeq=${category}&newsSeq=${id}`)
      .then(response => {
        setPosts({
          title: response.data.title,
          url: response.data.url,
          pubDate: response.data.pubDate,
        });
        setIsSummaryDone(response.data.wasWritten);
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

  useEffect(() => {
    getContent();
  }, []);

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
        {modalOpen && (
          <GptModal
            setModalOpen={setModalOpen}
            word={word}
            explanation={explanation}
            setExplanation={setExplanation}
            position={modalPosition}
          />
        )}
        {alertModalOpen && (
          <AlertModal
            title="죄송합니다"
            explanation="20자 넘는 단어는 검색하기 어려워요!"
            setModalOpen={setAlertModalOpen}
            onOkButton={() => {
              setAlertModalOpen(false);
            }}
          />
        )}
        <ContentContainer
          onMouseUp={event => handleSelect(event)}
          onTouchEnd={event => handleSelect(event)}
        >
          <Toggle flag={2} />
          <ContentWrapper>
            <LoadFile currentHTMLKey={posts.url} />
            {isSummaryDone ? (
              <UpdateInput
                label="한 줄 요약하기"
                type="text"
                id={id}
                categorySeq="news"
              />
            ) : (
              <Input
                label="한 줄 요약하기"
                type="text"
                placeholder="요약을 입력하세요"
                id={id}
                categorySeq="news"
              />
            )}
          </ContentWrapper>
        </ContentContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default PressReleaseDetail;
