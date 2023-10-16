import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../apis";
import { Header, Card, Button, Footer, Text } from "../../components";

import { Container, Wrapper, SignUpInput, Image, EmailWrapper } from "./styled";
import signup from "../../assets/images/signupto.svg";

const SignUp = () => {
  const [userEmail, setuserEmail] = useState("");
  const [pw, setPw] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [userAge, setUserAge] = useState("");

  const [emailError, setEmailError] = useState("");
  const [isDuplicateChecked, setIsDuplicateChecked] = useState(false);

  const navigate = useNavigate();

  const duplicateCheckButtonText = isDuplicateChecked ? "확인완료" : "중복확인";
  const isButtonDisabled = isDuplicateChecked;

  const onPwChange = e => {
    setPw(e.target.value);
  };

  const onNicknameChange = e => {
    setUserNickname(e.target.value);
  };

  const onAgeChange = e => {
    setUserAge(e.target.value);
  };

  const emailCheck = username => {
    const emailRegEx =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    const isValid = emailRegEx.test(username);
    if (!isValid) {
      setEmailError("올바른 이메일 주소가 아닙니다.");
    } else {
      setEmailError("");
    }
  };

  const onEmailChange = e => {
    setuserEmail(e.target.value);
    setIsDuplicateChecked(false);
    emailCheck(e.target.value);
  };

  const onDuplicateCheck = async () => {
    if (emailError === "올바른 이메일 주소가 아닙니다.") {
      alert("올바른 이메일 주소가 아닙니다.");
    } else {
      axiosInstance
        .post("/auth/emailcheck", { email: userEmail })
        .then(response => {
          console.log(response.data);
          setIsDuplicateChecked(true);
          alert("사용 가능한 이메일입니다.");
        })
        .catch(e => {
          console.log(e);
          alert("중복된 이메일입니다.");
        });
    }
  };

  const onSignUp = async () => {
    axiosInstance
      .post("/auth/signup", {
        email: userEmail,
        nickname: userNickname,
        userPw: pw,
        age: userAge,
      })
      .then(response => {
        console.log(response.data);
        alert("가입이 완료되었습니다. 로그인을 진행해주세요.");
        navigate("/login");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const handleSubmit = () => {
    if (isDuplicateChecked) {
      onSignUp();
    } else {
      alert("이메일 중복 확인을 먼저 수행해주세요.");
    }
  };

  return (
    <Container>
      <Header theme="opaque" />
      <Wrapper>
        <Card theme="loginCard">
          <Image src={signup} alt="회원가입" />
          <EmailWrapper>
            <SignUpInput
              placeholder="이메일"
              onChange={onEmailChange}
              value={userEmail}
            />
            <Button
              theme="duplicateCheckBtn"
              onClick={onDuplicateCheck}
              disabled={isButtonDisabled}
            >
              {duplicateCheckButtonText}
            </Button>
          </EmailWrapper>
          {emailError && <Text theme="emailerror">{emailError}</Text>}
          <SignUpInput
            placeholder="닉네임"
            onChange={onNicknameChange}
            value={userNickname}
          />
          <SignUpInput
            placeholder="나이"
            onChange={onAgeChange}
            value={userAge}
          />
          <SignUpInput
            type="password"
            placeholder="비밀번호"
            onChange={onPwChange}
            value={pw}
          />
          <Button theme="blueBtn" onClick={handleSubmit}>
            회원가입
          </Button>
        </Card>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default SignUp;
