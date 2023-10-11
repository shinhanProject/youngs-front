import styled from "styled-components";

const textStyles = {
  text1: {
    fontWeight: "bold",
    fontSize: "16px",
    color: "#333333",
  },
  text2: {
    fontWeight: "bold",
    fontSize: "32px",
    color: "#333333",
  },
  text3: {
    fontWeight: "bold",
    fontSize: "48px",
    color: "#333333",
  },
};

export const StyledText = styled.p`
  ${props => textStyles[props.styleType]}
`;
