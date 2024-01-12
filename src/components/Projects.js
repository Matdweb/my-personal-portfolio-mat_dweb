import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// import images projects
import postresLecker from "../assets/img/postres-lecker-img.jpg";
import supermercado from "../assets/img/supermercado-base-datos.jpg";
import saturday from "../assets/img/saturday-com.jpg";
import AppRutina from "../assets/img/app-rutina-ejercicios.jpg";
import Jammign from '../assets/img/Jamming-main-page.jpg';
import Twitter from '../assets/img/Twitter-clone-main-page.jpg';
// import images ReactComponents
import OptionsMenu from "../assets/img/OptionsMenu.jpg"
import BitcoinCards from "../assets/img/BitcoinCards.jpg"
import VGPage from "../assets/img/VGPage.jpg";
import CreditCard from '../assets/img/credit-card-img.jpg'
// import images templates
import Template1 from "../assets/img/company-template-img.jpg"
import Template2 from "../assets/img/aria-img.jpg"
import Template3 from "../assets/img/above-img.jpg"
import Template4 from "../assets/img/casino-img.jpg"
import Template5 from "../assets/img/app-builder-portfolio-img.jpg"
import Template6 from "../assets/img/photographer-img.jpg"

export const Projects = () => {

  const projects = [
    {
      title: "Jamming",
      description: "Create custome playlist for your Spotify",
      imgUrl: Jammign,
      URL: "https://jamming-sooty.vercel.app/",
    },
    {
      title: "Twitter Clone",
      description: "A clone of the Twitter social media app",
      imgUrl: Twitter,
      URL: "https://twitter-clone-matdweb.vercel.app/",
    },
    {
      title: "Postres Lecker",
      description: "Baking Entrepreneurship",
      imgUrl: postresLecker,
      URL: "https://postres-lecker.netlify.app",
    }, {
      title: "Supermarket",
      description: "Database administrator",
      imgUrl: supermercado,
      URL: "https://base-datos-manager-supermercado.netlify.app/",
    }, {
      title: "Saturday.com",
      description: "Tasks manager",
      imgUrl: saturday,
      URL: "https://saturday-com.netlify.app",
    }, {
      title: "Exercise Routine App",
      description: "Administrates your exercise routine",
      imgUrl: AppRutina,
      URL: "https://app-rutina-ejercicios.netlify.app",
    },
    {
      title: "Options Menu",
      description: "React options menu banner minimalistic",
      imgUrl: OptionsMenu,
      URL: "https://options-banner-minimalistic-react.netlify.app/",
    }, {
      title: "Bitcoin Cards",
      description: "Bitcoin React cards template",
      imgUrl: BitcoinCards,
      URL: "https://bitcoin-cards-react.netlify.app/",
    }, {
      title: "Video games landing page",
      description: "React landing page template",
      imgUrl: VGPage,
      URL: "https://video-games-landing-page-react.netlify.app/",
    }, {
      title: "Credit-Card-Component",
      description: "React Credit Card Component",
      imgUrl: CreditCard,
      URL: "https://credit-card-react-component.netlify.app",
    },
  ];

  const templates = [
    {
      title: "Portfolio Template",
      description: "Design company",
      imgUrl: Template1,
      URL: "https://plantillashtmlgratis.com/wp-content/themes/helium-child/vista_previa/page275/the7/",
    }, {
      title: "Business Template",
      description: "Business or service",
      imgUrl: Template2,
      URL: "https://plantillashtmlgratis.com/wp-content/themes/helium-child/vista_previa/page259/aria/",
    }, {
      title: "Designer",
      description: "Graphic Desinger Portfolio",
      imgUrl: Template3,
      URL: "https://plantillashtmlgratis.com/wp-content/themes/helium-child/vista_previa/page263/above/",
    }, {
      title: "Casino",
      description: "Casino website Template",
      imgUrl: Template4,
      URL: "https://plantillashtmlgratis.com/wp-content/themes/helium-child/vista_previa/page262/deno/",
    }, {
      title: "App developer website",
      description: "App developer personal website template",
      imgUrl: Template5,
      URL: "https://plantillashtmlgratis.com/wp-content/themes/helium-child/vista_previa/page222/tork/",
    }, {
      title: "Photographer",
      description: "Photographer personal website Template",
      imgUrl: Template6,
      URL: "https://plantillashtmlgratis.com/wp-content/themes/helium-child/vista_previa/page255/girly/",
    }
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Here you could see different projects I've build. Some of my experience and how I've use the tecnologies I've learn in different cases. The programming paradimes I've work with and more ...</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Portfolio</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Your Template</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <p>Take a look to some of the projects I've completed</p>
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>¡Here are some ideas you could consider for your own website!</p>
                        <Row>
                          {
                            templates.map((template, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...template}
                                />
                              )
                            })
                          }
                        </Row>
                        <a style={{ textDecoration: "none", color: "#fff" }}
                          href="https://plantillashtmlgratis.com/categoria-plantillas/plantillas-html/">Templates taken from PlantillasHTMLGratis</a>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
