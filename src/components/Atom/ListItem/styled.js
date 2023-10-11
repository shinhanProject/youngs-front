import styled from "styled-components";

const listItemState = {
  on: {
    fontWeight: "bold",
    fontSize: "14px",
    background: "linear-gradient(184deg, #E300CA 30%, #0046FF 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  off: {
    fontWeight: "bold",
    fontSize: "14px",
    color: "#333333",
  },
};

export const Wrapper = styled.div`
  display: flex;
  height: 20px;
  align-items: center;
`;

export const Asterisk = styled.img`
  width: 15px;
`;

export const StyledListItem = styled.p`
  ${props => listItemState[props.state]}
`;
