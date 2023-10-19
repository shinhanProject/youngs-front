import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  width: 100%;

  text-align: left;
  &:hover {
    background-color: #ececec; /* hover 시 배경 색상 설정 */
  }
`;
