import React, { useEffect, useState } from "react";

import { StyledProfile, ProfileImages } from "./styled";
import solImg from "../../../assets/images/sol.svg";
import doraemiImg from "../../../assets/images/doraemi.svg";
import shooImg from "../../../assets/images/shoo.svg";
import linoImg from "../../../assets/images/lino.svg";
import luluImg from "../../../assets/images/lulu.svg";
import moliImg from "../../../assets/images/moli.svg";

const imageMap = {
  SOL: solImg,
  DORAEMI: doraemiImg,
  SHOO: shooImg,
  LINO: linoImg,
  LULU: luluImg,
  MOLI: moliImg,
};

const ProfileImg = ({ theme, profile }) => {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    setSrc(imageMap[profile]);
  }, [profile]);

  return (
    <StyledProfile theme={theme}>
      {src && <ProfileImages src={src} alt="프로필 이미지" />}
    </StyledProfile>
  );
};

export default ProfileImg;
