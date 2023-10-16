import React, { useState, useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";
import { axiosInstance } from "../../../apis";
import { loginState } from "../../../store/atoms";
import { Text, Button } from "../../index";

import {
  Container,
  Wrapper,
  NicknameInput,
  ImgWrapper,
  SettingProfile,
} from "./styled";

import sol from "../../../assets/images/sol.svg";
import doraemi from "../../../assets/images/doraemi.svg";
import shoo from "../../../assets/images/shoo.svg";
import lino from "../../../assets/images/lino.svg";
import lulu from "../../../assets/images/lulu.svg";
import moli from "../../../assets/images/moli.svg";

const SettingModal = ({ setIsOpenSettingModal, id }) => {
  const [changeNickname, setChangeNickname] = useState("");
  const [changeProfile, setChangeProfile] = useState("");
  const setUser = useSetRecoilState(loginState);

  const modalRef = useRef(null);

  const onNicknameChange = e => {
    setChangeNickname(e.target.value);
  };

  const updateProfile = async () => {
    axiosInstance
      .patch(`/profile/${id}`, {
        profile: changeProfile,
        nickname: changeNickname,
      })
      .then(response => {
        if (response.status === 200) {
          setUser(prev => ({
            ...prev,
            userInfo: {
              ...prev.userInfo,
              nickname: changeNickname,
              profile: changeProfile,
            },
          }));
        } else {
          alert("프로필 수정을 실패했습니다.");
        }
      })
      .catch(() => {
        alert("프로필 수정을 실패했습니다.");
      });
  };

  const changeSetting = () => {
    if (changeNickname !== "" && changeProfile !== "") {
      updateProfile();
    }
    setIsOpenSettingModal(false);
  };

  useEffect(() => {
    const handler = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpenSettingModal(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <Container ref={modalRef}>
      <Wrapper>
        <Text theme="textSetting">프로필 변경</Text>
        <ImgWrapper>
          <SettingProfile src={sol} onClick={() => setChangeProfile("SOL")} />
          <SettingProfile
            src={doraemi}
            onClick={() => setChangeProfile("DORAEMI")}
          />
          <SettingProfile src={shoo} onClick={() => setChangeProfile("SHOO")} />
        </ImgWrapper>
        <ImgWrapper>
          <SettingProfile src={lino} onClick={() => setChangeProfile("LINO")} />
          <SettingProfile src={lulu} onClick={() => setChangeProfile("LULU")} />
          <SettingProfile src={moli} onClick={() => setChangeProfile("MOLI")} />
        </ImgWrapper>
      </Wrapper>
      <Wrapper>
        <Text theme="textSetting">닉네임 변경</Text>
        <NicknameInput
          placeholder="닉네임"
          onChange={onNicknameChange}
          value={changeNickname}
        />
      </Wrapper>
      <Button theme="settingBtn" onClick={changeSetting}>
        확인
      </Button>
    </Container>
  );
};

export default SettingModal;
