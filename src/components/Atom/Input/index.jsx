import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { summaryContent } from "../../../store/atoms";
import { InputWrapper, Label, UserInput } from "./styled";

const Input = ({ label, type, placeholder, context, onEnter }) => {
  const setSummaryContent = useSetRecoilState(summaryContent);
  const [inputText, setInputText] = useState("");
  useEffect(() => {
    if (context && context.length) {
      setInputText(context);
    }
  }, []);

  useEffect(() => {
    setSummaryContent(inputText);
  }, [inputText]);
  const handleChange = e => {
    setInputText(e.target.value);
  };

  return (
    <InputWrapper>
      <Label>{label}</Label>
      <UserInput
        defaultValue={inputText}
        type={type}
        onChange={handleChange}
        placeholder={placeholder}
        onKeyUp={onEnter}
      />
    </InputWrapper>
  );
};

export default Input;
