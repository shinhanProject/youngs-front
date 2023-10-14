import React from "react";
import { RankingCard } from "../../index";
import { Rankers } from "./styled";

const RankingList = ({ posts }) => {
  return (
    <Rankers>
      <RankingCard index="순위" tier="등급" usrname="User" score="점수" />
      {posts.map((post, idx) => (
        <RankingCard
          idx={idx}
          index={post.userSeq}
          tier={post.tier}
          usrname={post.nickname}
          score={post.point}
        />
      ))}
    </Rankers>
  );
};
export default RankingList;
