import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 14vw;
  height: 14vh;
  background: #ececec;
  border-radius: 30px;
  box-shadow: 0 10px 10px -5px lightgray;
  padding: 1vw 0.7vh 1vw 0.7vh;
  position: relative;
  left: 2.2vw;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 5vh;
  background: #d9d9d9;
  border-radius: 20px;
`;

export const Image = styled.img`
  background: #d9d9d9;
  height: 3.5vh;
  top: 10px;
  right: 12px;
  margin: 0;
  border-radius: 20px;
`;

export const SearchInput = styled.input`
  border: 1px solid #d9d9d9;
  background: #d9d9d9;
  width: 60%;

  height: 4vh;
  font-size: 0.5rem;
  &::placeholder {
    color: gray;
    padding-left: 1px;
  }
`;
