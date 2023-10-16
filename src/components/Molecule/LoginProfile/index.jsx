import React from "react";
import { Wrapper } from "./styled";
import { Text, ProfileImg } from "../../index";

import sol from "../../../assets/images/sol.jpg";

const LoginProfile = ({ children }) => {
  return (
    <Wrapper>
      <ProfileImg theme="loginProfile" src={sol} />
      <Text theme="text4">{children}</Text>
    </Wrapper>
  );
};

export default LoginProfile;
