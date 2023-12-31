import React, { useEffect, useState } from "react";
import { Unit, Text } from "../../index";
import { axiosInstance } from "../../../apis";

import { Container, Wrapper } from "./styled";

const SandBeach = ({ id }) => {
  const [data, setData] = useState({});
  const [unit, setUnit] = useState({});

  const transformData = () => {
    const today = new Date();
    let transformedData = {};

    for (let i = 0; i < 365; i += 1) {
      const offset = 1000 * 60 * 60 * 9;
      const date = new Date(new Date().getTime() + offset);
      date.setDate(today.getDate() - i);
      const formattedDate = date.toISOString().slice(0, 10);
      const formattedDataDate = formattedDate.replace(/-/g, "");
      const matchingData = data.find(item => {
        const itemDate = item.createdAt.replace(/-/g, "");
        return itemDate === formattedDataDate;
      });

      if (matchingData) {
        transformedData[formattedDate] = matchingData.count;
      } else {
        transformedData[formattedDate] = 0;
      }
    }
    transformedData = Object.fromEntries(
      Object.entries(transformedData).reverse(),
    );
    return transformedData;
  };

  const getClam = () => {
    axiosInstance
      .get(`/profile/${id}/sand`)
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getClam();
  }, []);

  useEffect(() => {
    if (Object.keys(data).length !== 0) {
      setUnit(transformData());
    }
  }, [data]);

  return (
    <Container>
      <Text theme="mypageText">
        {Object.keys(unit)[0]} ~{" "}
        {Object.keys(unit)[Object.keys(unit).length - 1]}
      </Text>
      <Wrapper>
        {Object.keys(unit).map(date => (
          <Unit key={date} count={unit[date]} date={date} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default SandBeach;
