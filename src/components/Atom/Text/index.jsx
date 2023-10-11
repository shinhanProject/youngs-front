import React from "react";
import { StyledText } from "./styled";

const Text = ({ styleType, children }) => {
  return <StyledText styleType={styleType}>{children}</StyledText>;
};

export default Text;
