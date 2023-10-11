import { useState } from "react";
import { InputWrapper, Label, UserInput } from "./styled";

const Input = ({ label, type, placeholder }) => {
  const [inputText, setInputText] = useState("");
  const handleChange = e => {
    setInputText(e.target.value);
  };
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <UserInput
        value={inputText}
        type={type}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
};

export default Input;
