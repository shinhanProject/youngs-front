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
const FollowingModal = () => {
  const [followings, setFollowings] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      axiosInstance
        .get(`/profile/1/following`)
        .then(response => {
          const dataWithRank = response.data.map((item, index) => ({
            ...item,
            index: index + 1,
          }));
          console.log(dataWithRank);
          setFollowings(dataWithRank);
        })
        .catch(e => {
          console.log(e);
        });
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Text theme="textSetting">Followings</Text>
      <Wrapper>
        {followings.map(following => (
          <ImgWrapper key={following.index}>
            <ProfileImg
              theme="followingProfile"
              src={imageMap[following.profile]}
            />
            <Text theme="textFollowing">{following.nickname}</Text>
          </ImgWrapper>
        ))}
      </Wrapper>

      <Button theme="settingBtn">닫기</Button>
    </Container>
  );
};

export default FollowingModal;
