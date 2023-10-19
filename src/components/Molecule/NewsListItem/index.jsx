import React, { useState, useEffect } from "react";
import { Text } from "../../index";
import { Wrapper } from "./styled";

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
const NewsListItem = ({ title, content, date }) => {
  const maxLength = 80;
  const shortened = TextShortener({ text: content, maxLength }); // 여기 수정
  return (
    <Wrapper>
      <Text theme="newsTitle">{title}</Text>
      <Text theme="newsDescriptionText">{shortened}</Text>
      <Text theme="newsDateText">{date}</Text>
    </Wrapper>
  );
};
export default NewsListItem;
