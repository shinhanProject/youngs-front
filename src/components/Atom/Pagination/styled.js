import styled from "styled-components";

export const Wrapper = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: center;
  text-align: center;
  justify-content: center;
  margin-top: 30px;
`;
export const PageUl = styled.ul`
  float: left;
  list-style: none;
  text-align: center;
  border-radius: 3px;
  color: black;
  padding: 1px;

  background-color: #ececec;
`;

export const PageLi = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  padding: 5px;
  border-radius: 70%;
  width: 25px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: rgba(0, 70, 255, 0.5);
  }
  &:focus::after {
    color: white;
    background-color: rgba(0, 70, 255, 0.5);
  }
`;

export const PageSpan = styled.span`
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: black;
    background-color: #263a6c;
  }
`;
