import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { axiosInstance } from "../../../apis";
import { Text } from "../../index";
import { onlyMeCheck } from "../../../store/atoms";
import { ToggleWrapper, ToggleBtn, Circle } from "./styled";

const MyToggle = ({ id }) => {
  const [toggle, setToggle] = useRecoilState(onlyMeCheck);
  const setPrivate = async () => {
    axiosInstance
      .patch(`/profile/${id}/private`, {
        isPrivate: toggle,
      })
      .then(response => {
        if (response.status === 200) {
          console.log(response.data);
        } else {
          alert("공개옵션 변경에 실패했습니다.");
        }
      })
      .catch(e => {
        console.log(e);
      });
  };
  const clickedToggle = () => {
    setToggle(prev => !prev);
  };
  useEffect(() => {
    setPrivate();
  }, [toggle]);
  return (
    <ToggleWrapper>
      <ToggleBtn onClick={clickedToggle} toggle={toggle.toString()}>
        <Circle toggle={toggle.toString()} />
      </ToggleBtn>
      <Text theme="toggleText">요약 내용 나만 보기</Text>
    </ToggleWrapper>
  );
};
export default MyToggle;
