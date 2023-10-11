import React from "react";
import { Link } from "react-router-dom";

import { Wrapper, Image, ButtonGroup } from "./styled";
import logo from "../../../assets/images/logo.svg";

const Header = ({ theme }) => {
  return (
    <Wrapper theme={theme}>
      <Link to="/">
        <Image src={logo} alt="헤더로고" />
      </Link>
      <ButtonGroup>
        <button type="button">버튼 자리</button>
      </ButtonGroup>
    </Wrapper>
  );
};

export default Header;
