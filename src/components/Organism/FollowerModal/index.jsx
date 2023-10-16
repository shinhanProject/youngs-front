import React, { useState, useEffect, useRef } from "react";
import { Container, Wrapper, ImgWrapper } from "./styled";
import { Text, ProfileImg, Button } from "../../index";
import { axiosInstance } from "../../../apis";

const FollowerModal = ({ setOpenFollowersModal }) => {
  const [followers, setFollowers] = useState([]);
  const modalRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      axiosInstance
        .get(`/profile/${1}/follower`)
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

  const onFollow = async e => {
    console.log(e.target);
  };

  const onUnFollow = () => {};

  useEffect(() => {
    const handler = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenFollowersModal(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <Container ref={modalRef}>
      <Text theme="textSetting">Followers</Text>
      <Wrapper>
        {followers.map(follower => (
          <ImgWrapper key={follower.index}>
            <ProfileImg theme="followingProfile" profile={follower.profile} />
            <Text theme="textFollowing">{follower.nickname}</Text>
            {follower.status === 1 ? (
              <Button
                theme="follow"
                onClick={e => {
                  onFollow(e);
                }}
              >
                follow
              </Button>
            ) : (
              <Button
                theme="unfollow"
                onClick={e => {
                  onUnFollow(e);
                }}
              >
                unfollow
              </Button>
            )}
          </ImgWrapper>
        ))}
      </Wrapper>
      <Button
        theme="settingBtn"
        onClick={() => {
          setOpenFollowersModal(false);
        }}
      >
        닫기
      </Button>
    </Container>
  );
};

export default FollowerModal;
