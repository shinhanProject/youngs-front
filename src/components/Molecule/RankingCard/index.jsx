import React from "react";
import {
  Wrapper,
  Container,
  Wrapper2,
  WrapperUsername,
  WrapperRank,
} from "./styled";
import { Text } from "../../index";

const RankingCard = ({
  tier,
  usrname,
  score,
  setmodalOpen,
  rank,
  setUserid,
  userSeq,
  setUsername,
  userfollow,
  setfollow,
  handlePosition,
  profile,
  changeProfile,
}) => {
  let isHigh = "high";
  let isHighText = "textRankingPage";
  if (rank === 1 || rank === 2 || rank === 3) {
    isHigh = "high";
    isHighText = "highrank";
  } else if (rank === "순위") {
    isHigh = "text";
    isHighText = "textRankingPage";
  } else {
    isHighText = "lowrank";
    isHigh = "normal";
  }

  return (
    <Container
      onClick={event => {
        setmodalOpen();
        changeProfile(profile);
        setUserid(userSeq);
        setUsername(usrname);
        setfollow(userfollow);
        handlePosition(event);
      }}
    >
      {" "}
      <Wrapper>
        <WrapperRank theme={isHigh}>
          <Text theme={isHighText}>{rank}</Text>
        </WrapperRank>
      </Wrapper>
      <Wrapper>
        <Text theme="textRankingPage"> {tier} </Text>
      </Wrapper>
      <WrapperUsername>
        <Text theme="textRankingPage">{usrname}</Text>
      </WrapperUsername>
      <Wrapper2>
        <Text theme="textRankingPage"> {score} </Text>
      </Wrapper2>
    </Container>
  );
};

export default RankingCard;
