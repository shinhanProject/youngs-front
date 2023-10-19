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

function formatNumber(value) {
  const numberString = value.replace(/["\\]/g, ""); // 쌍따옴표와 역슬래시 제거
  const number = parseInt(numberString, 10);

  if (isNaN(number)) {
    return "Invalid Number";
  }

  // 억(10억) 단위로 포맷
  return (number / 100000000).toLocaleString() + " 억";
}

const StockListItem = ({ infoName, data }) => {
  const koreanName = mapping[infoName] || infoName;
  const formattedData = formatNumber(data);

  return (
    <Wrapper>
      <Text theme="stockTableTextTitle">{koreanName}</Text>
      <Text theme="stockTableTextContent">{formattedData}</Text>
    </Wrapper>
  );
};

export default StockListItem;
