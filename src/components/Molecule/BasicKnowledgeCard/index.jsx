import React, { useState, useEffect } from "react";
import { Wrapper1, Wrapper2, Wrapper3 } from "./styled";
import { Text, Card } from "../../index";

const TextShortener = ({ text, maxLength }) => {
  const [shortenedText, setShortenedText] = useState("요약본");

  useEffect(() => {
    if (text.length > maxLength) {
      setShortenedText(`${text.substring(0, maxLength)}...`);
    } else {
      setShortenedText(text);
    }
  }, [text, maxLength]);

  return shortenedText;
};

const BasicKnowledgeCard = ({ name, category, description }) => {
  const maxLength = 20;
  const shortened = TextShortener({ text: description, maxLength }); // 여기 수정
  return (
    <Card theme="basicItemCard">
      <Wrapper3>
        <Wrapper1>
          <Text theme="textBasicItemName">{name} : PER </Text>
          <Text theme="textBasicItemDescription">{shortened}</Text>
        </Wrapper1>
        <Wrapper2>
          <Text theme="textBasicDate">{category} :주식 기초 정보</Text>
        </Wrapper2>
      </Wrapper3>
    </Card>
  );
};

export default BasicKnowledgeCard;
