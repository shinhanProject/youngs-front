import React from "react";
import { Wrapper, Container, Wrapper2 } from "./styled";
import { Text } from "../../index";
//  1,2,3 등만 숫자 다르니까 theme 받아서 나열하자

const RankingCard = ({ index, tier, usrname, score }) => {
  return (
    <Container>
      <Wrapper>
        <Text theme="textRankingPage"> {index} </Text>
      </Wrapper>
      <Wrapper>
        <Text theme="textRankingPage"> {tier} </Text>
      </Wrapper>
      <Wrapper>
        <Text theme="textRankingPage">{usrname}</Text>
      </Wrapper>
      <Wrapper2>
        <Text theme="textRankingPage"> {score} </Text>
      </Wrapper2>
    </Container>
  );
};

export default RankingCard;
