import styled from "styled-components";

const CardStyles = {
  loginCard: {
    background: "white",
    color: "black",
    width: "40vw",
    height: "30vh",
    borderRadius: "2vw",
    border: "1px solid #7e7979",
    boxShadow: "0vw 0.8vw 0.6vw -0.5vw gray",
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

  categoryCardnotSelected: {
    background: "white",
    color: "black",
    width: "21vw",
    height: "10vh",
    borderRadius: "2vw",
    border: "1.5px solid #ececec",
    boxShadow: "0 6px 6px -5px black",
  },

  categoryCardSelected: {
    background: "white",
    color: "black",
    width: "21vw",
    height: "10vh",
    border: "1.5px solid transparent",
    borderRadius: "1.5vw",
    backgroundImage:
      "linear-gradient(#fff, #fff), linear-gradient(to bottom, #e300ca 0%, #0046ff 100%)",
    backgroundOrigin: "border-box",
    backgroundClip: "content-box, border-box",
    boxShadow: "0 6px 6px -5px black",
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
    background: "white",
    color: "black",
    width: "14vw",
    height: "6vh",
    borderRadius: "1vw",
    border: "0.5px solid #fdfafa",
    boxShadow: "2px 3.5px 4px -3px gray",
  },

  gptModalCard: {
    background: "white",
    color: "black",
    width: "25vw",
    height: "11vh",
    borderRadius: "1vw",
    border: "0.5px solid #fdfafa",
    boxShadow: "2px 3.5px 4px -3px gray",
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
    height: "9vh",
    borderRadius: "1vw",
    border: "0.5px solid #ececec",
    boxShadow: "0px 3px 10px -3px gray",
  },

  stockRecommandCard: {
    background: "white",
    color: "black",
    width: "55vw",
    height: "20vh",
    borderRadius: "1.5vw",
    border: "0.5px solid #ffffff",
    boxShadow: "2.5px 5px 4px -3px gray",
  },
};

export const StyledCard = styled.div`
  ${props => CardStyles[props.styleType]}
`;
