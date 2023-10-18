import React from "react";
import { StockListItem } from "../../index";
import { Container } from "./styled";

const StockTable = () => {
  const stockData = [
    {
      price: 1655,
      per: 35,
      변동률: 35,
      profit: 23241241241,
      Close: 178.72,
      Open: 176.65,
      Range: 174.8,
      Volume: 57400501,
      Change: 24.39,
      Shares: 15634232000,
      MarketCap: 2.77,
      EPS: 5.98,
      Dividend: 0.96,
    },
  ];
  const firstSectionData = stockData.slice(0, 6);
  return (
    <Container>
      {firstSectionData.map(sdata => (
        <div>
          {Object.entries(sdata).map(([key, value]) => (
            <StockListItem infoName={key} data={value} />
          ))}
        </div>
      ))}
    </Container>
  );
};

export default StockTable;
