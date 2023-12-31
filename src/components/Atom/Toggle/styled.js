import styled, { css } from "styled-components";

export const getWidthBasedOnFlag = flag => {
  if (flag === 1) {
    return "16.5vw";
  }
  if (flag === 2) {
    return "11vw";
  }
  return "12vw";
};

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: ${props => getWidthBasedOnFlag(props.flag)};
  margin: 2vh 0;
  @media (max-width: 768px) {
    width: 50%; /* 테블릿 사이즈에서 50%의 너비를 사용 */
  }

  @media (min-width: 769px) {
    width: 25%; /* 웹에서 30%의 너비를 사용 */
  }
`;
export const ToggleBtn = styled.button`
  width: 3.3vw;
  height: 4vh;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  background-color: ${props =>
    props.toggle === "false" ? "#D9D9D9" : "#0046FF"};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    width: 40px; /* 테블릿 사이즈에서 작은 크기로 조절 */
    height: 20px;
  }
`;
export const Circle = styled.div`
  background-color: white;
  width: 1.5vw;
  height: 1.5vw;
  border-radius: 50px;
  position: absolute;
  left: 0.3vw;
  transition: all 0.5s ease-in-out;
  ${props =>
    props.toggle === "true" &&
    css`
      transform: translate(1.9vw, 0);
      transition: all 0.5s ease-in-out;
    `}
  @media (max-width: 768px) {
    width: 12px; /* 테블릿 사이즈에서 작은 크기로 조절 */
    height: 12px;
    left: 4px;
  }
`;
