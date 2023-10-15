import React, { useState, useEffect } from "react";
import { Container, Wrapper, ImgWrapper } from "./styled";
import { Text, ProfileImg, Button } from "../../index";
import { axiosInstance } from "../../../apis";
import sol from "../../../assets/images/sol.jpg";
import doraemi from "../../../assets/images/doraemi.svg";
import shoo from "../../../assets/images/shoo.svg";
import lino from "../../../assets/images/lino.svg";
import lulu from "../../../assets/images/lulu.svg";
import moli from "../../../assets/images/moli.svg";

const imageMap = {
  sol,
  doraemi,
  shoo,
  lino,
  lulu,
  moli,
};
const FollowerModal = () => {
  const [followers, setFollowers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      axiosInstance
        .get(`/profile/1/follower`)
        .then(response => {
          const dataWithRank = response.data.map((item, index) => ({
            ...item,
            index: index + 1,
          }));
          console.log(dataWithRank);
          setFollowers(dataWithRank);
        })
        .catch(e => {
          console.log(e);
        });
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Text theme="textSetting">Followers</Text>
      <Wrapper>
        {followers.map(follower => (
          <ImgWrapper key={follower.index}>
            <ProfileImg
              theme="followingProfile"
              src={imageMap[follower.profile]}
            />
            <Text theme="textFollowing">{follower.nickname}</Text>
          </ImgWrapper>
        ))}
      </Wrapper>

      <Button theme="settingBtn">닫기</Button>
    </Container>
  );
};

export default FollowerModal;
