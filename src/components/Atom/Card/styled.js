import styled from "styled-components";

const CardStyles = {
  loginCard: {
    background: "white",
    color: "black",
    width: "21vw",
    height: "56vh",
    borderRadius: "2vw",
    border: "1px solid #7e7979",
    boxShadow: "0vw 0.8vw 0.6vw -0.5vw gray",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "start",
    padding: "2vh 7vw",
  },
  signupCard: {
    background: "white",
    color: "black",
    width: "40vw",
    height: "55vh",
    borderRadius: "2vw",
    border: "1px solid #7e7979",
    boxShadow: "0vw 0.8vw 0.6vw -0.5vw gray",
  },

  educateCard: {
    background: "white",
    color: "black",
    width: "25vw",
    height: "12vh",
    borderRadius: "1.5vw",
    border: "0.5px solid #ececec",
    boxShadow: "3px 5px 12px -1px gray",
  },

  educateDetailCard: {
    background: "white",
    color: "black",
    width: "75vw",
    height: "50vh",
    borderRadius: "1.5vw",
    border: "0.5px solid #ececec",
    boxShadow: "3px 5px 8px -3px gray",
  },

  rankModalCard: {
    background: "#fdfafa",
    color: "black",
    width: "16vw",
    height: "13vh",
    borderRadius: "1vw",
    border: "0.5px solid #fdfafa",
    boxShadow: "2px 3.5px 4px -3px lightgray",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItem: "center",
    padding: "1vw",
  },

  gptModalCard: {
    position: "absolute",
    zIndex: "10",
    background: "white",
    color: "black",
    width: "25vw",
    borderRadius: "1vw",
    border: "0.5px solid #fdfafa",
    boxShadow: "2px 3.5px 4px -3px gray",
    padding: "20px",
  },

  followModalCard: {
    background: "white",
    color: "black",
    width: "14vw",
    height: "6vh",
    borderRadius: "1vw",
    border: "0.5px solid #fdfafa",
    boxShadow: "2px 3.5px 4px -3px gray",
  },

  summaryCard: {
    background: "white",
    color: "black",
    width: "38vw",
    // height: "9vh",
    borderRadius: "1vw",
    border: "0.5px solid #ececec",
    boxShadow: "0px 3px 10px -3px gray",
    padding: "15px 15px 0px 15px",
  },

  stockRecommandBackgroundCard: {
    background: "white",
    color: "black",
    width: "45vw",
    borderRadius: "1.5vw",
    border: "0.5px solid #ececec",
    boxShadow: "2.5px 5px 4px -3px gray",

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    padding: "2vw 1vw 2vw 1vw",
    margin: "10px 0px 0px 0px ",
  },
  stockRecommandListCard: {
    background: "rgba(195, 0, 202, 0.06 )",
    color: "rgba(0,0,0,8.5)",
    width: "18vw",
    height: "5vh",
    borderRadius: "1.5vw",
    border: "0.5px solid #ffffff",
    boxShadow: "0px 1px 6px -4px black",
    padding: "5px 0px 5px 0px",
    margin: "0px 0px 10px 0px",
  },
  grayCard: {
    background: "#ECECEC",
    borderRadius: "1.5vw",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    width: "8vw",
    height: "40vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "start",
    padding: "2vh 2vw",
    marginLeft: "4vw",
  },
};

export const StyledCard = styled.div`
  ${props => CardStyles[props.theme]}
`;
