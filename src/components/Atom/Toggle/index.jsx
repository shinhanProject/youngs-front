import { useState } from "react";
import { useSetRecoilState } from "recoil";
import {
  gptDragState,
  alreadyLearn,
  privateSummary,
  gptDragStateStock,
} from "../../../store/atoms";
import { Text } from "../../index";
import { ToggleBtn, Circle, Wrapper } from "./styled";

const Toggle = ({ flag }) => {
  const [toggle, setToggle] = useState(false);
  const setGptDrag = useSetRecoilState(gptDragState);
  const setGptDragStock = useSetRecoilState(gptDragStateStock);
  const setAlreadyLearn = useSetRecoilState(alreadyLearn);
  const setPrivateSummary = useSetRecoilState(privateSummary);

  const clickedToggle = () => {
    setToggle(prev => !prev);
    setGptDrag(prev => !prev);
    setAlreadyLearn(prev => !prev);
    setGptDragStock(prev => !prev);
    if (flag === 3) {
      setPrivateSummary(prev => !prev);
    }
  };
  let buttonText = "";
  if (flag === 1) {
    buttonText = "학습한 내용 포함하지 않기";
  } else if (flag === 2) {
    buttonText = "GPT 검색 기능 활성화하기";
  } else if (flag === 3) {
    buttonText = "요약 내용 나만 보기";
  }
  return (
    <Wrapper flag={flag}>
      <ToggleBtn onClick={clickedToggle} toggle={toggle.toString()}>
        <Circle toggle={toggle.toString()} />
      </ToggleBtn>
      <Text theme="toggleText">{buttonText}</Text>
    </Wrapper>
  );
};

export default Toggle;
