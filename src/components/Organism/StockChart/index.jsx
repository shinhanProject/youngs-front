import React from "react";
import ReactApexChart from "react-apexcharts";

const StockChart = () => {
  const Stockdata = {
    "2023-04-11": {
      open: "186600",
      high: "192400",
      low: "185100",
      close: "192100",
    },
    "2023-04-10": {
      open: "186000",
      high: "188500",
      low: "184200",
      close: "185900",
    },
    "2023-04-07": {
      open: "180400",
      high: "186000",
      low: "180600",
      close: "185000",
    },
    "2023-04-05": {
      open: "186400",
      high: "142400",
      low: "184100",
      close: "142100",
    },
    "2023-04-04": {
      open: "156000",
      high: "158500",
      low: "154200",
      close: "155900",
    },
    "2023-04-02": {
      open: "175400",
      high: "176500",
      low: "174600",
      close: "175100",
    },
  };
  // 주식 차트 데이터를 변환
  const seriesData = Object.keys(Stockdata).map(date => {
    const stockInfo = Stockdata[date];
    return [
      new Date(date).getTime(),
      parseFloat(stockInfo.open),
      parseFloat(stockInfo.high),
      parseFloat(stockInfo.low),
      parseFloat(stockInfo.close),
    ];
  });

  const series = [
    {
      data: seriesData,
    },
  ];

  const options = {
    chart: {
      type: "candlestick",
    },
    xaxis: {
      type: "datetime",
    },
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="candlestick"
        height={350}
        width={500}
      />
    </div>
  );
};

export default StockChart;
