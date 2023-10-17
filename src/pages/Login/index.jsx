import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../apis";
import { Header, Card, Button, Footer } from "../../components";
import { loginState } from "../../store/atoms";

import { Container, Wrapper, LoginInput, SignUpWrapper, Image } from "./styled";
import login from "../../assets/images/loginto.svg";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [pw, setPw] = useState("");
  const [userInfo, setUserInfo] = useRecoilState(loginState);

  const navigate = useNavigate();

  const onIdChange = e => {
    setUserEmail(e.target.value);
  };

  const onPwChange = e => {
    setPw(e.target.value);
  };

  const onLogin = async () => {
    axiosInstance
      .post("/auth/login", {
        email: userEmail,
        userPw: pw,
      })
      .then(response => {
        if (response.status === 200) {
          onLoginSuccess(response);
          setUserInfo({
            isLogin: true,
            userInfo: {
              userSeq: response.data.userSeq,
              email: userEmail,
              nickname: response.data.nickname,
              profile: response.data.profile,
            },
          });
          navigate("/");
        } else {
          alert("아이디/비밀번호가 일치하지 않습니다.");
        }
      })
      .catch(() => {
        alert("로그인 중 오류가 발생했습니다.");
      });
  };

  const onSilentRefresh = () => {
    axiosInstance
      .post("/auth/reissue", { email: userInfo.userInfo.email })
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          onLoginSuccess(response);
        }
      })
      .catch(e => {
        console.log(e);
        navigate("/login");
      });
  };

  const JWT_EXPIRY_TIME = 24 * 3600;

  const onLoginSuccess = response => {
    const accessToken = response.data.accessToken;
    axiosInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${accessToken}`;
    setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000);
  };
  console.log(userInfo.userInfo.email);
  return (
    <Container>
      <Header theme="opaque" />
      <Wrapper>
        <Card theme="loginCard">
          <Image src={login} alt="로그인" />
          <LoginInput
            placeholder="이메일"
            onChange={onIdChange}
            value={userEmail}
          />
          <LoginInput
            type="password"
            placeholder="비밀번호"
            onChange={onPwChange}
            value={pw}
          />
          <Button theme="blueBtn" onClick={onLogin}>
            로그인
          </Button>
          <SignUpWrapper>
            <Button theme="blueTextBtn">비밀번호 찾기</Button>
            <Button theme="blueTextBtn">
              <Link to="/signup">회원가입 하기</Link>
            </Button>
          </SignUpWrapper>
        </Card>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Login;
