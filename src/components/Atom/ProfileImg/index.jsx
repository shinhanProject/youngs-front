import React from "react";
import { StyledProfile, ProfileImages } from "./styled";
// import solProfile2 from "../../../assets/images/solProfile2.jpg";

const ProfileImg = ({ theme, src }) => {
  return (
    <StyledProfile theme={theme}>
      <ProfileImages src={src} alt="src" />
    </StyledProfile>
  );
};

export default ProfileImg;
