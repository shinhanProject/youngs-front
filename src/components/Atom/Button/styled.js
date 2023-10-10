import styled, { css } from "styled-components";

const loginBtn = css`
  background: linear-gradient(
    180deg,
    rgba(84, 84, 84, 0.09) 0%,
    rgba(253, 136, 206, 0.97) 0.01%,
    #0046ff 90.62%
  );
  color: white;
`;
const btn = css`
  color: black;
`;

export const StyledButton = styled.button`
  border-radius: 20px;
  ${props => props.styleType === "LoginBtn" && loginBtn}
  ${props => props.styleType === "btn" && btn}
`;
