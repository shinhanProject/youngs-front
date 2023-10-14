import {
  Header,
  Banner,
  CategoryBundle,
  StockRecommand,
  Footer,
} from "../../components";
import { Container, DecoImg, DecoImg2, DecoImg3, DecoImg4 } from "./styled";
import deco from "../../assets/images/deco.svg";

const Main = () => {
  return (
    <>
      <Header />
      <Container>
        <Banner />
        <CategoryBundle selected="" />
        <StockRecommand />
        <DecoImg src={deco} />
        <DecoImg2 src={deco} />
        <DecoImg3 src={deco} />
        <DecoImg4 src={deco} />
      </Container>
      <Footer />
    </>
  );
};

export default Main;
