import React, { useRef } from "react";
import { Wrapper1, Wrapper2, Wrapper3, Image } from "./styled";
import { Text, Card, Button } from "../../index";
import doraemi from "../../../assets/images/doraemi.svg";

const AlertModal = ({
  setModalOpen,
  // word,
  explanation,
  setExplanation,
  // position,
}) => {
  const modalRef = useRef(null);

  const closeModal = () => {
    setModalOpen(false);
    setExplanation("설명을 불러오는 중입니다.");
  };

  //   useEffect(() => {
  //     const handler = event => {
  //       if (modalRef.current && !modalRef.current.contains(event.target)) {
  //         setModalOpen(false);
  //         setExplanation("설명을 불러오는 중입니다.");
  //       }
  //     };
  //     document.addEventListener("mousedown", handler);
  //     return () => {
  //       document.removeEventListener("mousedown", handler);
  //     };
  //

  return (
    <div
      ref={modalRef}
      style={{
        top: "10vh",
        left: "50vw",
        position: "absolute",
      }}
    >
      <Card theme="alertModal">
        <Wrapper1>
          <Text theme="text1">죄송합니다</Text>
          <Text theme="textGptDescription">{explanation}</Text>
        </Wrapper1>
        <Wrapper2>
          <Image src={doraemi} alt="doraemi" />
        </Wrapper2>
        <Wrapper3>
          <Button theme="alertCloseButton" onClick={closeModal}>
            닫기
          </Button>
        </Wrapper3>
      </Card>
    </div>
  );
};

export default AlertModal;
