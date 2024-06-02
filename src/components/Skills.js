import React from "react";
import { useContext } from "react";
import "react-multi-carousel/lib/styles.css";
import { SkillsContext } from "../context/SkillsContext";
import colorSharp from "../assets/img/color-sharp.png";
import { BasicModal } from "./Skills-modal";
import Carousel from "react-multi-carousel";
import {
  AdobeXDIcon,
  CSSIcon,
  ExpressIcon,
  FigmaIcon,
  HtmlIcon,
  JavaIcon,
  JavascriptIcon,
  MongoDBIcon,
  NextJSIcon,
  PythonIcon,
  ReactIcon,
  ReduxIcon,
  TailwindCSSIcon,
  TypescriptIcon,
  ViteIcon,
} from "../assets/icons/Icons";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skills = [
    { Icon: HtmlIcon, text: "HTML" },
    { Icon: CSSIcon, text: "CSS" },
    { Icon: JavascriptIcon, text: "JavaScript" },
    { Icon: TypescriptIcon, text: "TypeScript" },
    { Icon: ReactIcon, text: "React JS" },
    { Icon: ViteIcon, text: "Vite.js" },
    { Icon: NextJSIcon, text: "Next.js" },
    { Icon: ReduxIcon, text: "Redux" },
    { Icon: TailwindCSSIcon, text: "TailwindCSS" },
    { Icon: ExpressIcon, text: "Express js" },
    { Icon: MongoDBIcon, text: "mongo db" },
    { Icon: FigmaIcon, text: "Figma" },
    { Icon: AdobeXDIcon, text: "Adobe XD" },
    { Icon: JavaIcon, text: "Java" },
    { Icon: PythonIcon, text: "Phyton" },
  ];

  const context = useContext(SkillsContext);

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Here are some of the technologies I used for building websites.{" "}
                <br /> ¡Cilck them to know more!
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {skills.map(({ Icon, text }, index) => {
                  return (
                    <div
                      key={index}
                      onClick={context.handleOpen}
                      className="item"
                    >
                      <Icon width="150" heigth="150" />
                      <h5>{text}</h5>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <BasicModal />
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
