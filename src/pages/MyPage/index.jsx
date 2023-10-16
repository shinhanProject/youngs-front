import { Header, Footer, SandBeach, ProfileImg } from "../../components";
import { Container, Wrapper, Content, Left, Right } from "./styled";

import sol from "../../assets/images/sol.jpg";

const MyPage = () => {
  return (
    <Container>
      <Header theme="opaque" />
      <Wrapper>
        <Content>
          <Left>
            <ProfileImg src={sol} theme="mypageProfile" />
          </Left>
          <Right>
            <SandBeach />
          </Right>
        </Content>
      </Wrapper>
      <Footer />
    </Container>
  );
};
export default MyPage;
