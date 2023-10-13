import React from "react";
import { Wrapper, Image } from "./styled";
import { Text, Card } from "../../index";

const InfoCategory = ({ children, onClick, src }) => {
  return (
    <Card theme="categoryCardnotSelected" onClick={onClick}>
      <Wrapper>
        <Image src={src} alt="category1" />
        <Text theme="textInfoCategory">{children}</Text>
      </Wrapper>
    </Card>
  );
};

export default InfoCategory;
