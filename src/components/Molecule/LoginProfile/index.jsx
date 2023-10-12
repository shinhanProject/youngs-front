import React from "react";
import { Wrapper } from "./styled";
import { Text, ProfileImg } from "../../index";

const LoginProfile = ({ children }) => {
  return (
    <Wrapper>
      <ProfileImg styleType="loginProfile"> </ProfileImg>
      <Text styleType="text4">{children}</Text>
    </Wrapper>
  );
};

export default LoginProfile;
