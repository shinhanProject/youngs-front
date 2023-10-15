import React from "react";
import { Wrapper, Container, Wrapper2, WrapperUsername } from "./styled";
import { Text } from "../../index";
//  1,2,3 등만 숫자 다르니까 theme 받아서 나열하자

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
      <Wrapper>
        <Text theme="textRankingPage"> {rank} </Text>
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
