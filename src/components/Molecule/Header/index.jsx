import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { Link, useNavigate } from "react-router-dom";
import { loginState } from "../../../store/atoms";
import { axiosInstance } from "../../../apis";
import { AlertModal, Button, LoginProfile } from "../../index";
import { Wrapper, Image, ButtonGroup } from "./styled";
import logo from "../../../assets/images/logo.svg";

const Header = ({ theme }) => {
  const [loginUserState, setLoginUserState] = useRecoilState(loginState);
  const [explanation, setExplanation] = useState("오류가 발생했습니다");
  const [modalOpen, setModalOpen] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const [title, setTitle] = useState("죄송합니다");
  const showModal = () => {
    setModalOpen(true);
  };
  const navigate = useNavigate();

  useEffect(() => {
    console.log(loginUserState);
  }, [loginUserState]);

  const showLogoutConfirm = () => {
    showModal();
    setTitle("정말 가시나요");
    setExplanation("로그아웃 하시겠습니까?");
  };
  const onRank = () => {
    navigate("/login");
  };
  const onLogout = () => {
    axiosInstance
      .post("/auth/logout")
      .then(response => {
        if (response.status === 200) {
          setLoginUserState({
            isLogin: false,
            userInfo: {
              userSeq: -999,
              email: "",
              nickname: "",
              profile: "",
            },
          });
          navigate("/");
          sessionStorage.removeItem("recoil-persist");
          delete axiosInstance.defaults.headers.common["Authorization"];
        }
      })
      .catch(e => {
        console.log(e);
        setTitle("죄송해요");
        setExplanation("로그아웃 중 오류가 발생했습니다.");
        showModal();
        navigate("/");
      });
  };

  const goRank = () => {
    if (loginUserState.isLogin) {
      navigate("/ranking");
    } else {
      showModal();
      setTitle("로그인이 필요한 서비스");
      setExplanation("로그인 하시겠습니까?");
    }
  };

  return (
    <Wrapper theme={theme}>
      {modalOpen && (
        <AlertModal
          explanation={explanation}
          setModalOpen={setModalOpen}
          onOkButton={isLogout ? onLogout : onRank}
          title={title}
        />
      )}

      <Link to="/">
        <Image src={logo} alt="헤더로고" />
      </Link>
      <ButtonGroup login={loginUserState.isLogin}>
        <Link to="/basicknowledge">
          <Button theme="headerBtn">정보 탐색</Button>
        </Link>
        <Button theme="headerBtn" onClick={goRank}>
          랭킹
        </Button>
        {loginUserState.isLogin ? (
          <>
            <Link to={`/mypage/${loginUserState.userInfo.userSeq}`}>
              <LoginProfile profile={loginUserState.userInfo.profile}>
                {loginUserState.userInfo.nickname}
              </LoginProfile>
            </Link>
            <Button
              theme="loginBtn"
              onClick={() => {
                showLogoutConfirm();
                setIsLogout(true);
              }}
            >
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
