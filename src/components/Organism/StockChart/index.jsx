import React from "react";
import ReactApexChart from "react-apexcharts";

const StockChart = ({ innerData }) => {
  console.log("여기는 차트차트차트", innerData);

  const series = [
    {
      data: innerData,
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
