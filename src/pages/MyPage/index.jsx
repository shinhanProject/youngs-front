import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../apis";
import { loginState, privateSummary } from "../../store/atoms";
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
  Toggle,
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
} from "./styled";

import setting from "../../assets/images/setting.svg";

const MyPage = () => {
  const [isMe, setIsMe] = useState(false);
  const user = useRecoilValue(loginState);
  const SummaryOnlyMe = useRecoilValue(privateSummary);
  const [isOpenSettingModal, setIsOpenSettingModal] = useState(false);
  const [isOpenFollowersModal, setOpenFollowersModal] = useState(false);
  const [isOpenFollowingModal, setIsOpenFollowingModal] = useState(false);
  const [currentNickname, setCurrentNickname] = useState("");
  const [currentProfile, setCurrentProfile] = useState("");
  const [currentTier, setCurrentTier] = useState("");
  const [currentCount, setCurrentCount] = useState("");
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
        } else {
          alert("요약 정보를 가져오는데 실패했습니다.");
        }
      })
      .catch(() => {
        alert("요약 정보를 가져오는데 실패했습니다.");
      });
  };

  const setPrivate = () => {};

  useEffect(() => {
    getSummary();
  }, []);

  useEffect(() => {
    if (id === user.userInfo.userSeq.toString()) {
      setIsMe(true);
    }
    getProfile();
  }, [user]);

  useEffect(() => {
    setPrivate();
  }, [SummaryOnlyMe]);

  return (
    <Container>
      <Header theme="opaque" />
      <Wrapper>
        <Content>
          <Left>
            <ProfileWrapper>
              <ProfileImg profile={currentProfile} theme="mypageProfile" />
              {isMe && (
                <SettingImg
                  src={setting}
                  onClick={() => {
                    setIsOpenSettingModal(true);
                  }}
                />
              )}
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
            {isMe ? (
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
                    id={id}
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
                    id={id}
                    setIsOpenFollowingModal={setIsOpenFollowingModal}
                  />
                )}
              </ButtonWrapper>
            ) : (
              <Button theme="followBtn">follow</Button>
            )}
          </Left>
          <Right>
            <SandBeach id={id} />
            <Toggle flag={3} />
            <SummaryContainer>
              {summary.length > 0 ? (
                summary.map(s => <SummaryCard key={s.articleSeq} data={s} />)
              ) : (
                <div>불러오는 중</div>
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
