import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, WrapperProfile } from "./styled";
import { Text, ProfileImg, Card, Button } from "../../index";

const RankingModal = ({
  closeModal,
  profileImg,
  username,
  userSeq,
  isfollow,
  modalPosition,
  followOnClick,
}) => {
  return (
    <div
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
          <Button theme="followBtn" onClick={followOnClick}>
            {isfollow === 1 ? "Follow" : "Unfollow"}
          </Button>
          <Link to={`/mypage/${userSeq}`}>
            <Button theme="rankToUserBtn" onClick={closeModal}>
              보러가기
            </Button>
          </Link>
        </Wrapper>
      </Card>
    </div>
  );
};

export default RankingModal;
