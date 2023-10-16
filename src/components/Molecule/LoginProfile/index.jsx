import React from "react";
import { Text, ProfileImg } from "../../index";

import { Wrapper } from "./styled";

const LoginProfile = ({ children, profile }) => {
  return (
    <Wrapper>
      <ProfileImg theme="loginProfile" profile={profile} />
      <Text theme="text4">{children}</Text>
    </Wrapper>
  );
};

export default LoginProfile;
