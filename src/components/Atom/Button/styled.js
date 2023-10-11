import styled from "styled-components";

const ButtonStyles = {
  loginBtn: {
    borderRadius: "15px",
    background:
      "linear-gradient( 180deg, rgba(253, 136, 206, 0.97) 0.01%,  #0046ff 100% )",
    color: "white",
  },
  transparentBtn: {
    background: "rgba(255, 255, 255, 0)",
  },
  blueBtn: {
    borderRadius: "15px",
    color: "white",
    background: "#0046ff",
  },
  blueCharBtn: {
    background: "rgba(255, 255, 255, 0)",
    color: "#0046ff",
  },
  summaryEditBtn: {
    borderRadius: "15px",
    background: "white",
    color: "#e300ca",
    border: "1px solid #ECECEC",
  },
  summaryEnrollBtn: {
    borderRadius: "15px",
    background: "white",
    color: "#0046ff",
    border: "1px solid #ECECEC",
  },

  followBtn: {
    borderRadius: "15px",
    background:
      "linear-gradient( 50deg,  #0046ff 30% , rgba(195, 0, 202, 0.9) 100%)",
    color: "white",
    border: "1px solid #ECECEC",
  },
  rankToUserBtn: {
    borderRadius: "15px",
    background:
      "linear-gradient( to bottom right,rgba(195, 0, 202, 0.7) 10%,  rgba(0,70,255,0.8 ) 30% , rgba(195, 0, 202, 0.7) 100%)",
    color: "white",
    border: "1px solid #ECECEC",
  },
};

export const StyledButton = styled.button`
  ${props => ButtonStyles[props.styleType]}
`;
