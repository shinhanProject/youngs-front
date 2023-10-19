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
  TableContainer,
} from "./styled";

const StockItemDetail = () => {
  const { id } = useParams();
  const [stockData, setStockData] = useState({});
  const [allStocks, setAllStocks] = useState([]);
  const [statisticData, setStatisticData] = useState({});
  const [firstSectionData, SetFirstSectionData] = useState({});
  const [secondSectionData, SetSecondSectionData] = useState({});
  const [nameStock, setNameStock] = useState("삼성전자");
  const [seriesData, setSeriesData] = useState([]);

  const findStockNameById = () => {
    console.log("혹시 전체주식이 없니..?", allStocks);
    const findStock = allStocks.find(stock => stock.stockId === id);
    console.log("findStockname 여기요", findStock);
    return findStock ? setNameStock(findStock.name) : setNameStock(""); // 주식을 찾았을 경우 이름을 반환, 찾지 못한 경우 빈 문자열 반환
  };
  const getAllStock = async () => {
    axiosInstance
      .get(`/stock`)
      .then(response => {
        console.log("스톡 데이터", response.data);
        setAllStocks(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    getAllStock();
  }, []);
  useEffect(() => {
    findStockNameById();
  }, [allStocks]);

  // 통계 데이터 가져올 것
  const getStat = async () => {
    axiosInstance
      .get(`/stock/stat/${id}`)
      .then(response => {
        console.log("재무제표 내용 ", response.data);
        setStatisticData(response.data);
      })
      .catch(e => {
        console.log(e);
      });
    console.log("통계 데이터!", statisticData);
  };

  useEffect(() => {
    getStat();
  }, []);

  useEffect(() => {
    console.log("USEEFFECT 안의 ㄴㅅㅁ샨", statisticData);
    const keys = Object.keys(statisticData);
    const middleIndex = Math.floor(keys.length / 2);
    const firstSection = {};
    const secondSection = {};

    for (let i = 0; i < middleIndex; i += 1) {
      const key = keys[i];
      firstSection[key] = statisticData[key];
    }

    for (let i = middleIndex; i < keys.length; i += 1) {
      const key = keys[i];
      secondSection[key] = statisticData[key];
    }
    SetFirstSectionData(firstSection);
    SetSecondSectionData(secondSection);
    console.log("퍼스트 ", firstSection);
  }, [statisticData]);
  // 차트
  useEffect(() => {
    console.log("nameStock", nameStock);
    const fetchData = async () => {
      axiosInstance
        .get(`/stock/chart/${nameStock}`)
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
  }, [nameStock]);
  const fineData = () => {
    const transformedData = Object.entries(stockData).reduce(
      (result, [date, values]) => {
        const [open, high, low, close] = [
          parseFloat(values.open),
          parseFloat(values.high),
          parseFloat(values.low),
          parseFloat(values.close),
        ];

        result.push({
          x: new Date(date),
          y: [open, high, low, close],
        });

        return result;
      },
      [],
    );
    return transformedData;
  };

  // 필터링

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
          <ContentWrapper
            onMouseUp={event => handleSelect(event)}
            onTouchEnd={event => handleSelect(event)}
          >
            <Text theme="textbasicDetailTitle"> {nameStock}</Text>
            <StockChart innerData={seriesData} />
            <Text theme="stockDetailSubTitle">주식 분석 정보</Text>
            <Text>2023.3분기</Text>
            <TableContainer>
              <StockTable stockData={firstSectionData} />
              <StockTable stockData={secondSectionData} />
            </TableContainer>
          </ContentWrapper>
        </ContentContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};
export default StockItemDetail;
