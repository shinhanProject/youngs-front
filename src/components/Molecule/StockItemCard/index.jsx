import React from "react";
import { Wrapper1 } from "./styled";
import { Text, Card } from "../../index";

const StockItemCard = ({ stockName, price }) => {
  return (
    <Card theme="stockItemCard">
      <Wrapper1>
        <Text theme="textStockItemName"> {stockName} </Text>
        <Text theme="textStockItemDescription">전날 종가 : {price}</Text>
      </Wrapper1>
    </Card>
  );
};

export default StockItemCard;
