import React, { useState, useEffect } from "react";
import { axiosInstance } from "../../apis";
import {
  Header,
  Banner,
  CategoryBundle,
  Footer,
  StockRecommandCard,
  Card,
  Text,
} from "../../components";
import {
  Container,
  DecoImg,
  DecoImg2,
  DecoImg3,
  DecoImg4,
  Image,
  Wrapper1,
  StockContainer,
} from "./styled";
import deco from "../../assets/images/deco.svg";
import stockRecommandImg from "../../assets/images/stockRecommandImg.svg";

const Main = () => {
  const [recommandList, setRecommandList] = useState([]);
  const getListApi = async () => {
    try {
      const response = await axiosInstance.get("/stock/today-stock");
      console.log(response.data, "responseData");
      setRecommandList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getListApi();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Banner />
        <CategoryBundle selected="" />
        <StockContainer>
          <Text theme="text2">급상승 종목</Text>
          <Card theme="stockRecommandBackgroundCard">
            <Image src={stockRecommandImg} alt="stockRecommandImg" />
            <Wrapper1>
              {recommandList.map(stock => (
                <StockRecommandCard
                  stockId={stock.stockId}
                  stockName={stock.name}
                  rate={stock.rate}
                />
              ))}
            </Wrapper1>
          </Card>
        </StockContainer>

        <DecoImg src={deco} />
        <DecoImg2 src={deco} />
        <DecoImg3 src={deco} />
        <DecoImg4 src={deco} />
      </Container>
      <Footer />
    </>
  );
};

export default Main;
