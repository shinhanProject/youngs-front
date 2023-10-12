import styled from "styled-components";

export const OnboardingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  position: absolute;
  top: 0;
  left: 0;
  flex-wrap: wrap;
`;

const WrapperStyles = {
  wrapper1: {
    marginTop: "10vh",
    background: "goldenrod",
  },
  wrapper2: {
    background: "green",
  },
  wrapper3: {
    background: "white",
  },
  wrapper4: {
    background: "pink",
  },
  wrapper5: {
    background: "purple",
  },
};

export const Wrapper = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  ${props => WrapperStyles[props.theme]};
`;
