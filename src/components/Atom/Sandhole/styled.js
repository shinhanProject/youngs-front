import styled from "styled-components";
import sandhole from "../../../assets/images/sandhole.svg";

const sandholeStyles = {
  snadhole1: {
    width: "2.3vw",
    height: "2.3vw",
    borderRadius: "70%",
    overflow: "hidden",
    border: "1px solid #ececec",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItem: "center",
    backgroundImage: `url(${sandhole})`,
    backgroundSize: "cover",
  },
};

export const StyledSandhole = styled.div`
  ${props => sandholeStyles[props.theme]}
`;

export const Shells = styled.img`
  width: 80%;
  height: 80%;
  objectfit: cover;
  display: block;
  margin: 0 auto;
`;
