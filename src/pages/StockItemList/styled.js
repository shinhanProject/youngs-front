import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin-top: 10vh;
`;

export const Wrapper = styled.div`
  background: white;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 5vh;
  height: 60vh;
`;

export const Wrapperpage = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  margin-right: 20vw;
`;

export const CategoryWrapper = styled.div`
  width: 95%;
`;
export const InnerOuterWrapper = styled.div`
  width: 80vw;
  border-top: 1px solid darkgray;
  padding-top: 4vh;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  width: 100%;
`;
