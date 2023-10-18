import { useEffect, useState } from "react";
import {
  InputWrapper,
  Label,
  UserInput,
  SummaryInput,
  ButtonWrapper,
} from "../Input/styled";
import { Button } from "../../index";
import { axiosInstance } from "../../../apis";

const UpdateInput = ({ label, type, id, categorySeq }) => {
  const [inputText, setInputText] = useState("");
  const [summary, setSummary] = useState({
    summarySeq: -999,
    context: "",
  });

  const handleChange = e => {
    setInputText(e.target.value);
  };

  const getSummary = async () => {
    axiosInstance
      .get(`/summary?category=${categorySeq}&articleId=${id}`)
      .then(response => {
        setSummary({
          summarySeq: response.data.summarySeq,
          context: response.data.context,
        });
        setInputText(response.data.context);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const editPostData = {
    category: categorySeq,
    summarySeq: summary.summarySeq,
    context: inputText,
  };

  const EditSummaryapi = async () => {
    axiosInstance
      .patch(`/summary`, editPostData)
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getSummary();
  }, []);

  const handleEnter = e => {
    if (e.key === "Enter") {
      EditSummaryapi();
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
          onKeyDown={handleEnter}
        />
      </InputWrapper>
      <ButtonWrapper>
        <Button theme="summaryEditBtn" onClick={EditSummaryapi}>
          수정하기
        </Button>
      </ButtonWrapper>
    </SummaryInput>
  );
};

export default UpdateInput;
