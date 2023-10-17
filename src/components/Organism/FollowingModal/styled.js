import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 15vw;
  height: 38vh;
  background: white;
  padding: 2.5vh 1vw 2.5vh 1vw;
  border-radius: 20px;
  border: 0.5px solid #fdfafa;
  box-shadow: 2px 3.5px 4px -3px gray;
  position: absolute;
  z-index: 30;
  top: -45vh;
  left: 1vw;
`;
export const Wrapper = styled.div`
  margin-top: 1vh;
  margin-bottom: 1vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 70%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.1);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 36, 131, 0.5);
    border-radius: 10px;
  }
`;

export const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  &:hover {
    background-color: rgba(0, 36, 131, 0.1);
  }
`;
