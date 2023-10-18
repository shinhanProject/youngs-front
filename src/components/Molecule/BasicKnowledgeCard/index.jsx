import React, { useState, useEffect } from "react";
import { Wrapper1, Wrapper3 } from "./styled";
import { Text, Card } from "../../index";

const TextShortener = ({ text, maxLength }) => {
  const [shortenedText, setShortenedText] = useState("요약본");

  useEffect(() => {
    if (text.length > maxLength) {
      const truncatedText = text.substring(0, maxLength);
      const lastSpaceIndex = truncatedText.lastIndexOf(" ");
      if (lastSpaceIndex !== -1) {
        setShortenedText(truncatedText.substring(0, lastSpaceIndex) + "...");
      } else {
        setShortenedText(truncatedText + "...");
      }
    } else {
      setShortenedText(text);
    }
  }, [text, maxLength]);

  return shortenedText;
};

const BasicKnowledgeCard = ({ name, description }) => {
  const maxLength = 29;
  const shortened = TextShortener({ text: description, maxLength }); // 여기 수정
  return (
    <Card theme="basicItemCard">
      <Wrapper3>
        <Wrapper1>
          <Text theme="textBasicItemName">{name} </Text>
          <Text theme="textBasicItemDescription">{shortened}</Text>
        </Wrapper1>
      </Wrapper3>
    </Card>
  );
};

export default BasicKnowledgeCard;
