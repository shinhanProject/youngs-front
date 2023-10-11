import styled, { css } from "styled-components";

const loginCard = css`
  background: white;
  color: black;
  width: 40vw;
  height: 30vh;
  border-radius: 2vw;
  border: 1px solid #7e7979;
  box-shadow: 0vw 0.8vw 0.6vw -0.5vw gray;
`;

const signupCard = css`
  background: white;
  color: black;
  width: 40vw;
  height: 55vh;
  border-radius: 2vw;
  border: 1px solid #7e7979;
  box-shadow: 0vw 0.8vw 0.6vw -0.5vw gray;
`;

const categoryCardnotSelected = css`
  background: white;
  color: black;
  width: 21vw;
  height: 10vh;
  border-radius: 2vw;
  border: 1.5px solid #ececec;
  box-shadow: 0 6px 6px -5px black;
`;

const categoryCardSelected = css`
  background: white;
  color: black;
  width: 21vw;
  height: 10vh;

  border: 1.5px solid transparent;

  border-radius: 1.5vw;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(
      to bottom,
      #e300ca 0%,

      #0046ff 100%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 0 6px 6px -5px black;
`;

const educateCard = css`
  background: white;
  color: black;
  width: 25vw;
  height: 12vh;
  border-radius: 1.5vw;

  border: 0.5px solid #ececec;
  box-shadow: 3px 5px 12px -1px gray;
`;
const educateDetailCard = css`
  background: white;
  color: black;
  width: 75vw;
  height: 50vh;
  border-radius: 1.5vw;
  border: 0.5px solid #ececec;
  box-shadow: 3px 5px 8px -3px gray;
`;

const rankModalCard = css`
  background: white;
  color: black;
  width: 14vw;
  height: 6vh;
  border-radius: 1vw;
  border: 0.5px solid #fdfafa;
  box-shadow: 2px 3.5px 4px -3px gray;
`;

const gptModalCard = css`
  background: white;
  color: black;
  width: 25vw;
  height: 11vh;
  border-radius: 1vw;
  border: 0.5px solid #fdfafa;
  box-shadow: 2px 3.5px 4px -3px gray;
`;

const followModalCard = css`
  background: white;
  color: black;
  width: 14vw;
  height: 6vh;

  border-radius: 1vw;
  border: 0.5px solid #fdfafa;
  box-shadow: 2px 3.5px 4px -3px gray;
`;

const summaryCard = css`
  background: white;
  color: black;
  width: 38vw;
  height: 9vh;
  border-radius: 1vw;
  border: 0.5px solid #ececec;
  box-shadow: 0px 3px 10px -3px gray;
`;

const stockRecommandCard = css`
  background: white;
  color: black;
  width: 55vw;
  height: 20vh;
  border-radius: 1.5vw;
  border: 0.5px solid #ffffff;
  box-shadow: 2.5px 5px 4px -3px gray;
`;

/* <Card styleType="rankModalCard">랭크 모달</Card>
<Card styleType="followModalCard">팔로우 모달</Card>
<Card styleType="SummaryCard">요약카드</Card> */

export const StyledCard = styled.div`
  ${props => props.styleType === "LoginCard" && loginCard}
  ${props => props.styleType === "SignupCard" && signupCard}
  ${props =>
    props.styleType === "CategoryCardnotSelected" && categoryCardnotSelected}
  ${props => props.styleType === "CategoryCardSelected" && categoryCardSelected}
  ${props => props.styleType === "EducateCard" && educateCard}
  ${props => props.styleType === "EducateDetailCard" && educateDetailCard}
  ${props => props.styleType === "RankModalCard" && rankModalCard}
  ${props => props.styleType === "GptModalCard" && gptModalCard}
  ${props => props.styleType === "FollowModalCard" && followModalCard}
  ${props => props.styleType === "SummaryCard" && summaryCard}
  ${props => props.styleType === "StockRecommandCard" && stockRecommandCard}
`;
