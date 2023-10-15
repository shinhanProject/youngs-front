import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Noti = styled.div`
  display: none;
  border-radius: 5px;
  border: 1px solid rgba(0, 70, 255, 0.5);
  background-color: white;
  width: 6vw;
  position: absolute;
  top: -5.5vh;
  left: -2.5vw;
  z-index: 10;
`;

const sandholeStyles = {
  none: {
    background: "rgba(0, 70, 255, 0.10)",
  },
  low: {
    background: "rgba(0, 70, 255, 0.40)",
  },
  mid: {
    background: "rgba(0, 70, 255, 0.70)",
  },
  high: {
    backgroundColor: "#0046FF",
  },
};

export const StyledSandHole = styled.div`
  width: 1vw;
  height: 1vw;
  border-radius: 70%;
  overflow: hidden;
  border: 1px solid #d9d9d9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${props => sandholeStyles[props.cnt]}
  &:hover + ${Noti} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
