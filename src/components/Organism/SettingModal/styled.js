import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 15vw;
  height: 38vh;
  background: #ececec;
  padding: 1vh 1vw 1vh 1vw;
  border-radius: 20px;
  border: 0.5px solid #fdfafa;
  box-shadow: 2px 3.5px 4px -3px gray;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NicknameInput = styled.input`
  border: 1px solid #ececec;
  width: 70%;
  border-radius: 10px;
  border: 1.5px solid lightgray;
  height: 4vh;
  font-size: 0.8rem;
  margin-bottom: 1vh;
  margin-top: 1vh;
  &::placeholder {
    color: #d9d9d9;
    padding-left: 15px;
  }
`;
export const WrapperProfile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 16vw;
  margin: 0.5vw 0 0.5vw -0.1vw;
`;
