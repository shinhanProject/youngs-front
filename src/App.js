import "./styles/reset.css";
import { Button, Card } from "./components";

function App() {
  return (
    <div>
      <Button styleType="btn2">가나다</Button>
      {/* <Card styleType="LoginCard">로그인카드테스트</Card>
      <Card styleType="SignupCard">회원가입카드테스트</Card>
      <Card styleType="CategoryCardnotSelected">주식 카테고리 카드</Card>
      <Card styleType="CategoryCardSelected">주식 카테고리 카드</Card>
      <Card styleType="EducateCard">정보 카드</Card>
      <Card styleType="EducateDetailCard">정보 세부 카드</Card>
      <Card styleType="RankModalCard">랭크 모달</Card>
      <Card styleType="GptModalCard">GPT 모달</Card>

      <Card styleType="FollowModalCard">팔로우 모달</Card>
      <Card styleType="SummaryCard">요약카드</Card> */}

      <Card styleType="EducateCard">정보 카드</Card>
      <Card styleType="StockRecommandCard">급상승 추천 카드</Card>
    </div>
  );
}

export default App;
