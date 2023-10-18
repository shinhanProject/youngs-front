import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { newsCategoryState } from "../../../store/atoms";
import { Card, Text, ListItem } from "../../index";
import { Wrapper } from "./styled";

const NewsCategory = () => {
  const [category, setCategory] = useRecoilState(newsCategoryState);
  return (
    <Card theme="grayCard">
      <Wrapper>
        <Text theme="listCategoryText">카테고리</Text>
      </Wrapper>
      <Link to="/pressrelease">
        <ListItem
          category={category === 1 ? "on" : "off"}
          onClick={() => setCategory(1)}
        >
          경제
        </ListItem>
      </Link>
      <Link to="/pressrelease">
        <ListItem
          category={category === 2 ? "on" : "off"}
          onClick={() => setCategory(2)}
        >
          증권
        </ListItem>
      </Link>
      <Link to="/pressrelease">
        <ListItem
          category={category === 3 ? "on" : "off"}
          onClick={() => setCategory(3)}
        >
          부동산
        </ListItem>
      </Link>
      <Link to="/pressrelease">
        <ListItem
          category={category === 4 ? "on" : "off"}
          onClick={() => setCategory(4)}
        >
          기업 / 경영
        </ListItem>
      </Link>
    </Card>
  );
};
export default NewsCategory;
