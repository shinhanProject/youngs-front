import React from "react";
import { Wrapper, Asterisk, StyledListItem, Wrapper2 } from "./styled";

import asterisk from "../../../assets/images/asterisk.svg";

const ListItem = ({ category, onClick, children }) => {
  return (
    <Wrapper>
      <Wrapper2>
        <Asterisk src={asterisk} alt="asterisk" />
      </Wrapper2>
      <StyledListItem category={category} onClick={onClick}>
        {children}
      </StyledListItem>
    </Wrapper>
  );
};

export default ListItem;
