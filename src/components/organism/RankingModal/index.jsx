import React from "react";
import { Wrapper, WrapperProfile } from "./styled";
import { Text, ProfileImg, Card, Button } from "../../index";

const RankingModal = ({ children, onClick, src }) => {
  const followState = false;

  return (
    <Card theme="rankModalCard">
      <WrapperProfile>
        <Text theme="textRankingProfile">{children}</Text>
        <ProfileImg theme="rankingProfile" src={src} />
      </WrapperProfile>
      <Wrapper>
        {followState ? (
          <Button theme="followBtn" onClick={onClick} src={src}>
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
