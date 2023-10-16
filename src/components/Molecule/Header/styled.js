import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90vw;
  height: 10vh;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  ${props =>
    props.theme === "opaque"
      ? `background-color: rgba(255, 255, 255, 0.30);`
      : `background-color: white;`}
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5vw;
  box-shadow: 0px 4px 40px 0px rgba(51, 51, 51, 0.08);
`;

export const Image = styled.img`
  width: 7vw;
  padding-bottom: 1vh;
`;

export const ButtonGroup = styled.div`
  width: ${props => (props.login ? "25vw" : "20vw")};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
