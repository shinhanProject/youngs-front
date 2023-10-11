import React from "react";
import { Wrapper, Asterisk, StyledListItem } from "./styled";

import asterisk from "../../../assets/images/asterisk.svg";

const ListItem = ({ state, onClick, children }) => {
  return (
    <Wrapper>
      <Asterisk src={asterisk} alt="asterisk" />
      <StyledListItem state={state} onClick={onClick}>
        {children}
      </StyledListItem>
    </Wrapper>
  );
};

export default ListItem;
