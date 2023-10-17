import React from "react";
import { Wrapper } from "./styled";
import { Text, Card } from "../../index";

const StockRecommandCard = ({ name, percent, onClick }) => {
  return (
    <Card theme="stockRecommandListCard" onClick={onClick}>
      <Wrapper>
        <Text theme="textRankingProfile">{name}</Text>
        <Text theme="textStockRankingScore">{percent}%</Text>
      </Wrapper>
    </Card>
  );
};

export default StockRecommandCard;
