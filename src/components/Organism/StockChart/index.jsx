import React from "react";
import ReactApexChart from "react-apexcharts";
import { Text } from "../../index";
import { Container } from "./styled";

const StockChart = () => {
  const generateDummyData = () => {
    const data = [];
    const currentDate = new Date();

    for (let i = 0; i < 30; i += 1) {
      const date = new Date(currentDate);
      date.setDate(date.getDate() - i); // Subtract 'i' days from the current date
      const timeClose = date.toISOString();
      const open = Math.random() * 1000; // Replace with your desired range
      const high = open + Math.random() * 100; // Replace with your desired range
      const low = open - Math.random() * 100; // Replace with your desired range
      const close = open + Math.random() * 200 - 100; // Replace with your desired range

      data.push({ timeClose, open, high, low, close });
    }

    return data;
  };

  const data = generateDummyData();

  const options = {
    theme: {
      mode: "dark",
    },
    chart: {
      type: "candlestick",
      height: 350,
      width: 500,
      toolbar: {
        show: false,
      },
      background: "transparent",
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      type: "datetime",
      categories: data?.map(price => price.timeClose),
      labels: {
        style: {
          colors: "#9c88ff",
        },
      },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#3C90EB",
          downward: "#DF7D46",
        },
      },
    },
  };

  const series = [
    {
      data: data?.map(price => {
        return [
          Date.parse(price.timeClose),
          price.open,
          price.high,
          price.low,
          price.close,
        ];
      }),
    },
  ];

  return (
    <Container>
      <Text>주식 차트</Text>
      <ReactApexChart
        options={options}
        series={series}
        type="candlestick"
        height={350}
        width={500}
      />
    </Container>
  );
};

export default StockChart;
