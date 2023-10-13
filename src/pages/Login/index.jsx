import React, { useState } from "react";
import { Header, Card, Button, Footer } from "../../components";

import { Container, Wrapper, LoginInput, SignUpWrapper, Image } from "./styled";
import login from "../../assets/images/loginto.svg";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const onIdChange = e => {
    setId(e.target.value);
  };

  const onPwChange = e => {
    setPw(e.target.value);
  };

  return (
    <Container>
      <Header />
      <Wrapper>
        <Card theme="loginCard">
          <Image src={login} alt="로그인" />
          <LoginInput placeholder="이메일" onChange={onIdChange} value={id} />
          <LoginInput
            type="password"
            placeholder="비밀번호"
            onChange={onPwChange}
            value={pw}
          />
          <Button theme="blueBtn">로그인</Button>
          <SignUpWrapper>
            <Button theme="blueTextBtn">비밀번호 찾기</Button>
            <Button theme="blueTextBtn">회원가입 하기</Button>
          </SignUpWrapper>
        </Card>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Login;
