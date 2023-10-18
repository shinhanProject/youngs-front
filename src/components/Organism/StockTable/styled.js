import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 10px;
  width: 45vw; /* 원하는 너비 설정 */
`;
export const StockListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 10px;
  width: 45vw; /* 원하는 너비 설정 */
`;

export const InfoName = styled.div`
  font-weight: bold;
  margin: 2px;
  white-space: nowrap; /* 긴 텍스트가 줄 바꿈되지 않도록 설정 */
  overflow: hidden;
  text-overflow: ellipsis; /* 텍스트가 넘칠 경우 ...으로 표시 */
`;

export const Data = styled.div`
  margin: 2px;
  white-space: nowrap; /* 긴 텍스트가 줄 바꿈되지 않도록 설정 */
  overflow: hidden;
  text-overflow: ellipsis; /* 텍스트가 넘칠 경우 ...으로 표시 */
`;
