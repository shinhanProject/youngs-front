import React from "react";
import { Text } from "../../index";

import { Wrapper } from "./styled";

const StockListItem = ({ infoName, data }) => {
  return (
    <Wrapper>
      <Text theme="stockTableTextTitle">{infoName}</Text>
      <Text theme="stockTableTextContent">{data}</Text>
    </Wrapper>
  );
};

export default StockListItem;
