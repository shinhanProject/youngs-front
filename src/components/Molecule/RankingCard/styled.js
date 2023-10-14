import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;

  width: 20vw;
`;
export const WrapperUsername = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 20vw;
  &:hover {
    cursor: pointer;
  }
`;

export const Wrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;

  width: 30vw;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 90vw;
  grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
  border-bottom: 1px solid lightgray;
  &:hover {
    background-color: rgba(0, 70, 255, 0.1);
  }
`;
