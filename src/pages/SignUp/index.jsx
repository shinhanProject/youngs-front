import React, { useState } from "react";
import { Header, Card, Button, Footer } from "../../components";

import { Container, Wrapper, SignUpInput, Image, EmailWrapper } from "./styled";
import signup from "../../assets/images/signupto.svg";

const SignUp = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [nickname, setNickname] = useState("");
  const [age, setAge] = useState("");

  const onIdChange = e => {
    setId(e.target.value);
  };

  const onPwChange = e => {
    setPw(e.target.value);
  };

  const onNicknameChange = e => {
    setNickname(e.target.value);
  };

  const onAgeChange = e => {
    setAge(e.target.value);
  };

  return (
    <Container>
      <Header />
      <Wrapper>
        <Card theme="loginCard">
          <Image src={signup} alt="회원가입" />
          <EmailWrapper>
            <SignUpInput
              placeholder="이메일"
              onChange={onIdChange}
              value={id}
            />
            <Button theme="duplicateCheckBtn">중복확인</Button>
          </EmailWrapper>
          <SignUpInput
            placeholder="닉네임"
            onChange={onNicknameChange}
            value={nickname}
          />
          <SignUpInput placeholder="나이" onChange={onAgeChange} value={age} />
          <SignUpInput
            type="password"
            placeholder="비밀번호"
            onChange={onPwChange}
            value={pw}
          />
          <Button theme="blueBtn">회원가입</Button>
        </Card>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default SignUp;
