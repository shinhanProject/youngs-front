import React from "react";
import { Wrapper } from "./styled";
import { Text, ProfileImg } from "../../index";

const LoginProfile = ({ children, src }) => {
  return (
    <Wrapper>
      <ProfileImg styleType="loginProfile" src={src} />
      <Text styleType="text4">{children}</Text>
    </Wrapper>
  );
};

export default LoginProfile;
