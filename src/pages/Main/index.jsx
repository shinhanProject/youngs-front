import {
  Header,
  Banner,
  CategoryBundle,
  StockRecommand,
  Footer,
} from "../../components";
// import { axiosInstance } from "../../apis";
import { Container, DecoImg, DecoImg2 } from "./styled";
import deco from "../../assets/images/deco.svg";

const Main = () => {
  /*
  const getJobList = () => {
    axiosInstance
      .get("/news/1")
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  */
  return (
    <>
      <Header />
      <Container>
        <Banner />
        <CategoryBundle selected="" />
        <StockRecommand />
        <DecoImg src={deco} />
        <DecoImg2 src={deco} />
      </Container>
      <Footer />
    </>
  );
};

export default Main;
