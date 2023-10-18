import styled from "styled-components";

const ButtonStyles = {
  loginBtn: {
    width: "7vw",
    height: "5vh",
    borderRadius: "15px",
    background:
      "linear-gradient( 180deg, rgba(253, 136, 206, 0.97) 0.01%,  #0046ff 100% )",
    color: "white",
    gap: "16px",
  },
  settingBtn: {
    width: "7vw",
    height: "4vh",
    borderRadius: "15px",
    background:
      "linear-gradient( to bottom right,rgba(195, 0, 202, 0.7) 0%,  rgba(0,70,255,0.9 ) 10% , rgba(195, 0, 202, 0.7) 100%)",
    color: "white",
    boxShadow: "2px 3.5px 4px -1px darkgray",
    gap: "16px",
  },
  headerBtn: {
    height: "5vh",
    wordBreak: "keep-all",
    textAlign: "center",
    fontWeight: "bold",
    background: "rgba(255, 255, 255, 0)",
  },
  blueBtn: {
    width: "100%",
    borderRadius: "15px",
    color: "white",
    background: "#0046ff",
    height: "5vh",
    marginBottom: "4vh",
  },
  blueTextBtn: {
    width: "35%",
    color: "#0046ff",
    height: "3vh",
    border: "none",
    background: "white",
  },
  blueCharBtn: {
    background: "rgba(255, 255, 255, 0)",
    color: "#0046ff",
  },
  summaryEditBtn: {
    height: "5vh",
    borderRadius: "15px",
    background: "white",
    color: "#e300ca",
    border: "1px solid #ECECEC",
    margin: "0 auto",
    marginBottom: "1.5vh",
    transition: "transform 0.2s",
  },
  summaryEnrollBtn: {
    height: "5vh",
    borderRadius: "15px",
    background: "white",
    color: "#0046ff",
    border: "1px solid #ECECEC",
    margin: "0 auto",
    marginBottom: "1.5vh",
    transition: "transform 0.2s",
  },
  followBtn: {
    width: "10vw",
    borderRadius: "20px",
    background:
      "linear-gradient( 50deg,  #0046ff 30% , rgba(195, 0, 202, 0.9) 100%)",
    color: "white",
    padding: "0.4vw  1vw",
    fontSize: "1.2vw",
    boxShadow: "2px 3.5px 4px -3px lightgray",
    margin: "0 0 0 -0.8vw",
  },
  rankToUserBtn: {
    borderRadius: "15px",
    background:
      "linear-gradient( to bottom right,rgba(195, 0, 202, 0.7) 10%,  rgba(0,70,255,0.8 ) 30% , rgba(195, 0, 202, 0.7) 100%)",
    color: "white",
    padding: "0.4vw  1.7vw",
    fontSize: "0.8vw",
    boxShadow: "2px 3.5px 4px -3px lightgray",
    margin: "0",
  },
  gptCloseButton: {
    borderRadius: "15px",
    background: "lightgray",
    color: "black",
    padding: "0.4vw  1.7vw",
    fontSize: "0.8vw",
    width: "10vw",
    boxShadow: "1px 2.2px 2px -1px lightgray",
    margin: "0 0 0 3vw",
  },
  alertCloseButton: {
    borderRadius: "15px",
    background:
      "linear-gradient( to bottom,  rgba(0,70,255,0.7) 30% , rgba(195, 0, 202, 0.1) 10%,  rgba(0,70,255,0.7) 30% )",
    color: "white",
    textShadow: "1px 1px 1px #000",
    padding: "0.4vw  1.7vw",
    fontSize: "0.8vw",
    width: "10vw",
    boxShadow: "2px 3.5px 4px -3px lightgray",
  },
  duplicateCheckBtn: {
    width: "30%",
    background: "#ECECEC",
    color: "white",
    height: "6.5vh",
    borderRadius: "2px",
    "&:hover": {
      background: "#D9D9D9",
    },
  },
  followersBtn: {
    background:
      " linear-gradient(to top, rgba(0, 79, 255, 0.8), rgba(222, 180, 223, 0.6))",
    color: "white",
    fontSize: "1.2vw",
    padding: "1vh 2vh",
    borderRadius: "20px",
    boxShadow: "2px 3.5px 4px -3px lightgray",
    textShadow: "-0.2px 0 #000, 0 0.2px #000, 0.2px 0 #000, 0 -0.2px #000",
  },
  followingBtn: {
    color: "white",
    background:
      " linear-gradient(to bottom, rgba(0, 79, 255, 0.8), rgba(222, 180, 223, 0.6))",
    fontSize: "1.2vw",
    padding: "1vh 2vh",
    borderRadius: "20px",
    boxShadow: "2px 3.5px 4px -3px lightgray",
    textShadow: "-0.2px 0 #000, 0 0.2px #000, 0.2px 0 #000, 0 -0.2px #000",
  },
  unfollow: {
    width: "5vw",
    borderRadius: "1vw",
    background: "rgba(0, 70, 255, 0.1)",
    color: "#4B4B4B",
  },
  follow: {
    width: "5vw",
    borderRadius: "1vw",
    background: "white",
    border: "1px solid rgba(0, 70, 255, 0.1)",
    color: "#4B4B4B",
  },
};

export const StyledButton = styled.button`
  ${props => ButtonStyles[props.theme]}
  &:active, &:focus {
    transform: scale(0.95);
  }

  ,
  &:hover {
    transform: scale(1);
    cursor: pointer;
  }
`;
