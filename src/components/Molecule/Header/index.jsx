import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { Link, useNavigate } from "react-router-dom";
import { loginState } from "../../../store/atoms";
import { axiosInstance } from "../../../apis";
import { Button, LoginProfile } from "../../index";

import { Wrapper, Image, ButtonGroup } from "./styled";
import logo from "../../../assets/images/logo.svg";

const Header = ({ theme }) => {
  const [loginUserState, setLoginUserState] = useRecoilState(loginState);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(loginUserState);
  }, [loginUserState]);

  const onLogout = async () => {
    if (confirm("로그아웃 하시겠습니까?")) {
      axiosInstance
        .post("/auth/logout")
        .then(response => {
          if (response.status === 200) {
            setLoginUserState({
              isLogin: false,
              userInfo: {
                userSeq: -999,
                nickname: "",
                profile: "",
                accessToken: "",
                refreshToken: "",
              },
            });
            navigate("/");
            sessionStorage.removeItem("recoil-persist");
            delete axiosInstance.defaults.headers.common["Authorization"];
          }
        })
        .catch(() => {
          alert("로그아웃 중 오류가 발생했습니다.");
        });
    }
  };

  return (
    <Wrapper theme={theme}>
      <Link to="/">
        <Image src={logo} alt="헤더로고" />
      </Link>
      <ButtonGroup login={loginUserState.isLogin}>
        <Link to="/basicknowledgelist">
          <Button theme="headerBtn">정보 탐색</Button>
        </Link>
        <Link to="/ranking">
          <Button theme="headerBtn">랭킹</Button>
        </Link>
        {loginUserState.isLogin ? (
          <>
            <Link to={`/mypage/${loginUserState.userInfo.userSeq}`}>
              <LoginProfile src={loginUserState.userInfo.profile}>
                {loginUserState.userInfo.nickname}
              </LoginProfile>
            </Link>
            <Button theme="loginBtn" onClick={onLogout}>
              LOGOUT
            </Button>
          </>
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
