import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${props => (props.flag === 1 ? "16.5vw" : "11vw")};
  margin: 2vh 0;
`;
export const ToggleBtn = styled.button`
  width: 3.5vw;
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
      transform: translate(1.5vw, 0);
      transition: all 0.5s ease-in-out;
    `}
`;
