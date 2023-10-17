import React, { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { Container, Wrapper, Image, SearchInput } from "./styled";
import { searchStock } from "../../../store/atoms";
import { Text } from "../../index";
import searchImg from "../../../assets/images/searchImg.svg";

const SearchCard = () => {
  const setSearchStock = useSetRecoilState(searchStock);
  const [inputText, setInputText] = useState("");
  useEffect(() => {
    setSearchStock(inputText);
  }, [inputText]);

  const handleChange = e => {
    setInputText(e.target.value);
    console.log(inputText);
  };
  return (
    <Container>
      <Text theme="textSearch">종목 검색</Text>
      <Wrapper>
        <Image src={searchImg} alt="searchImage" />
        <SearchInput
          type="text"
          placeholder="기업명을 입력하세요"
          value={inputText}
          onChange={handleChange}
        />
      </Wrapper>
    </Container>
  );
};

export default SearchCard;
