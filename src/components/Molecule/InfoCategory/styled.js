import styled from "styled-components";

export const Container = styled.div`
  background: white;
  color: black;
  width: 18vw;
  height: 15vh;
  border-radius: 1.5vw;
  border: 1.5px solid #ececec;
  box-shadow: 0 6px 6px -5px black;
  &:hover {
    border: 1.5px solid transparent;
    background-image: linear-gradient(#fff, #fff),
      linear-gradient(to bottom, #e300ca 0%, #0046ff 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }
  ${props =>
    props.selected === "selected" &&
    `
    border: 1.5px solid transparent;
    background-image: linear-gradient(#fff, #fff), linear-gradient(to bottom, #e300ca 0%, #0046ff 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
   `}
`;
export const Wrapper = styled.div`
  width: 18vw;
  height: 15vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Image = styled.img`
  width: 6vw;
  margin: 0 2vw 0 0;
`;
