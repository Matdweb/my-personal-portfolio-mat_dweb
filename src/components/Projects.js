import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import postresLecker from "../assets/img/postres-lecker-img.jpg";
import supermercado from "../assets/img/supermercado-base-datos.jpg";
import saturday from "../assets/img/saturday-com.jpg";
import AppRutina from "../assets/img/app-rutina-ejercicios.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Postres Lecker",
      description: "Baking Entrepreneurship",
      imgUrl: postresLecker,
      URL: "https://postres-lecker.netlify.app",
      app: false
    },{
      title: "Supermarket",
      description: "Database administrator",
      imgUrl: supermercado,
      URL: "https://base-datos-manager-supermercado.netlify.app/",
      app: true
    },{
      title: "Saturday.com",
      description: "Tasks manager",
      imgUrl: saturday,
      URL: "https://saturday-com.netlify.app",
      app: true
    },{
      title: "Exercise Routine App",
      description: "Administrates your exercise routine",
      imgUrl: AppRutina,
      URL: "https://app-rutina-ejercicios.netlify.app",
      app: true
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Portfolio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Just Apps</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Your Template</Nav.Link>
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
                    <p>This are just the web applications I've developt</p>
                    <Row>
                        {
                          projects.map((project, index) => {
                            if(project.app){
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            }
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>¡Here are some ideas you could consider for your own website!</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
