import { useNavigate } from "react-router-dom";
import { HeaderContainer, Row, Col1, Col2, Option } from "./header.styles";
import "./a.css";

export default function HeaderHomepage() {
  let navigate = useNavigate();
  return (
    <HeaderContainer>
      <Row>
        <Col1></Col1>
        <Col2>
          <Option
            onClick={() => {
              navigate("/swap");
            }}
          >
            swap{" "}
          </Option>
          <Option
            onClick={() => {
              navigate("/getter");
            }}
          >
            getter
          </Option>
          <Option
            onClick={() => {
              navigate("/about");
            }}
          >
            marketplace
          </Option>
        </Col2>
      </Row>
    </HeaderContainer>
  );
}
