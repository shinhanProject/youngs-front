import React from "react";
import { Wrapper, Asterisk, StyledListItem } from "./styled";

import asterisk from "../../../assets/images/asterisk.svg";

const ListItem = ({ category, onClick, children }) => {
  return (
    <Wrapper>
      <Asterisk src={asterisk} alt="asterisk" />
      <StyledListItem category={category} onClick={onClick}>
        {children}
      </StyledListItem>
    </Wrapper>
  );
};

export default ListItem;
