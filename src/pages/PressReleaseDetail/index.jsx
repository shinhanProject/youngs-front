import React, { useState, useEffect } from "react";
import { axiosInstance } from "../../apis";
import {
  Header,
  CategoryBundle,
  Footer,
  Text,
  NewsCategory,
  Toggle,
} from "../../components";
import { Container, Wrapper, ContentContainer, ContentWrapper } from "./styled";

const PressReleaseDetail = () => {
  const [word, setWord] = useState("");

  const handleSelect = () => {
    const text = window.getSelection().toString().trim();
    console.log(text);
    if (text.length <= 20) {
      setWord(text);
    } else {
      console.log("길어");
    }
  };
  const getWord = ({ w }) => {
    axiosInstance
      .get(`/word/${w}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    if (word !== "") {
      getWord({ w: word });
    }
  }, [word]);

  return (
    <Container>
      <Header />
      <Text theme="infoTitle">뉴스 정보</Text>
      <Text theme="infoText">
        배운 내용들을 기반으로 뉴스 정보를 탐색해보세요! 주식에 밀접한
        카테고리로 구성했어요.
      </Text>
      <CategoryBundle selected="pressrelease" />
      <Wrapper>
        <NewsCategory />
        <ContentContainer onMouseUp={handleSelect}>
          <Toggle flag={1} />
          <ContentWrapper>
            <p>
              반도체 대장주인 삼성전자와 SK하이닉스 주가가 최근 들어 다른 양상을
              보이고 있다. 한 달 새 지지부진한 삼성전자 주가에 비해 SK하이닉스는
              고대역폭메모리(HBM) 수혜에다 최근에는 D램 흑자 전환 가능성이라는
              호재까지 맞아 투자자들의 기대감이 커지고 있다. 10일
              유가증권시장에서 SK하이닉스는 한 달간 6.3% 상승한 11만9500원에,
              삼성전자는 4.7% 하락한 6만6400원에 거래를 마감했다 .지난 5월 이후
              SK하이닉스가 엔비디아향 HBM 수주 효과로 삼성전자의 주가 상승폭을
              앞질렀는데 9월부터는 3분기 실적 기대감에 코스피가 하락하는
              와중에도 여전히 선전하고 있는 것이다.최근 일주일간 증권사가 추정한
              SK하이닉스 3분기 D램 사업부 영업이익을 보면 한국투자증권은 14억원,
              SK증권은 7070억원, 상상인증권은 1439억원을 제시했다. 같은 시기
              삼성전자 D램 사업부가 2000억원대 영업손실을 볼 것이란 전망과는
              대조적이다. 양사 매출 중 가장 큰 비중을 차지하는 D램 사업부
              영업이익 향방이 갈리면서 전반적인 컨센서스와 주가도 다른 방향을
              가리키고 있다. 에프앤가이드가 증권사 3곳 이상이 내놓은 전망치를
              추정한 결과 삼성전자의 3분기 영업이익은 한 달 전 3조141억원에서
              최근 2조1927억원으로 크게 감소했다. 지난 일주일 새 나온
              보고서에서는 영업이익 예상치가
              1조5000억(SK증권)~1조8000억원(대신증권)까지 내려왔다.반면
              SK하이닉스는 한 달 전 추정한 적자가 1조7507억원인데 최근에는
              1조6769억원으로 규모가 줄어드는 추세다.채민숙 한국투자증권
              연구원은 SK하이닉스는 HBM과 인공지능(AI) 서버용 고용량 D램 모듈
              같은 고부가가치 제품 판매가 늘면서 평균판매단가(ASP) 상승폭이 더
              컸다며 삼성전자보다 1a나노미터(㎚) 양산도 먼저 시작해 원가
              경쟁력을 확보했기 때문에 흑자 전환에 성공할 이라고
              말했다.시장조사업체 옴디아에 따르면 2분기 D램 시장점유율(매출
              기준)은 삼성전자 38.2%, SK하이닉스 31.9%로 6.3%포인트 차이가 난다.
              지난 1분기 18.1%포인트 차에서 크게 줄어들었으며 3분기에는
              고부가가치 D램 비율이 높은 SK하이닉스가 D램 업황 반등의 기회를 더
              많이 누릴 것으로 시장은 예상하고 있다.지난달 초 삼성전자가
              엔비디아에 HBM을 공급한다는 소식에 깜짝 상승하기도 했으나 최근
              들어 수율 문제로 공급이 원활하지 않을 것이란 우려가 나오며 주가
              모멘텀이 약화된 상태다.삼성전자는{" "}
            </p>
          </ContentWrapper>
        </ContentContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default PressReleaseDetail;
