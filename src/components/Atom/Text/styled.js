import styled from "styled-components";

const textStyles = {
  text1: {
    fontWeight: "bold",
    fontSize: "16px",
    color: "#333333",
  },
  text2: {
    fontWeight: "bold",
    fontSize: "1.5vw",
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
    fontWeight: "100",
    fontSize: "0.3em",
    color: "rgba(0,0,0,0.7)",
    margin: "4px",
  },
  text7: {
    fontWeight: "100",
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
  textRankingPage: {
    fontWeight: "normal",
    fontSize: "1.2vw",
    color: "#333333",
  },
  infoTitle: {
    fontWeight: "bold",
    fontSize: "2vw",
    marginTop: "5vh",
  },
  infoText: {
    fontWeight: "100",
    fontSize: "1vw",
    color: "#D9D9D9",
    marginTop: "1vh",
    marginBottom: "5vh",
  },
  descriptionText: {
    fontWeight: "100",
    fontSize: "0.7vw",
    color: "gray",
    margin: "3px 0",
  },
  textSearch: {
    fontWeight: "bold",
    fontSize: "1.1vw",
    color: "#333333",
  },
  textSetting: {
    fontWeight: "normal",
    fontSize: "1vw",
    color: "#4B4B4B",
    marginBottom: "7px",
  },
  textFollowing: {
    fontWeight: "normal",
    fontSize: "1vw",
    color: "#4B4B4B",
    marginBottom: "7px",
  },
  mypageText: {
    fontWeight: "bold",
    fontSize: "2vw",
    color: "rgba(0, 70, 255, 0.5)",
  },
  mypagesmall: {
    fontSize: "0.5vw",
    color: "D9D9D9",
    margin: "0.5vh 0",
  },

  textStockItemName: {
    fontWeight: "normal",
    fontSize: "1.2vw",
    color: "#4AFFF",
    lineHeight: "1.5vw",
  },
  textStockItemDescription: {
    fontSize: "12px",
    color: "#4A483F",
    lineHeight: "1.1vw",
  },
  textBasicItemName: {
    fontWeight: "normal",
    fontSize: "1.2vw",
    color: "black",
    lineHeight: "1.5vw",
    marginBottom: "0.5vw",
  },
  textBasicItemDescription: {
    fontSize: "12px",
    color: "#4AFFF",
    lineHeight: "1.1vw",
  },

  textBasicDate: {
    fontWeight: "normal",
    fontSize: "9px",
    color: "#4A483F",
    margin: "0px 0px 10px 0px",
  },
  textupPrice: {
    fontSize: "13px",
    color: "red",
    lineHeight: "1.1vw",
  },
  textdownPrice: {
    fontSize: "13px",
    color: "blue",
    lineHeight: "1.1vw",
  },
  textblackPrice: {
    fontSize: "13px",
    color: "black",
    lineHeight: "1.1vw",
  },
};

export const StyledText = styled.p`
  ${props => textStyles[props.theme]}
`;
