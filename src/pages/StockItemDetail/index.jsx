import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import React, { useState, useEffect } from "react";
import { gptDragStateStock } from "../../store/atoms";

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
  const stockName = "삼성전자";
  const { category } = useParams();
  const [stockData, setStockData] = useState({});
  const [seriesData, setSeriesData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      axiosInstance
        .get(`/stock/chart/삼성전자`)
        .then(response => {
          console.log(response.data);
          setStockData(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    };
    fetchData();
    console.log("stock Data 입니당 ", stockData);
  }, [category]);
  const fineData = () => {
    const transformedData = Object.entries(stockData).map(([date, values]) => {
      const [open, high, low, close] = [
        parseFloat(values.open),
        parseFloat(values.high),
        parseFloat(values.low),
        parseFloat(values.close),
      ];

      return {
        x: new Date(date).getTime(),
        y: [open, high, low, close],
      };
    });
    return transformedData;
  };
  useEffect(() => {
    const transformedData = fineData();
    setSeriesData(transformedData);
    console.log("USEEFFECT 안이지롱 ", stockData, transformedData);
  }, [stockData]);

  const gptDragStock = useRecoilValue(gptDragStateStock);
  const [word, setWord] = useState("");
  const [explanation, setExplanation] = useState("설명을 불러오는 중입니다.");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const showModal = () => {
    setModalOpen(true);
  };

  const handleSelect = event => {
    if (gptDragStock) {
      const text = window.getSelection().toString().trim();
      console.log(text);
      if (text) {
        if (text.length <= 20) {
          if (event.target !== StockChart) {
            setModalPosition({
              top: event.clientY + window.scrollY,
              left: event.clientX,
            });
            setWord(text);
          }
        } else {
          console.log("길어");
        }
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
    console.log(gptDragStock);
    if (word !== "" && gptDragStock === true) {
      showModal();
      getWord({ w: word });
    }
  }, [word]);

  return (
    <Container>
      <Header />
      <DummyWrapper>
        <Text theme="infoTitle">종목 정보</Text>
        <Text theme="infoText">
          실제 주식 정보를 보며 공부한 내용을 확인해 보세요!
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
            <Text theme="textbasicDetailTitle"> {stockName}</Text>
            <StockChart innerData={seriesData} />
            <StockTable />
          </ContentWrapper>
        </ContentContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};
export default StockItemDetail;
