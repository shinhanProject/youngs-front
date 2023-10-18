import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./styled";
import { Text, Card } from "../../index";

const StockRecommandCard = ({ key, stockName, rate }) => {
  return (
    <Link to={`/stdetail/${key}}`}>
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
