import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { axiosInstance } from "../../apis";

import {
  Header,
  CategoryBundle,
  Footer,
  Text,
  BasicKnowledgeCategory,
  Input,
  Button,
} from "../../components";
import {
  Container,
  Wrapper,
  ContentContainer,
  ContentWrapper,
  SummaryInput,
  ButtonWrapper,
} from "./styled";
import { summaryContent, loginState } from "../../store/atoms";

// 요약 했는지 여부 api에서 받아오기
// 수정버튼 누를 시 해당 state 변경 && 외부 api 요청받아서 set 하기
const BasicKnowledgeDetail = () => {
  const navigate = useNavigate();
  const summaryContents = useRecoilValue(summaryContent);
  const loginStates = useRecoilValue(loginState);
  const setSummaryContent = useSetRecoilState(summaryContent);
  const [haveContent, setHaveContent] = useState("");
  const [isSummaryDone, setisSummaryDone] = useState(false);
  const [summaryId, setSummayId] = useState(1);
  const { category, id } = useParams();
  const [posts, setPosts] = useState({
    title: "",
    info: "",
  });
  const enrollPostData = {
    category: "basic",
    articleId: id,
    context: summaryContents,
  };

  // 요약하기 버튼 클릭 시 => post api 날리기
  const EnrollSummaryapi = async () => {
    if (loginStates.isLogin) {
      axiosInstance
        .post(`/summary`, enrollPostData)
        .then(response => {
          console.log(response.data, " 요약하기 버튼 클림함 ! ");
          setisSummaryDone(true);
          setHaveContent(summaryContents);
          console.log(isSummaryDone, " 요약 했니? ! ");
          console.log(response.data);
          setSummayId(response.data.summarySeq);
        })
        .catch(e => {
          console.log(enrollPostData);
          console.log(e);
        });
    } else {
      alert("로그인이 필요한 서비스입니다.");
      navigate("/login");
    }
  };
  const editPostData = {
    category: "basic",
    summarySeq: summaryId,
    context: summaryContents,
  };

  const EditSummaryapi = async () => {
    console.log(editPostData);
    axiosInstance
      .patch(`/summary`, editPostData)
      .then(response => {
        console.log(response.data);
        setHaveContent(summaryContents);
      })
      .catch(e => {
        console.log(e);
        console.log(editPostData);
      });
  };
  // summary 가 있을 시 have Context 설정
  const fetchHaveContext = async () => {
    if (isSummaryDone === true) {
      setHaveContent(summaryContents);
      console.log(haveContent);
    }
  };

  useEffect(() => {
    fetchHaveContext();
  }, [category]);

  // 내용 카드 클릭 시 ( 카테고리 변경 시 내용을 가져온다.)
  useEffect(() => {
    const fetchData = async () => {
      axiosInstance
        .get(`/basic/detail?categorySeq=${category}&basicSeq=${id}`)
        .then(response => {
          console.log(response.data);
          setPosts({
            title: response.data.subject,
            info: response.data.information,
          });
        })
        .catch(e => {
          console.log(e);
        });
      setHaveContent(summaryContents);
      console.log(haveContent);
    };
    fetchData();
  }, [category]);

  // 해당 카드에 대한 요약 여부를 가져와서 set 한다.
  useEffect(() => {
    const fetchData = async () => {
      if (loginStates.isLogin) {
        axiosInstance
          .get(`/summary?category=basic&articleId=${id}`)
          .then(response => {
            console.log(response.data, "요약여부를 가져오는 api");
            setSummaryContent(response.data.context);
            setSummayId(response.data.summarySeq);
            setisSummaryDone(response.data.wasWritten);
            setHaveContent(response.data.summarySeq);

            console.log(summaryContents, " 서머리 컨텐츠 ");
            console.log(haveContent, " haveContent ");
          })
          .catch(e => {
            console.log(e);
          });
      }
    };
    fetchData();
  }, [id]);

  return (
    <Container>
      <Header />
      <Text theme="infoTitle">기초 지식</Text>
      <Text theme="infoText">
        주식 투자에 필요한 기초 지식 정보를 통해 주식 투자 0 단계 부터 성장해
        나가세요!
      </Text>
      <CategoryBundle selected="basicknowledge" />
      <Wrapper>
        <BasicKnowledgeCategory />

        <ContentContainer>
          <ContentWrapper>
            <Text theme="textbasicDetailTitle"> {posts.title}</Text>
            <p>{posts.info}</p>
            <SummaryInput>
              <Input
                label="한 줄 요약하기"
                type="text"
                placeholder="요약을 입력하세요"
                context={haveContent}
              />
              <ButtonWrapper>
                {!isSummaryDone && (
                  <Button theme="summaryEnrollBtn" onClick={EnrollSummaryapi}>
                    요약하기
                  </Button>
                )}
                {isSummaryDone && (
                  <Button theme="summaryEditBtn" onClick={EditSummaryapi}>
                    수정하기
                  </Button>
                )}
              </ButtonWrapper>
            </SummaryInput>
          </ContentWrapper>
        </ContentContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};
export default BasicKnowledgeDetail;
