import React from "react";
import { Container, Wrapper, Image, SearchInput } from "./styled";
import { Text } from "../../index";
import searchImg from "../../../assets/images/searchImg.svg";

//  1,2,3 등만 숫자 다르니까 theme 받아서 나열하자

const SearchCard = () => {
  return (
    <Container>
      <Text theme="textSearch">종목 검색</Text>
      <Wrapper>
        <Image src={searchImg} alt="searchImage" />
        <SearchInput placeholder="기업명을 입력하세요"></SearchInput>
      </Wrapper>
    </Container>
  );
};

export default SearchCard;
