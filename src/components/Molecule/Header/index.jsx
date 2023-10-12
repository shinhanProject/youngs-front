import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../index";

import { Wrapper, Image, ButtonGroup } from "./styled";
import logo from "../../../assets/images/logo.svg";

const Header = ({ theme }) => {
  const loginState = false;

  return (
    <Wrapper theme={theme}>
      <Link to="/">
        <Image src={logo} alt="헤더로고" />
      </Link>
      <ButtonGroup>
        <Link to="/basicknowledgelist">
          <Button theme="headerBtn">정보 탐색</Button>
        </Link>
        <Link to="/ranking">
          <Button theme="headerBtn">랭킹</Button>
        </Link>
        {loginState ? (
          <div>프로필</div>
        ) : (
          <Link to="/login">
            <Button theme="loginBtn">LOGIN</Button>
          </Link>
        )}
      </ButtonGroup>
    </Wrapper>
  );
};

export default Header;
