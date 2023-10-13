import React from "react";
import { Container, Wrapper1, Image } from "./styled";
import { Text, Card, StockRecommandCard } from "../../index";
import stockRecommandImg from "../../../assets/images/stockRecommandImg.svg";

const StockRecommand = ({ onClick }) => {
  return (
    <Container>
      <Text theme="text2">급상승 종목</Text>
      <Card theme="stockRecommandBackgroundCard" onClick={onClick}>
        <Image src={stockRecommandImg} alt="stockRecommandImg" />
        <Wrapper1>
          <StockRecommandCard />
          <StockRecommandCard />
          <StockRecommandCard />
        </Wrapper1>
      </Card>
    </Container>
  );
};

export default StockRecommand;
