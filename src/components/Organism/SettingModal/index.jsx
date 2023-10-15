import React, { useState } from "react";
import { Container, Wrapper, NicknameInput, ImgWrapper } from "./styled";
import { Text, ProfileImg, Button } from "../../index";
import sol from "../../../assets/images/sol.jpg";
import doraemi from "../../../assets/images/doraemi.svg";
import shoo from "../../../assets/images/shoo.svg";
import lino from "../../../assets/images/lino.svg";
import lulu from "../../../assets/images/lulu.svg";
import moli from "../../../assets/images/moli.svg";

const SettingModal = () => {
  const [nickname, setNickname] = useState("");

  const onNicknameChange = e => {
    setNickname(e.target.value);
  };
  return (
    <Container>
      <Wrapper>
        <Text theme="textSetting">프로필 변경</Text>
        <ImgWrapper>
          <ProfileImg theme="settingProfile" src={sol} />
          <ProfileImg theme="settingProfile" src={doraemi} />
          <ProfileImg theme="settingProfile" src={shoo} />
        </ImgWrapper>
        <ImgWrapper>
          <ProfileImg theme="settingProfile" src={lino} />
          <ProfileImg theme="settingProfile" src={lulu} />
          <ProfileImg theme="settingProfile" src={moli} />
        </ImgWrapper>
      </Wrapper>
      <Wrapper>
        <Text theme="textSetting">닉네임 변경</Text>
        <NicknameInput
          placeholder="닉네임"
          onChange={onNicknameChange}
          value={nickname}
        />
      </Wrapper>
      <Button theme="settingBtn">확인</Button>
    </Container>
  );
};

export default SettingModal;
