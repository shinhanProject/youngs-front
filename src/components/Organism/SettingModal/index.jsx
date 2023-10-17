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
  const [selectedProfile, setSelectedProfile] = useState(""); // 선택한 프로필 상태 추가
  const setUser = useSetRecoilState(loginState);

  const modalRef = useRef(null);

  const onNicknameChange = e => {
    setChangeNickname(e.target.value);
  };

  const updateProfile = async () => {
    axiosInstance
      .patch(`/profile/${id}`, {
        profile: selectedProfile, // 선택한 프로필로 업데이트
        nickname: changeNickname,
      })
      .then(response => {
        if (response.status === 200) {
          setUser(prev => ({
            ...prev,
            userInfo: {
              ...prev.userInfo,
              nickname: changeNickname,
              profile: selectedProfile, // 선택한 프로필로 업데이트
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

  const handleProfileClick = profile => {
    setSelectedProfile(profile); // 선택한 프로필 설정
  };

  const changeSetting = () => {
    if (changeNickname !== "" && selectedProfile !== "") {
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
          <SettingProfile
            src={sol}
            onClick={() => handleProfileClick("SOL")}
            style={{
              background: selectedProfile === "SOL" ? "white" : "transparent",
            }}
          />
          <SettingProfile
            src={doraemi}
            onClick={() => handleProfileClick("DORAEMI")}
            style={{
              background:
                selectedProfile === "DORAEMI" ? "white" : "transparent",
            }}
          />
          <SettingProfile
            src={shoo}
            onClick={() => handleProfileClick("SHOO")}
            style={{
              background: selectedProfile === "SHOO" ? "white" : "transparent",
            }}
          />
        </ImgWrapper>
        <ImgWrapper>
          <SettingProfile
            src={lino}
            onClick={() => handleProfileClick("LINO")}
            style={{
              background: selectedProfile === "LINO" ? "white" : "transparent",
            }}
          />
          <SettingProfile
            src={lulu}
            onClick={() => handleProfileClick("LULU")}
            style={{
              background: selectedProfile === "LULU" ? "white" : "transparent",
            }}
          />
          <SettingProfile
            src={moli}
            onClick={() => handleProfileClick("MOLI")}
            style={{
              background: selectedProfile === "MOLI" ? "white" : "transparent",
            }}
          />
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
