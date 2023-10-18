import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { loginState, summaryCheck } from "../../../store/atoms";
import { Button } from "../../index";
import { axiosInstance } from "../../../apis";
import {
  InputWrapper,
  Label,
  UserInput,
  ButtonWrapper,
  SummaryInput,
} from "./styled";

const Input = ({ label, type, placeholder, id, categorySeq }) => {
  const navigate = useNavigate();
  const [inputText, setInputText] = useState("");
  const isLogin = useRecoilValue(loginState);
  const setIsSummaryDone = useSetRecoilState(summaryCheck);

  const handleChange = e => {
    setInputText(e.target.value);
  };

  const enrollPostData = {
    category: categorySeq,
    articleId: id,
    context: inputText,
  };

  const EnrollSummaryapi = async () => {
    if (isLogin.isLogin) {
      axiosInstance
        .post(`/summary`, enrollPostData)
        .then(response => {
          console.log(response.data);
          setIsSummaryDone(true);
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      alert("로그인이 필요한 서비스입니다.");
      navigate("/login");
    }
  };

  const handleEnter = e => {
    if (e.key === "Enter") {
      EnrollSummaryapi();
    }
  };

  return (
    <SummaryInput>
      <InputWrapper>
        <Label>{label}</Label>
        <UserInput
          value={inputText}
          type={type}
          onChange={handleChange}
          placeholder={placeholder}
          onKeyDown={handleEnter}
        />
      </InputWrapper>
      <ButtonWrapper>
        <Button theme="summaryEnrollBtn" onClick={EnrollSummaryapi}>
          요약하기
        </Button>
      </ButtonWrapper>
    </SummaryInput>
  );
};

export default Input;
