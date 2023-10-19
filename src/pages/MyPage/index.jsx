import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../apis";
import { loginState, onlyMeCheck } from "../../store/atoms";
import {
  Header,
  Footer,
  SandBeach,
  ProfileImg,
  Text,
  Button,
  SettingModal,
  FollowerModal,
  FollowingModal,
  SummaryCard,
  MyToggle,
} from "../../components";
import {
  Container,
  Wrapper,
  Content,
  Left,
  Right,
  SettingImg,
  ButtonWrapper,
  ProfileWrapper,
  TextWrapper,
  SummaryContainer,
  ErrorBoundary,
} from "./styled";

import setting from "../../assets/images/setting.svg";

const MyPage = () => {
  const user = useRecoilValue(loginState);
  const [isOpenSettingModal, setIsOpenSettingModal] = useState(false);
  const [isOpenFollowersModal, setOpenFollowersModal] = useState(false);
  const [isOpenFollowingModal, setIsOpenFollowingModal] = useState(false);
  const [currentNickname, setCurrentNickname] = useState("");
  const [currentProfile, setCurrentProfile] = useState("");
  const [currentTier, setCurrentTier] = useState("");
  const [currentCount, setCurrentCount] = useState("");
  const setCurrentOnlyMe = useSetRecoilState(onlyMeCheck);
  const [summary, setSummary] = useState([]);

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
          setCurrentOnlyMe(response.data.onlyMe);
          console.log(response.data);
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
        } else {
          alert("요약 정보를 가져오는데 실패했습니다.");
        }
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getSummary();
  }, []);

  useEffect(() => {
    getProfile();
  }, [user]);

  return (
    <Container>
      <Header theme="opaque" />
      <Wrapper>
        <Content>
          <Left>
            <ProfileWrapper>
              <ProfileImg profile={currentProfile} theme="mypageProfile" />
              <SettingImg
                src={setting}
                onClick={() => {
                  setIsOpenSettingModal(true);
                }}
              />
              {isOpenSettingModal && (
                <SettingModal
                  setIsOpenSettingModal={setIsOpenSettingModal}
                  id={id}
                />
              )}
            </ProfileWrapper>
            <TextWrapper>
              <Text>{currentNickname}</Text>
              <Text>{currentTier}</Text>
              <Text>총 요약 개수 {currentCount}</Text>
            </TextWrapper>
            <ButtonWrapper>
              <Button
                theme="followersBtn"
                onClick={() => {
                  setOpenFollowersModal(true);
                }}
              >
                followers
              </Button>
              {isOpenFollowersModal && (
                <FollowerModal
                  userId={id}
                  setOpenFollowersModal={setOpenFollowersModal}
                />
              )}
              <Button
                theme="followingBtn"
                onClick={() => {
                  setIsOpenFollowingModal(true);
                }}
              >
                following
              </Button>
              {isOpenFollowingModal && (
                <FollowingModal
                  setIsOpenFollowingModal={setIsOpenFollowingModal}
                  userId={id}
                />
              )}
            </ButtonWrapper>
          </Left>
          <Right>
            {currentCount === 0 ? (
              <ErrorBoundary>
                요약을 통해 중요한 점들을 기록해보세요!
              </ErrorBoundary>
            ) : (
              <SandBeach id={id} />
            )}
            <MyToggle id={id} />
            <SummaryContainer>
              {summary.length > 0 ? (
                summary.map(s => (
                  <SummaryCard
                    key={s.categorySeq + "/" + s.articleSeq}
                    data={s}
                  />
                ))
              ) : (
                <Text>요약 기록이 없습니다.</Text>
              )}
            </SummaryContainer>
          </Right>
        </Content>
      </Wrapper>
      <Footer />
    </Container>
  );
};
export default MyPage;
