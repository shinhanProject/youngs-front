import React from "react";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { basicCategoryState, newsCategoryState } from "../../../store/atoms";
import { Wrapper1, Wrapper2 } from "./styled";
import { Text, Card, Button } from "../../index";

const SummaryCard = ({ data }) => {
  const navigate = useNavigate();
  const setBasic = useSetRecoilState(basicCategoryState);
  const setNews = useSetRecoilState(newsCategoryState);
  const onDetail = () => {
    if (data.category === "basic") {
      if (data.title === "주식 기초") {
        setBasic(1);
        navigate(`/bsdetail/1/${data.articleSeq}`);
      }
      if (data.title === "주식 투자 기법") {
        setBasic(2);
        navigate(`/bsdetail/2/${data.articleSeq}`);
      }
      if (data.title === "위험성") {
        setBasic(3);
        navigate(`/bsdetail/3/${data.articleSeq}`);
      }
      if (data.title === "경제 기초 지식") {
        setBasic(4);
        navigate(`/bsdetail/4/${data.articleSeq}`);
      }
    }
    if (data.category === "news") {
      if (data.title === "경제") {
        setNews(1);
        navigate(`/prdetail/1/${data.articleSeq}`);
      }
      if (data.title === "증권") {
        setNews(2);
        navigate(`/prdetail/2/${data.articleSeq}`);
      }
      if (data.title === "부동산") {
        setNews(3);
        navigate(`/prdetail/3/${data.articleSeq}`);
      }
      if (data.title === "기업∙경영") {
        setNews(4);
        navigate(`/prdetail/4/${data.articleSeq}`);
      }
    }
  };

  return (
    <Card theme="summaryCard" onClick={onDetail}>
      <Wrapper1>
        <Text theme="textSummaryDate">{data.modifiedAt}</Text>
        <Text theme="textSummaryDescription">{data.context}</Text>
      </Wrapper1>
      <Wrapper2>
        <Text theme="textSummaryTopic">{data.title}</Text>
        <Button theme="headerBtn" onClick={onDetail}>
          내용 보러가기
        </Button>
      </Wrapper2>
    </Card>
  );
};

export default SummaryCard;
