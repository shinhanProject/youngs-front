import React from "react";
import { Text } from "../../index";
import { Container, StyledSandHole, Noti } from "./styled";

const SandHole = ({ count, date }) => {
  let cnt = "none";

  if (count <= 0) {
    cnt = "none";
  } else if (count <= 1) {
    cnt = "low";
  } else if (count <= 2) {
    cnt = "mid";
  } else {
    cnt = "high";
  }

  return (
    <Container>
      <StyledSandHole cnt={cnt} />
      <Noti>
        <Text theme="mypagesmall">{date}</Text>
        <Text theme="mypagesmall">{count}</Text>
      </Noti>
    </Container>
  );
};

export default SandHole;
