import { Link } from "react-router-dom";
import { InfoCategory } from "../../index";

import { Container } from "./styled";

import category1 from "../../../assets/images/categoryImg1.svg";
import category2 from "../../../assets/images/categoryImg2.svg";
import category3 from "../../../assets/images/categoryImg3.svg";

const CategoryBundle = ({ selected }) => {
  return (
    <Container>
      <Link to="/basicknowledge">
        <InfoCategory
          src={category1}
          selected={selected === "basicknowledge" ? "selected" : ""}
        >
          기초 지식
        </InfoCategory>
      </Link>
      <Link to="/pressrelease">
        <InfoCategory
          src={category2}
          selected={selected === "pressrelease" ? "selected" : ""}
        >
          보도 자료
        </InfoCategory>
      </Link>
      <Link to="/stockitem">
        <InfoCategory
          src={category3}
          selected={selected === "stockitem" ? "selected" : ""}
        >
          종목 정보
        </InfoCategory>
      </Link>
    </Container>
  );
};

export default CategoryBundle;
