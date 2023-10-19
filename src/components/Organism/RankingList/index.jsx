import React from "react";
import { RankingCard } from "../../index";
import { Rankers } from "./styled";

const RankingList = ({
  posts,
  setmodalOpen,
  setUserid,
  setUsername,
  setfollow,
  handlePosition,
  changeProfile,
}) => {
  const doNothing = () => {};
  return (
    <Rankers>
      <RankingCard
        rank="순위"
        tier="등급"
        usrname="User"
        score="점수"
        setUsername={doNothing}
        setfollow={doNothing}
        handlePosition={doNothing}
        setmodalOpen={doNothing}
        setUserid={doNothing}
        changeProfile={doNothing}
      />
      {posts.map(post => (
        <RankingCard
          userSeq={post.userSeq}
          rank={post.rank}
          tier={post.tier}
          usrname={post.nickname}
          score={post.point}
          userfollow={post.status}
          profile={post.profile}
          setUsername={setUsername}
          setfollow={setfollow}
          handlePosition={handlePosition}
          setmodalOpen={setmodalOpen}
          setUserid={setUserid}
          changeProfile={changeProfile}
        />
      ))}
    </Rankers>
  );
};
export default RankingList;
