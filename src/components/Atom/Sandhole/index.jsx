import React from "react";
import { StyledSandhole, Shells } from "./styled";
// import shell1 from "../../../assets/images/shell1.svg";
// src 로 shell1, shell2, shell3  바꿔서 넣으면 될 것 같습니다
// 정답 맞춘 개수 받아서 shells 수정할 수 있도록 상태값 받기로 수정 ?

const ProfileImg = ({ src }) => {
  return (
    <StyledSandhole theme="snadhole1">
      {/* <ProfileImages src={src} alt="src" /> */}
      <Shells src={src} alt="shell1" />
    </StyledSandhole>
  );
};

export default ProfileImg;
