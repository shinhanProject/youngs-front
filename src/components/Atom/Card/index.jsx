import React from "react";
import { StyledCard } from "./styled";

const Card = ({ styleType, onClick, children }) => {
  return (
    <StyledCard type="div" styleType={styleType} onClick={onClick}>
      {children}
    </StyledCard>
  );
};

export default Card;
