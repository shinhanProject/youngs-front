import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #d9d9d9;
  width: 62vw;
  padding: 0 1vw;
  border-radius: 1vw;
  text-align: center;
  height: 25vh;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  background-color: white;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  grid-auto-flow: column;
  width: 100%;
`;
