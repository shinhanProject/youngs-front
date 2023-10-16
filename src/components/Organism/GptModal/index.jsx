import React, { useEffect, useRef } from "react";
import { Wrapper1, Wrapper2, Wrapper3, Image } from "./styled";
import { Text, Card, Button } from "../../index";
import gptLogo from "../../../assets/images/gptLogo.svg";

const GptModalCard = ({
  setModalOpen,
  word,
  explanation,
  setExplanation,
  position,
}) => {
  const modalRef = useRef(null);

  const closeModal = () => {
    setModalOpen(false);
    setExplanation("설명을 불러오는 중입니다.");
  };

  useEffect(() => {
    const handler = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
        setExplanation("설명을 불러오는 중입니다.");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div
      ref={modalRef}
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        position: "fixed",
      }}
    >
      <Card theme="gptModalCard">
        <Wrapper1>
          <Text theme="text1">{word}</Text>
          <Image src={gptLogo} alt="gpt로고" />
        </Wrapper1>
        <Wrapper2>
          <Text theme="textGptDescription">{explanation}</Text>
        </Wrapper2>
        <Wrapper3>
          <Button theme="gptCloseButton" onClick={closeModal}>
            닫기
          </Button>
        </Wrapper3>
      </Card>
    </div>
  );
};

export default GptModalCard;
