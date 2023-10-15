import React from "react";
import { Wrapper1, Wrapper2, Wrapper3 } from "./styled";
import { Text, Card } from "../../index";

const BasicKnowledgeCard = ({ name, category, description }) => {
  return (
    <Card theme="basicItemCard">
      <Wrapper3>
        <Wrapper1>
          <Text theme="textBasicItemName">{name} : PER </Text>
          <Text theme="textBasicItemDescription">
            {description}: description
          </Text>
        </Wrapper1>
        <Wrapper2>
          <Text theme="textBasicDate">{category} :주식 기초 정보</Text>
        </Wrapper2>
      </Wrapper3>
    </Card>
  );
};

export default BasicKnowledgeCard;
