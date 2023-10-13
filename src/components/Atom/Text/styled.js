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
    fontWeight: "lighter",
    fontSize: "0.3em",
    color: "rgba(0,0,0,0.7)",
    margin: "4px",
  },
  text7: {
    fontWeight: "lighter",
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
    fontSize: "1.3vw",
  },
  textGptDescription: {
    fontWeight: "normal",
    fontSize: "13px",
    color: "#4A483F",
    lineHeight: "1.3vw",
  },
  textSummaryTopic: {
    fontWeight: "normal",
    fontSize: "13px",
    color: "black",
    textAlign: "center",
  },
  textSummaryDate: {
    fontWeight: "normal",
    fontSize: "9px",
    color: "#4A483F",

    margin: "0px 0px 15px 0px",
  },
  textSummaryDescription: {
    fontSize: "13px",
    color: "#4AFFF",
    lineHeight: "1.3vw",
    padding: "10px 0px 10px 0px",
  },
  textStockRankingPercent: {
    fontWeight: "normal",
    fontSize: "1vw",
    display: "inline-block",
    color: "black",
  },
  textStockRankingScore: {
    fontWeight: "normal",
    fontSize: "1vw",
    color: "red",
  },
};

export const StyledText = styled.p`
  ${props => textStyles[props.theme]}
`;
