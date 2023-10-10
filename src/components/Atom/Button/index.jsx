import React from "react";
import { StyledButton } from "./styled";

const Button = ({ styleType, onClick, children }) => {
  return (
    <StyledButton type="button" styleType={styleType} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
