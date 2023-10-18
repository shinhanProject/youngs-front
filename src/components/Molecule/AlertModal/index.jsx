import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Wrapper1, Wrapper2, Wrapper3, Image } from "./styled";
import { Text, Card, Button } from "../../index";
import doraemi from "../../../assets/images/doraemi.svg";

const AlertModal = ({
  setModalOpen,
  // word,
  explanation,
  whereis,
  needSelect,
  onConfirmLogout,
}) => {
  const modalRef = useRef(null);
  const navigate = useNavigate();

  const closeModal = () => {
    setModalOpen(false);
  };
  const goWhere = whereIam => {
    if (whereIam === "toMain") {
      navigate("/");
    } else if (whereIam === "toLogin") {
      navigate("/login");
    } else {
      navigate("");
    }
  };
  useEffect(() => {
    const handler = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
        goWhere(whereis);
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
        top: "10vh",
        left: "35vw",
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
          {needSelect && (
            <Button
              theme="alertCloseButton"
              onClick={() => {
                closeModal();
                goWhere(whereis);
                onConfirmLogout();
              }}
            >
              확인
            </Button>
          )}
          <Button
            theme="alertCloseButton"
            onClick={() => {
              closeModal();
              goWhere(whereis);
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
