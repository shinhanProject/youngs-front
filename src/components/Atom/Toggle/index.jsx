import { useState } from "react";
import { Text } from "../../index";
import { ToggleBtn, Circle, Wrapper } from "./styled";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  const clickedToggle = () => {
    setToggle(prev => !prev);
  };
  return (
    <Wrapper>
      <ToggleBtn onClick={clickedToggle} toggle={toggle}>
        <Circle toggle={toggle} />
      </ToggleBtn>
      <Text>{!toggle ? "학습한 내용 안 보기" : "학습한 내용 보기"}</Text>
    </Wrapper>
  );
};

export default Toggle;
