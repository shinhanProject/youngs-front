import styled, { css } from "styled-components";

export const ToggleWrapper = styled.div`
  display: flex;
  margin-bottom: 1vh;
  justify-content: space-around;
  align-items: center;
  width: 20vw;
  @media (max-width: 768px) {
    width: 50%; /* 테블릿 사이즈에서 50%의 너비를 사용 */
  }

  @media (min-width: 769px) {
    width: 30%; /* 웹에서 30%의 너비를 사용 */
  }
`;
export const ToggleBtn = styled.button`
  width: 4vw;
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
    width: 3vw; /* 테블릿 사이즈에서 작은 크기로 조절 */
    height: 2vh;
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
    width: 1.2vw; /* 테블릿 사이즈에서 작은 크기로 조절 */
    height: 1.2vw;
    left: 4px;
  }
`;
