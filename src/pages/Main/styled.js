import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  margin-top: 20vh;
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const DecoImg = styled.img`
  position: absolute;
  top: 20vh;
  left: 5vw;
  width: 15vw;
  z-index: -1;
  filter: opacity(0.2);
`;

export const DecoImg2 = styled.img`
  position: absolute;
  bottom: 0vh;
  transform: rotate(15deg);
  left: 17vw;
  width: 35vw;
  z-index: -1;
  filter: opacity(0.1);
`;
export const DecoImg3 = styled.img`
  position: absolute;
  top: 10vh;
  transform: rotate(55deg);
  right: 2vw;
  width: 40vw;
  z-index: -1;
  filter: invert(15%) sepia(87%) saturate(7242%) hue-rotate(227deg)
    brightness(103%) contrast(106%) opacity(0.2);
`;
export const DecoImg4 = styled.img`
  position: absolute;
  top: -28vh;
  transform: rotate(33deg);
  left: 20vw;
  width: 25vw;
  z-index: -1;
  filter: invert(15%) sepia(87%) saturate(7242%) hue-rotate(227deg)
    brightness(103%) contrast(106%) opacity(0.2);
`;
