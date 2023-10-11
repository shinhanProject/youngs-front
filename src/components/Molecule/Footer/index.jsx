import React from "react";
import { Text } from "../../index";
import notion from "../../../assets/images/notionLogo.svg";
import github from "../../../assets/images/githubLogo.svg";
import logoBlack from "../../../assets/images/logo_black.svg";

import { Wrapper, Image, TextGroup, LinkGroup, ImageLogo } from "./styled";

const Footer = () => {
  return (
    <Wrapper>
      <TextGroup>
        <ImageLogo src={logoBlack} alt="로고-검은색" />
        <Text styleType="text6">
          김태우 | 박상희 | 이은지 | 이주현 | 조하영
        </Text>
        <Text styleType="text6">신한프로디지털 아카데미 6조</Text>
        <Text styleType="text6">
          Copyright © 2023. ShinhanProDigitalAcademy YOUNGs All rights
          reserved.
        </Text>
      </TextGroup>
      <LinkGroup>
        <Text styleType="text7">ABOUT</Text>
        <Image src={notion} alt="노션링크" />
        <Image src={github} alt="깃헙링크" />
      </LinkGroup>
    </Wrapper>
  );
};

export default Footer;
