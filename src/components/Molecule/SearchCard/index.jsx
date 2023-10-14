import React from "react";
import { Container, Wrapper, Image, SearchInput } from "./styled";
import { Text } from "../../index";
import searchImg from "../../../assets/images/searchImg.svg";

const SearchCard = () => {
  return (
    <Container>
      <Text theme="textSearch">종목 검색</Text>
      <Wrapper>
        <Image src={searchImg} alt="searchImage" />
        <SearchInput placeholder="기업명을 입력하세요" />
      </Wrapper>
    </Container>
  );
};

export default SearchCard;
