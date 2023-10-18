import React from "react";
import ReactApexChart from "react-apexcharts";

const StockChart = ({ innerData }) => {
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
    <div style={{ width: "90%" }}>
      <ReactApexChart
        options={options}
        series={series}
        type="candlestick"
        width="100%"
        height="300"
      />
    </div>
  );
};

export default StockChart;
