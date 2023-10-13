import React from "react";
import { Wrapper1, Wrapper2, Wrapper3, Image } from "./styled";
import { Text, Card, Button } from "../../index";
import gptLogo from "../../../assets/images/gptLogo.svg";

const gptModalCard = ({ children, onClick }) => {
  return (
    <Card theme="gptModalCard">
      <Wrapper1>
        <Text theme="text1">{children}</Text>
        <Image src={gptLogo} alt="gpt로고" />
      </Wrapper1>
      <Wrapper2>
        <Text theme="textGptDescription">
          이 이슈와 관련한 코멘트에서 확인할 수 있듯이, React.Children
          유틸리티들은 현재 maintenance mode이며, 추후에 다른 유틸로 대체될 수
          있다고 합니다. React.Children에 대해 더 알고 싶다면
          react-children-deepdive 문서를 참고하면 좋을 것 같습니다.
        </Text>
      </Wrapper2>
      <Wrapper3>
        <Button theme="gptCloseButton" onClick={onClick}>
          닫기
        </Button>
      </Wrapper3>
    </Card>
  );
};

export default gptModalCard;
