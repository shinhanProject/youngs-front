import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { gptDragState, alreadyLearn } from "../../../store/atoms";
import { Text } from "../../index";
import { ToggleBtn, Circle, Wrapper } from "./styled";

const Toggle = ({ flag }) => {
  const [toggle, setToggle] = useState(false);
  const setGptDrag = useSetRecoilState(gptDragState);
  const setalreadyLearn = useSetRecoilState(alreadyLearn);
  const clickedToggle = () => {
    setToggle(prev => !prev);
    setGptDrag(prev => !prev);
    setalreadyLearn(prev => !prev);
  };
  let buttonText = "";
  if (flag === 1) {
    buttonText = "학습한 내용 포함하지 않기";
  } else if (flag === 2) {
    buttonText = "GPT 사용하기";
  }
  return (
    <Wrapper flag={flag}>
      <ToggleBtn onClick={clickedToggle} toggle={toggle.toString()}>
        <Circle toggle={toggle.toString()} />
      </ToggleBtn>
      <Text>{buttonText}</Text>
    </Wrapper>
  );
};

export default Toggle;
