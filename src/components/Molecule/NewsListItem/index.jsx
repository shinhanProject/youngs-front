import { Text } from "../../index";
import { Wrapper } from "./styled";

const NewsListItem = ({ title, content, date }) => {
  return (
    <Wrapper>
      <Text>{title}</Text>
      <Text theme="descriptionText">{content}</Text>
      <Text>{date}</Text>
    </Wrapper>
  );
};
export default NewsListItem;
