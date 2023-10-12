import React from "react";
import { StyledCard } from "./styled";

const Card = ({ theme, onClick, children }) => {
  return (
    <StyledCard type="div" theme={theme} onClick={onClick}>
      {children}
    </StyledCard>
  );
};

export default Card;
