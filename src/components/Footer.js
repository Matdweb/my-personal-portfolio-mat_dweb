import { Container, Row, Col } from "react-bootstrap";
import { WhatsApp } from "./WhatsApp";
import logo from '../assets/img/MAT_DWEB-LOGO.PNG';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container style={{paddingBottom: "40px"}}>
        <Row className="align-items-center">
          <WhatsApp />
          <Col size={12} sm={6}>
            <img src={logo} style={window.screen.width < 600 ? {marginLeft: "140px", transform: "scale(4)"} : {transform: "scale(3)"}} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright ©2022. MAT_DWEB <br /> All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
