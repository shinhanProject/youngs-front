import React from "react";
import { StockListItem } from "../../index";
import { Container } from "./styled";

const StockTable = ({ stockData }) => {
  console.log(stockData, " 스톡 테이블입니다 ");
  return (
    <Container>
      {Object.entries(stockData).map(([key, value]) => (
        <div key={key}>
          <StockListItem infoName={key} data={value} />
        </div>
      ))}
    </Container>
  );
};

export default StockTable;
