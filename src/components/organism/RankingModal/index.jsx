import React from "react";
import { Wrapper, WrapperProfile } from "./styled";
import { Text, ProfileImg, Card, Button } from "../../index";
import solProfile2 from "../../../assets/images/solProfile2.jpg";
// src 받을 수 있게 해야 합니다
const RankingModal = ({ children, onClick }) => {
  const followState = false;

  return (
    <Card theme="rankModalCard">
      <WrapperProfile>
        <Text theme="textRankingProfile">{children}</Text>
        <ProfileImg theme="rankingProfile" src={solProfile2} />
      </WrapperProfile>
      <Wrapper>
        {followState ? (
          <Button theme="followBtn" onClick={onClick}>
            follow
          </Button>
        ) : (
          <Button theme="followBtn">followed</Button>
        )}
        <Button theme="rankToUserBtn" onClick={onClick}>
          더 보기
        </Button>
      </Wrapper>
    </Card>
  );
};

export default RankingModal;
