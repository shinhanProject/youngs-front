import styled from "styled-components";

export const Container = styled.div`
  background: conic-gradient(
    from -69deg at 135.7% 10.45%,
    rgba(0, 70, 255, 0.3) 0deg,
    rgba(95, 139, 255, 0) 179.52390789985657deg,
    rgba(0, 70, 255, 0.3) 312.74986267089844deg,
    rgba(227, 0, 202, 0.3) 360deg
  );
  width: 100vw;
  height: 100vh;
`;
export const Wrapper = styled.div`
  width: 100vw;
  margin-top: 10vh;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginInput = styled.input`
  border: 1px solid #ececec;
  width: 98%;
  border-radius: 2px;
  height: 6vh;
  font-size: 0.8rem;
  margin-bottom: 1.5vh;

  &::placeholder {
    color: #d9d9d9;
    padding-left: 15px;
  }
`;

export const SignUpWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  margin-bottom: 4vh;
`;
