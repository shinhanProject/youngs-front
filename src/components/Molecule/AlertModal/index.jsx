import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper1, Wrapper2, Wrapper3, Image } from "./styled";
import { Text, Card, Button } from "../../index";
import doraemi from "../../../assets/images/doraemi.svg";
import sol from "../../../assets/images/sol.svg";

const AlertModal = ({ setModalOpen, title, explanation, onOkButton, flag }) => {
  const modalRef = useRef(null);
  const navigate = useNavigate();
  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const handler = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div
      ref={modalRef}
      style={{
        top: "25vh",
        left: "35vw",
        position: "fixed",
      }}
    >
      <Card theme="alertModal">
        <Wrapper1>
          <Text theme="text1">{title}</Text>
          <Text theme="textGptDescription">{explanation}</Text>
        </Wrapper1>
        <Wrapper2>
          <Image src={flag ? sol : doraemi} alt="image" />
        </Wrapper2>
        <Wrapper3>
          <Button
            theme="alertCloseButton"
            onClick={() => {
              closeModal();
              onOkButton();
            }}
          >
            확인
          </Button>

          <Button
            theme="alertCloseButton"
            onClick={() => {
              closeModal();
              navigate("");
            }}
          >
            닫기
          </Button>
        </Wrapper3>
      </Card>
    </div>
  );
};

export default AlertModal;
