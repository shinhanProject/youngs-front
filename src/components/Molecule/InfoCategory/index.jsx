import React from "react";
import { Text } from "../../index";

import { Container, Wrapper, Image } from "./styled";

const InfoCategory = ({ selected, children, src }) => {
  return (
    <Container selected={selected}>
      <Wrapper>
        <Image src={src} alt="category1" />
        <Text theme="textInfoCategory">{children}</Text>
      </Wrapper>
    </Container>
  );
};

export default InfoCategory;
