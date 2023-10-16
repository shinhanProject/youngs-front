import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 1vh;
  margin-bottom: 1vh;
`;

export const TableSheet = styled.table`
  width: 100%;
  border: 1px solid #ddd;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const TableHead = styled.thead`
  background-color: #f2f2f2;
  font-weight: bold;
`;

export const Header = styled.tr``;

export const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;
