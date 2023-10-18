import React from "react";
import { Text } from "../../index";

import { Wrapper } from "./styled";

const mapping = {
  netProfit: "당기순이익",
  totalEquity: "자본총계",
  totalAssets: "자산총계",
  totalLiabilities: "부채총계",
  currentAssets: "유동자산",
  currentLiabilities: "유동부채",
  operatingProfit: "영업이익",
  revenue: "매출액",
  dividendsPaid: "배당금지급",
  marketCap: "시가총액",
};

const StockListItem = ({ infoName, data }) => {
  const koreanName = mapping[infoName] || infoName;

  return (
    <Wrapper>
      <Text theme="stockTableTextTitle">{koreanName}</Text>
    </Wrapper>
  );
};

export default StockListItem;
