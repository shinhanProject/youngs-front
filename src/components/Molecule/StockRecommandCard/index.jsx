import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./styled";
import { Text, Card } from "../../index";

const StockRecommandCard = ({ stockId, stockName, rate }) => {
  console.log(stockId, stockName, "왜...");
  return (
    <Link to={`/stdetail/${stockId}`}>
      <Card theme="stockRecommandListCard">
        <Wrapper>
          <Text theme="textStockRankingTitle">{stockName}</Text>
          <Text theme="textStockRankingScore">{rate}%</Text>
        </Wrapper>
      </Card>
    </Link>
  );
};

export default StockRecommandCard;
