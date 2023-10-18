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
  const [whereis, setWhereis] = useState("toMain");
  const [needSelect, SetNeedSelect] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };
  const navigate = useNavigate();

  useEffect(() => {
    console.log(loginUserState);
  }, [loginUserState]);

  // const onLogout = async () => {
  //   if (confirm("로그아웃 하시겠습니까?")) {
  //     axiosInstance
  //       .post("/auth/logout")
  //       .then(response => {
  //         if (response.status === 200) {
  //           setLoginUserState({
  //             isLogin: false,
  //             userInfo: {
  //               userSeq: -999,
  //               email: "",
  //               nickname: "",
  //               profile: "",
  //             },
  //           });
  //           navigate("/");
  //           sessionStorage.removeItem("recoil-persist");
  //           delete axiosInstance.defaults.headers.common["Authorization"];
  //         }
  //       })
  //       .catch(e => {
  //         console.log(e);
  //         showModal();
  //         setExplanation("로그아웃 중 오류가 발생했습니다.");
  //         setWhereis("toMain");
  //       });
  //   }
  // };
  const showLogoutConfirm = () => {
    showModal();
    setExplanation("로그아웃 하시겠습니까?");
    setWhereis("toMain");
    SetNeedSelect(true);
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
        showModal();
        setExplanation("로그아웃 중 오류가 발생했습니다.");
        setWhereis("toMain");
      });
  };

  const goRank = () => {
    if (loginUserState.isLogin) {
      navigate("/ranking");
    } else {
      showModal();
      setExplanation("로그인이 필요한 서비스입니다.");
      setWhereis("toLogin");
    }
  };

  return (
    <Wrapper theme={theme}>
      {modalOpen && (
        <AlertModal
          whereis={whereis}
          explanation={explanation}
          setModalOpen={setModalOpen}
          onConfirmLogout={onLogout}
          needSelect={needSelect}
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
            <Button theme="loginBtn" onClick={showLogoutConfirm}>
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
