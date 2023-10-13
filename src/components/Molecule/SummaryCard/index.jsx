import React from "react";
import { Wrapper1, Wrapper2 } from "./styled";
import { Text, Card, Button } from "../../index";

const SummaryCard = ({ onClick }) => {
  return (
    <Card theme="summaryCard">
      <Wrapper1>
        <Text theme="textSummaryDate">2023-03-10</Text>
        <Text theme="textSummaryDescription">
          요약 내용~~~~~~~~~요약 내용~~~~~~~~~요약 내용~~~~~~~~~요약
          내용~~~~~~~~~요약 내용~~~~~~~~~
        </Text>
      </Wrapper1>
      <Wrapper2>
        <Text theme="textSummaryTopic">주식 기초 정보</Text>
        <Button theme="headerBtn" onClick={onClick}>
          내용 보러가기
        </Button>
      </Wrapper2>
    </Card>
  );
};

export default SummaryCard;
