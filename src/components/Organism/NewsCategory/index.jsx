import { useRecoilState } from "recoil";
import { newsCategoryState } from "../../../store/atoms";
import { Card, Text, ListItem } from "../../index";

const NewsCategory = () => {
  const [category, setCategory] = useRecoilState(newsCategoryState);
  return (
    <Card theme="grayCard">
      <Text theme="text2">카테고리</Text>
      <ListItem
        category={category === 1 ? "on" : ""}
        onClick={() => setCategory(1)}
      >
        경제
      </ListItem>
      <ListItem
        category={category === 2 ? "on" : ""}
        onClick={() => setCategory(2)}
      >
        증권
      </ListItem>
      <ListItem
        category={category === 3 ? "on" : ""}
        onClick={() => setCategory(3)}
      >
        부동산
      </ListItem>
      <ListItem
        category={category === 4 ? "on" : ""}
        onClick={() => setCategory(4)}
      >
        기업 / 경영
      </ListItem>
    </Card>
  );
};
export default NewsCategory;
