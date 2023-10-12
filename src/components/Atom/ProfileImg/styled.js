import styled from "styled-components";

const profileStyles = {
  loginProfile: {
    width: "3vw",
    height: "auto",
    borderRadius: "70%",
    overflow: "hidden",
    border: "1px solid #ececec",
  },
  mypageProfile: {
    width: "17vw",
    height: "auto",
    borderRadius: "70%",
    overflow: "hidden",
    boxShadow: "0vw 0.8vw 1vw -0.5vw gray",
  },
  rankingProfile: {
    width: "3.5vw",
    height: "auto",
    borderRadius: "70%",
    overflow: "hidden",
    border: "1px solid lightgray",
    margin: "0 0 0 4.3vw",
  },
};

export const StyledProfile = styled.div`
  ${props => profileStyles[props.theme]}
`;

export const ProfileImages = styled.img`
  width: 100%;
  height: 100%;
  objectfit: cover;
`;
