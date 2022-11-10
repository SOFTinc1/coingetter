import { useNavigate } from "react-router-dom";
import {
  FooterContainer,
  Row,
  Col1,
  Logo,
  Col2
} from "./footer.styles";
import LogoImg from "../../assets/svg/logo.png";

export default function Footer() {
  let navigate = useNavigate();
  return (
    <FooterContainer>
      <Row>
        <Col1>
          <Logo src={LogoImg} />
        </Col1>
        <Col2>FB.&#10230;</Col2>
        <Col2>LK.&#10230;</Col2>
        <Col2>IN.&#10230;</Col2>
        <Col2>TW.&#10230;</Col2>
      </Row>
    </FooterContainer>
  );
}

// onClick={() => {
//     navigate("/");
//   }}
