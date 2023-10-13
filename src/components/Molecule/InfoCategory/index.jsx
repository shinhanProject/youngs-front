import React from "react";
import { Wrapper, Image } from "./styled";
import { Text, Card } from "../../index";
import categoryimg1 from "../../../assets/images/categoryImg1.svg";

const InfoCategory = ({ children, onClick }) => {
  return (
    <Card theme="categoryCardnotSelected" onClick={onClick}>
      <Wrapper>
        <Image src={categoryimg1} alt="category1" />
        <Text theme="textInfoCategory">{children}</Text>
      </Wrapper>
    </Card>
  );
};

export default InfoCategory;
