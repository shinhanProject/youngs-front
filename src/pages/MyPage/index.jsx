import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../apis";
import { loginState } from "../../store/atoms";
import {
  Header,
  Footer,
  SandBeach,
  ProfileImg,
  Text,
  Button,
  SettingModal,
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
} from "./styled";

import setting from "../../assets/images/setting.svg";

const MyPage = () => {
  const [isMe, setIsMe] = useState(false);
  const user = useRecoilValue(loginState);
  const [isOpenSettingModal, setIsOpenSettingModal] = useState(false);
  const [currentNickname, setCurrentNickname] = useState("");
  const [currentProfile, setCurrentProfile] = useState("");
  const [currentTier, setCurrentTier] = useState("");
  const [currentCount, setCurrentCount] = useState("");

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

  useEffect(() => {
    if (id === user.userInfo.userSeq.toString()) {
      setIsMe(true);
    }
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
                <Button theme="followersBtn">followers</Button>
                <Button theme="followingBtn">following</Button>
              </ButtonWrapper>
            ) : (
              <Button theme="followBtn">follow</Button>
            )}
          </Left>
          <Right>
            <SandBeach id={id} />
          </Right>
        </Content>
      </Wrapper>
      <Footer />
    </Container>
  );
};
export default MyPage;
