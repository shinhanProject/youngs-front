import styled from "styled-components";

const listItemState = {
  on: {
    fontWeight: "bold",
    fontSize: "1vw",
    background: "linear-gradient(184deg, #E300CA 30%, #0046FF 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
};

export const Wrapper = styled.div`
  display: flex;
  height: 20px;
  flex-direction: row;
  align-items: center;
  margin-top: 1.7vw;
`;

export const Wrapper2 = styled.div`
  height: 2vw;
`;

export const Asterisk = styled.img`
  width: 1.2vw;
`;

export const StyledListItem = styled.div`
  height: 1.7vw;
  font-weight: bold;
  font-size: 1vw;
  background: transparent;
  color: black;
  cursor: pointer;
  caret-color: transparent;
  align-items: center;
  word-break: keep-all;
  ${props => listItemState[props.category]};
`;
