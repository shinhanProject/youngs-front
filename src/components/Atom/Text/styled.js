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
  text4: {
    fontWeight: "normal",
    fontSize: "16px",
    color: "#333333",
  },
  text5: {
    fontWeight: "bold",
    fontSize: "2em",
    color: "#333333",
    margin: "5px",
  },
  text6: {
    fontWeight: "normal",
    fontSize: "0.7em",
    color: "rgba(0,0,0,0.7)",
    margin: "4px",
  },
  text7: {
    fontWeight: "normal",
    fontSize: "0.7em",
    color: "rgba(0,0,0,0.7)",
    margin: "2rem",
  },
  textRanking: {
    fontWeight: "normal",
    fontSize: "10px",
  },
  textRankingProfile: {
    fontWeight: "normal",
    fontSize: "20px",
  },
  textInfoCategory: {
    fontWeight: "normal",
    fontSize: "28px",
  },
};

export const StyledText = styled.p`
  ${props => textStyles[props.theme]}
`;
