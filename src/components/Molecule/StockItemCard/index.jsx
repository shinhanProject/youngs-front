import React from "react";
import { Wrapper1, Wrapper2, Wrapper3 } from "./styled";
import { Text, Card } from "../../index";

const StockItemCard = ({ name, price, priceChange, date }) => {
  let textColor = "blackPrice";
  if (priceChange > 0) {
    textColor = "upPrice";
  } else if (priceChange < 0) {
    textColor = "downPrice";
  }

  return (
    <Card theme="stockItemCard">
      <Text theme="textSummaryDate">{date}: 날짜</Text>
      <Wrapper3>
        <Wrapper1>
          <Text theme="textStockItemName">{name} : 삼성전자</Text>
          <Text theme="textStockItemDescription">{price}: 65000</Text>
        </Wrapper1>
        <Wrapper2>
          <Text theme={textColor}> {priceChange} :상승률</Text>
        </Wrapper2>
      </Wrapper3>
    </Card>
  );
};

export default StockItemCard;
