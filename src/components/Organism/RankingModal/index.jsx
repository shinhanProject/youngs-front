import React from "react";
import { Wrapper, WrapperProfile } from "./styled";
import { Text, ProfileImg, Card, Button } from "../../index";
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
const RankingModal = ({
  closeModal,
  profileImg,
  username,
  userSeq,
  isfollow,
  modalPosition,
  followOnClick,
}) => {
  const selectedImage = imageMap[profileImg];
  console.log("모달모달 프로필이미지", profileImg);
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
          <ProfileImg theme="rankingProfile" src={selectedImage} />
        </WrapperProfile>
        <Wrapper>
          <Button theme="followBtn" onClick={followOnClick}>
            {isfollow === 1 ? "Follow" : "Unfollow"}
          </Button>
          <Button theme="rankToUserBtn" onClick={closeModal}>
            To {userSeq}
          </Button>
        </Wrapper>
      </Card>
    </div>
  );
};

export default RankingModal;
