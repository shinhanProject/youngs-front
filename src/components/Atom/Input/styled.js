import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  width: 50vw;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;
export const Label = styled.label`
  padding-left: 1vw;
  margin-top : 1.2vw;
  font-size : 1vw;
  color = #ececec;
`;

export const UserInput = styled.input`
  margin-top: 5px;
  height: 7vh;
  width: 100%;
  border-radius: 20px;
  border: 2px solid #ececec;
  box-shadow: 3px 5px 8px -3px gray;
  padding-left: 1vw;
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
