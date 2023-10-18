import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Container, Wrapper, ImgWrapper } from "./styled";
import { Text, ProfileImg, Button } from "../../index";
import { axiosInstance } from "../../../apis";

const FollowingModal = ({ setIsOpenFollowingModal, userId }) => {
  const [followings, setFollowings] = useState([]);
  const modalRef = useRef(null);

  const getData = async () => {
    axiosInstance
      .get(`/profile/${userId}/following`)
      .then(response => {
        const data = response.data.map(item => ({
          ...item,
        }));
        setFollowings(data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getData();
    const handler = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpenFollowingModal(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

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
      <Text theme="textSetting">Followings</Text>
      <Wrapper>
        {followings.map(following => (
          <Link to={`/otherpage/${following.userSeq}`}>
            <ImgWrapper key={following.index}>
              <ProfileImg
                theme="followingProfile"
                profile={following.profile}
              />
              <Text theme="textFollowing">{following.nickname}</Text>
              <Button
                theme="unfollow"
                onClick={() => {
                  onUnFollow(following.userSeq);
                }}
              >
                unfollow
              </Button>
            </ImgWrapper>
          </Link>
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
