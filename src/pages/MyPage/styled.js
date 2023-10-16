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
  padding-top: 10vh;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 90vw;
  height: 80vh;
  border-radius: 1vw;
  display: flex;
  box-shadow: 0px 50px 150px 0px rgba(94, 77, 119, 0.25);
`;

export const Left = styled.div`
  width: 24vw;
  height: 80vh;
  background: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

export const Right = styled.div`
  width: 66vw;
  height: 80vh;
  background: #f7f8fa;
  box-shadow: 0px 50px 150px 0px rgba(94, 77, 119, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SettingImg = styled.img`
  position: absolute;
  top: 75%;
  right: 0%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const ProfileWrapper = styled.div`
  position: relative;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 10vh;
`;
