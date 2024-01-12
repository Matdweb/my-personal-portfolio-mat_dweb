import { Container, Row, Col } from "react-bootstrap";
import { WhatsApp } from "./WhatsApp";
import logo from '../assets/img/MAT_DWEB-LOGO.PNG';
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container style={{paddingBottom: "40px"}}>
        <Row className="align-items-center">
          <WhatsApp />
          <Col size={12} sm={6}>
            <img src={logo} style={window.screen.width < 600 ? {marginLeft: "120px", transform: "scale(4)"} : {transform: "scale(3)"}} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.instagram.com/mat.dweb/"> <FaInstagram style={{color: "#fff", textDecoration: "none"}} /></a>
              <a href="https://twitter.com/MatDweb"><FaTwitter style={{color: "#fff", textDecoration: "none"}}/></a>
              <a href="https://github.com/Matdweb"><FaGithub style={{color: "#fff", textDecoration: "none"}}/></a>
            </div>
            <p>©2022 MAT_DWEB - All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
