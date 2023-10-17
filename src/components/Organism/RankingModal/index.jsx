import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { axiosInstance } from "../../../apis";
import { followCheck } from "../../../store/atoms";
import { Wrapper, WrapperProfile } from "./styled";
import { Text, ProfileImg, Card, Button } from "../../index";

const RankingModal = ({
  closeModal,
  profileImg,
  username,
  userSeq,
  isfollow,
  modalPosition,
}) => {
  const [checkFollow, setCheckFollow] = useState(isfollow);
  const setFollow = useSetRecoilState(followCheck);
  const modalRef = useRef(null);
  const navigate = useNavigate();

  const onFollow = async () => {
    axiosInstance
      .post("/following/follow", {
        targetUserSeq: userSeq,
      })
      .then(response => {
        console.log(response.data);
        setCheckFollow(2);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const onUnFollow = async () => {
    axiosInstance
      .delete("/following/unfollow", {
        data: {
          targetUserSeq: userSeq,
        },
      })
      .then(response => {
        console.log(response.data);
        setCheckFollow(1);
      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    const handler = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const goOtherPage = () => {
    setFollow(isfollow);
    navigate(`/otherpage/${userSeq}`);
  };
  return (
    <div
      ref={modalRef}
      style={{
        top: `${modalPosition.top}px`,
        left: `${modalPosition.left}px`,
        position: `absolute`,
      }}
    >
      <Card theme="rankModalCard">
        <WrapperProfile>
          <Text theme="textRankingProfile">{username}</Text>
          <ProfileImg theme="rankingProfile" profile={profileImg} />
        </WrapperProfile>
        <Wrapper>
          {checkFollow === 1 ? (
            <Button theme="rankToUserBtn" onClick={onFollow}>
              Follow
            </Button>
          ) : (
            <Button theme="rankToUserBtn" onClick={onUnFollow}>
              Unfollow
            </Button>
          )}
          <Button theme="rankToUserBtn" onClick={goOtherPage}>
            보러가기
          </Button>
        </Wrapper>
      </Card>
    </div>
  );
};

export default RankingModal;
