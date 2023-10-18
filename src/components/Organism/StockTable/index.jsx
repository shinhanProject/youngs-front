import React from "react";
import { StockListItem } from "../../index";
import { Container } from "./styled";

const StockTable = ({ stockData }) => {
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
