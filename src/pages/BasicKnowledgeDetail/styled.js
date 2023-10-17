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
  margin-bottom: 10vh;
`;
export const Title = styled.div`
  background: gray;
  width: 20vw;
  border-radius: 20px;
`;

export const ContentContainer = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(0, 0, 0, 0.4);
`;
export const SummaryInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export const ContentWrapper = styled.div`
  width: 60vw;
  height: 40vh;
  border-radius: 30px;
  border: 1px solid #ececec;
  background: #fff;
  box-shadow: 10px 10px 30px 0px rgba(51, 51, 51, 0.3);
  padding: 3vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 4vh;
  word-break: keep-all;
  line-height: 1.5;
  color: #0044b;
`;
