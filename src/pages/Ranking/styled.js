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
  display: flex;
  flex-direction: column;
  justify-content: between;
  align-items: center;
  text-align: center;
`;

export const Wrapper = styled.div`
  background: white;
  width: 70vw;
  margin-top: 15vh;
  margin-bottom: 5vh;
  border-radius: 20px;
  height: 80vh;
  box-shadow: 5px 5px 5px lightslategray;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-around;
`;

export const Wrapperpage = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  margin-bottom: 1vh;
`;
export const WrapperTitile = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 5vh;
  margin-bottom: 6vh;
`;
export const Rankers = styled.div`
  display: grid;
  height: 600px;
  grid-template-rows: repeat(auto-fill);
  // grid-template-columns: 1fr; /* 1개의 열로 설정 */
  grid-gap: 4px; /* 요소 간 간격 설정 */
`;
export const Pagenation = styled.div``;
export const Dummy = styled.div``;
