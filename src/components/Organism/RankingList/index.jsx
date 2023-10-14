import React from "react";
import { RankingCard } from "../../index";
import { Rankers } from "./styled";

const RankingList = ({ posts }) => {
  return (
    <Rankers>
      <RankingCard rank="순위" tier="등급" usrname="User" score="점수" />
      {posts.map(post => (
        <RankingCard
          rank={post.rank}
          tier={post.tier}
          usrname={post.nickname}
          score={post.point}
        />
      ))}
    </Rankers>
  );
};
export default RankingList;
