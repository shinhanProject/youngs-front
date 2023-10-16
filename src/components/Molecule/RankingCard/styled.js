import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 20vw;
`;
export const WrapperUsername = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 20vw;
`;

export const Wrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  width: 30vw;
`;

const rankStyles = {
  normal: {
    fontWeight: "normal",
    fontSize: "1vw",
    display: "flex",
    flexDirection: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "1.8vw",
    height: "1.8vw",
    color: "#333333",
    background: "rgba(0, 79, 255, 0.2)",
    borderRadius: "70%",
    boxShadow: "0vw 0.5vw 0.5vw -0.5vw gray",
  },
  high: {
    fontWeight: "normal",
    fontSize: "1vw",
    color: "white",
    display: "flex",
    flexDirection: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "1.8vw",
    height: "1.8vw",
    background:
      "radial-gradient(circle, #004fff, #004fff, rgba(235, 255, 0, 0.8))",
    borderRadius: "70%",
    boxShadow: "0vw 0.5vw 0.6vw -0.5vw gray",
  },
  text: {
    fontWeight: "normal",
    fontSize: "1vw",
    color: "#333333",
  },
};
export const WrapperRank = styled.div`
  ${props => rankStyles[props.theme]}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 70vw;
  grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
  border-bottom: 1px solid lightgray;
  &:hover {
    ${props =>
      props.theme === "normal" || props.theme === "high"
        ? "background-color: rgba(0, 70, 255, 0.1)"
        : "background-color: white"};
  }
`;
