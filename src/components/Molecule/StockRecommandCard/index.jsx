import React from "react";
import { Wrapper } from "./styled";
import { Text, Card } from "../../index";

const StockRecommandCard = ({ onClick }) => {
  return (
    <Card theme="stockRecommandListCard" onClick={onClick}>
      <Wrapper>
        <Text theme="textStockRankingPercent">피엔케이피부임상연구센타</Text>
        <Text theme="textStockRankingScore">
          23
          <Text theme="textStockRankingPercent">%</Text>
        </Text>
      </Wrapper>
    </Card>
  );
};

export default StockRecommandCard;
