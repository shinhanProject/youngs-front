import React, { useState, useEffect, useRef } from "react";
import { Container, Wrapper, ImgWrapper } from "./styled";
import { Text, ProfileImg, Button } from "../../index";
import { axiosInstance } from "../../../apis";

const FollowingModal = ({ setIsOpenFollowingModal }) => {
  const [followings, setFollowings] = useState([]);
  const modalRef = useRef(null);

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

  useEffect(() => {
    const handler = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpenFollowingModal(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <Container ref={modalRef}>
      <Text theme="textSetting">Followings</Text>
      <Wrapper>
        {followings.map(following => (
          <ImgWrapper key={following.index}>
            <ProfileImg theme="followingProfile" profile={following.profile} />
            <Text theme="textFollowing">{following.nickname}</Text>
            <Button theme="unfollow">unfollow</Button>
          </ImgWrapper>
        ))}
      </Wrapper>

      <Button
        theme="settingBtn"
        onClick={() => {
          setIsOpenFollowingModal(false);
        }}
      >
        닫기
      </Button>
    </Container>
  );
};

export default FollowingModal;
