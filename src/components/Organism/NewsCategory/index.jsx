import { Card, Text, ListItem } from "../../index";

const NewsCategory = ({ selected }) => {
  return (
    <Card theme="grayCard">
      <Text theme="text2">카테고리</Text>
      <ListItem state={selected === "Economics" ? "on" : ""}>경제</ListItem>
      <ListItem state={selected === "Securities" ? "on" : ""}>증권</ListItem>
      <ListItem state={selected === "RealEstate" ? "on" : ""}>부동산</ListItem>
      <ListItem state={selected === "Business" ? "on" : ""}>
        기업 / 경영
      </ListItem>
    </Card>
  );
};
export default NewsCategory;
