import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { axiosInstance } from "../../apis";
import { followCheck } from "../../store/atoms";
import {
  Header,
  Footer,
  SandBeach,
  ProfileImg,
  Text,
  Button,
  SummaryCard,
} from "../../components";
import {
  Container,
  Wrapper,
  Content,
  Left,
  Right,
  ProfileWrapper,
  TextWrapper,
  SummaryContainer,
  ErrorBoundary,
} from "../MyPage/styled";

const OtherPage = () => {
  const [currentNickname, setCurrentNickname] = useState("");
  const [currentProfile, setCurrentProfile] = useState("");
  const [currentTier, setCurrentTier] = useState("");
  const [currentCount, setCurrentCount] = useState("");
  const [summary, setSummary] = useState([]);
  const [isfollow, setIsFollow] = useRecoilState(followCheck);
  const [errorMassage, setErrorMassage] = useState("요약 기록이 없습니다.");

  const { id } = useParams();

  const getProfile = async () => {
    axiosInstance
      .get(`/profile/${id}`)
      .then(response => {
        if (response.status === 200) {
          setCurrentNickname(response.data.nickname);
          setCurrentProfile(response.data.profile);
          setCurrentTier(response.data.tier);
          setCurrentCount(response.data.count);
        } else {
          alert("마이페이지의 정보를 가져오는데 실패했습니다.");
        }
      })
      .catch(() => {
        alert("마이페이지의 정보를 가져오는데 실패했습니다.");
      });
  };

  const getSummary = async () => {
    axiosInstance
      .get(`/profile/${id}/summary`)
      .then(response => {
        if (response.status === 200) {
          const summaryData = response.data.map(item => ({
            ...item,
          }));
          setSummary(summaryData);
          console.log(summaryData);
        } else if (response.status === 204) {
          setErrorMassage("비공개 기록입니다.");
        } else {
          alert("요약 정보를 가져오는데 실패했습니다.");
        }
      })
      .catch(e => {
        console.log(e);
      });
  };

  const onFollow = async () => {
    axiosInstance
      .post("/following/follow", {
        targetUserSeq: id,
      })
      .then(response => {
        console.log(response.data);
        setIsFollow(2);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const onUnFollow = async () => {
    axiosInstance
      .delete("/following/unfollow", {
        data: {
          targetUserSeq: id,
        },
      })
      .then(response => {
        console.log(response.data);
        setIsFollow(1);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getProfile();
    getSummary();
  }, []);

  console.log(isfollow);

  return (
    <Container>
      <Header theme="opaque" />
      <Wrapper>
        <Content>
          <Left>
            <ProfileWrapper>
              <ProfileImg profile={currentProfile} theme="mypageProfile" />
            </ProfileWrapper>
            <TextWrapper>
              <Text>{currentNickname}</Text>
              <Text>{currentTier}</Text>
              <Text>총 요약 개수 {currentCount}</Text>
            </TextWrapper>
            {isfollow === 1 ? (
              <Button theme="followBtn" onClick={onFollow}>
                follow
              </Button>
            ) : (
              <Button theme="followBtn" onClick={onUnFollow}>
                unfollow
              </Button>
            )}
          </Left>
          <Right>
            {currentCount === 0 ? (
              <ErrorBoundary>{errorMassage}</ErrorBoundary>
            ) : (
              <SandBeach id={id} />
            )}
            <SummaryContainer>
              {summary.length > 0 ? (
                summary.map(s => (
                  <SummaryCard
                    key={s.categorySeq + "/" + s.articleSeq}
                    data={s}
                  />
                ))
              ) : (
                <Text>요약을 통해 중요한 점들을 기록해보세요!</Text>
              )}
            </SummaryContainer>
          </Right>
        </Content>
      </Wrapper>
      <Footer />
    </Container>
  );
};
export default OtherPage;
