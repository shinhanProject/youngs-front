import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Container, Wrapper, ImgWrapper } from "./styled";
import { Text, ProfileImg, Button } from "../../index";
import { axiosInstance } from "../../../apis";

const FollowerModal = ({ setOpenFollowersModal, userId }) => {
  const [followers, setFollowers] = useState([]);
  const modalRef = useRef(null);

  const getData = async () => {
    axiosInstance
      .get(`/profile/${userId}/follower`)
      .then(response => {
        const data = response.data.map(item => ({
          ...item,
        }));
        setFollowers(data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getData();
    const handler = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenFollowersModal(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const onFollow = async id => {
    axiosInstance
      .post("/following/follow", {
        targetUserSeq: id,
      })
      .then(response => {
        console.log(response.data);
        getData();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const onUnFollow = async id => {
    axiosInstance
      .delete("/following/unfollow", {
        data: {
          targetUserSeq: id,
        },
      })
      .then(response => {
        console.log(response.data);
        getData();
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <Container ref={modalRef}>
      <Text theme="textSetting">Followers</Text>
      <Wrapper>
        {followers.map(follower => (
          <Link to={`/otherpage/${follower.userSeq}`}>
            <ImgWrapper key={follower.index}>
              <ProfileImg theme="followingProfile" profile={follower.profile} />
              <Text theme="textFollowing">{follower.nickname}</Text>
              {follower.status === 1 ? (
                <Button
                  theme="follow"
                  onClick={() => {
                    onFollow(follower.userSeq);
                  }}
                >
                  follow
                </Button>
              ) : (
                <Button
                  theme="unfollow"
                  onClick={() => {
                    onUnFollow(follower.userSeq);
                  }}
                >
                  unfollow
                </Button>
              )}
            </ImgWrapper>
          </Link>
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
