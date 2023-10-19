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
  listCategoryText: {
    fontWeight: "bold",
    fontSize: "1.5vw",
    color: "#333333",
    marginBottom: "0.8vw",
  },
  text3: {
    fontWeight: "bold",
    fontSize: "48px",
    color: "#333333",
  },
  text4: {
    fontWeight: "normal",
    fontSize: "1.2vw",
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
    fontSize: "20px",
    // display: "inline-block",
    color: "black",
  },
  textStockRankingTitle: {
    fontWeight: "normal",
    fontSize: "1.2vw",
  },
  textStockRankingScore: {
    fontWeight: "normal",
    fontSize: "1.2vw",
    color: "red",
  },
  textRankingPage: {
    fontWeight: "normal",
    fontSize: "1vw",
    color: "#333333",
  },
  textRankPageSubTitle: {
    fontWeight: "normal",
    fontSize: "1vw",
    color: "#595953",
    marginTop: "10px",
  },
  highrank: {
    fontWeight: "normal",
    fontSize: "1vw",
    color: "white",
    display: "flex",
    justifyContents: "center",
    alignItems: "center",
  },
  lowrank: {
    fontWeight: "normal",
    fontSize: "1vw",
    color: "#333333",
    display: "flex",
    justifyContents: "center",
    alignItems: "center",
  },
  textRankNumber: {
    fontWeight: "normal",
    fontSize: "1vw",
    color: "#333333",
    display: "flex",
    justifyContents: "center",
    alignItems: "center",
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
  newsTitle: {
    fontWeight: "bold",
    fontSize: "1vw",
    color: "black",
    margin: "1vw 0vw 0vw 0vw",
  },
  newsDateText: {
    fontWeight: "100",
    fontSize: "0.7vw",
    color: "gray",
    margin: "1vh 0",
  },
  newsDescriptionText: {
    fontWeight: "normal",
    fontSize: "0.8vw",
    color: "#eeeee",
    margin: "0.5vw 0vw",
    lineHeight: "1.3vw",
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
  },
  mypageText: {
    fontWeight: "bold",
    fontSize: "1vw",
    color: "#333333",
  },
  mypagesmall: {
    fontSize: "0.5vw",
    color: "D9D9D9",
    margin: "0.5vh 0",
  },
  emailerror: {
    fontSize: "0.8vw",
    color: "red",
    marginBottom: "2vh",
  },
  textStockItemName: {
    fontWeight: "bold",
    fontSize: "1.4vw",
    color: "#4AFFF",
    lineHeight: "1.5vw",
  },
  textStockItemDescription: {
    fontSize: "1.2vw",
    color: "#4A483F",
    lineHeight: "1.1vw",
  },
  textBasicItemName: {
    fontWeight: "bold",
    fontSize: "1.3vw",
    color: "black",
    lineHeight: "1.5vw",
    marginBottom: "1vw",
  },
  textBasicItemDescription: {
    fontSize: "12px",
    color: "#4AFFF",
    lineHeight: "1.4vw",
    wordBreak: "keep-all",
  },
  textBasicDate: {
    fontWeight: "normal",
    fontSize: "9px",
    color: "#4A483F",
    margin: "0px 0px 10px 0px",
  },
  textupPrice: {
    fontSize: "12px",
    color: "red",
    lineHeight: "1.1vw",
  },
  textdownPrice: {
    fontSize: "12px",
    color: "blue",
    lineHeight: "1.1vw",
  },
  textblackPrice: {
    fontSize: "12px",
    color: "black",
    lineHeight: "1.1vw",
  },
  textbasicDetailTitle: {
    fontSize: "24px",
    color: "black",
    fontWeight: "bold",
    lineHeight: "1.1vw",
    marginBottom: "3vh",
  },
  textbasicDetailDescription: {
    fontSize: "12px",
    fontWeight: "normal",
    color: "black",
    lineHeight: "1.1vw",
  },
  toggleText: {
    fontSize: "1.2vw",
    fontWeight: "normal",
    color: "black",
  },
  myToggleText: {
    fontSize: "1.2vw",
    fontWeight: "normal",
    color: "black",
  },
  stockTableTextContent: {
    fontSize: "1.1vw",
    fontWeight: "normal",
    color: "#eeeee",
  },
  stockTableTextTitle: {
    fontSize: "1.1vw",
    fontWeight: "bold",
    color: "black",
  },
  stockDetailSubTitle: {
    fontSize: "1.3vw",
    fontWeight: "bold",
    color: "black",
    marginTop: "2vh",
  },
};

export const StyledText = styled.p`
  word-break: keep-all;
  ${props => textStyles[props.theme]}
`;
