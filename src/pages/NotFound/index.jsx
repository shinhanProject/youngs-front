import React from "react";
import { LoadFile } from "../../components";
import { Container } from "./styled";

const NotFound = () => {
  return (
    <Container>
      <LoadFile currentHTMLKey="basic/stock2.html" />
    </Container>
  );
};

export default NotFound;
