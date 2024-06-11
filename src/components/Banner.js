import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { FaArrowAltCircleDown } from "react-icons/fa";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Software Engineer", "Full Stack Developer", "UI/UX Designer"];
  const period = 100;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(period);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Mat_dweb portfolio</span>
                  <h1>{`Hi👋🏼 I'm Matias `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Engineer", "Full Stack Developer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>
                    Self-taught Software Engineer 💻 specializing in front-end ⚛️ with over 2 years of experience👨🏻‍💻. Quickly adapts to new challenges📝, successfully leading projects ✅ ensuring seamless user experiences😎. Enjoys collaborating with cross-functional teams and providing technical support 🖥️ while excelling in independent work. Eager to find projects that foster growth and leverage front-end or full-stack skills to drive innovative web solutions 🌐
                  </p>
                  <a style={{
                    color: "#fff", textDecoration: "none",
                    border: "3px solid #fff", width: "280px",
                    padding: "12px", borderRadius: "15px"
                  }}
                    href="https://docs.google.com/document/d/1PckdC8EEMkfvezuqsIj0ef9eitBIbXVR/edit?usp=sharing&ouid=108989009178056531735&rtpof=true&sd=true">Download Resume<FaArrowAltCircleDown /></a>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
