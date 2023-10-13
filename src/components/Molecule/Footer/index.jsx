import React from "react";
import { Link } from "react-router-dom";
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
        <Text theme="text6">김태우 | 박상희 | 이은지 | 이주현 | 조하영</Text>
        <Text theme="text6">신한프로디지털 아카데미 6조</Text>
        <Text theme="text6">
          Copyright © 2023. ShinhanProDigitalAcademy YOUNGs All rights
          reserved.
        </Text>
      </TextGroup>
      <LinkGroup>
        <Link to="/onboarding">
          <Text theme="text7">ABOUT</Text>
        </Link>
        <a
          href="https://legendary-meeting-a7f.notion.site/6-68c17ed5c84e479cb31f952f64e1d832?pvs=4"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={notion} alt="노션링크" />
        </a>
        <a
          href="https://github.com/shinhanProject"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={github} alt="깃헙링크" />
        </a>
      </LinkGroup>
    </Wrapper>
  );
};

export default Footer;
