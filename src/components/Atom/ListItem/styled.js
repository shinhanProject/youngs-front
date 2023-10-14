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
  off: {
    fontWeight: "bold",
    fontSize: "1vw",
    color: "#333333",
  },
};

export const Wrapper = styled.div`
  display: flex;
  height: 20px;
  align-items: center;
  margin-top: 2vh;
`;

export const Asterisk = styled.img`
  width: 15px;
`;

export const StyledListItem = styled.p`
  ${props => listItemState[props.category]};
  cursor: pointer;
  caret-color: transparent;
`;
