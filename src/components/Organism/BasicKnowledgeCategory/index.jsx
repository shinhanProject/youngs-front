import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { basicCategoryState } from "../../../store/atoms";
import { Card, Text, ListItem } from "../../index";

const BasicKnowledgeCategory = () => {
  const [category, setCategory] = useRecoilState(basicCategoryState);
  return (
    <Card theme="grayCard">
      <Text theme="listCategoryText">카테고리</Text>

      <Link to="/basicknowledge">
        <ListItem
          category={category === 1 ? "on" : ""}
          onClick={() => setCategory(1)}
        >
          주식 기초
        </ListItem>
      </Link>
      <Link to="/basicknowledge">
        <ListItem
          category={category === 2 ? "on" : ""}
          onClick={() => setCategory(2)}
        >
          주식 투자 기법
        </ListItem>
      </Link>
      <Link to="/basicknowledge">
        <ListItem
          category={category === 3 ? "on" : ""}
          onClick={() => setCategory(3)}
        >
          위험성
        </ListItem>
      </Link>
      <Link to="/basicknowledge">
        <ListItem
          category={category === 4 ? "on" : ""}
          onClick={() => setCategory(4)}
        >
          경제 기초 지식
        </ListItem>
      </Link>
    </Card>
  );
};
export default BasicKnowledgeCategory;
