import React, { useEffect } from "react";
import { useContext, useState, useRef } from "react";
import "react-multi-carousel/lib/styles.css";
import { SkillsContext } from "../context/SkillsContext";
import colorSharp from "../assets/img/color-sharp.png";
import { BasicModal } from "./Skills-modal";
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
  const [carouselPosition, setCarouselPosition] = useState(1);
  const endCarousel = 2970;  //total size of the half row of elements

  const requestRef = useRef();
  const previousTimeRef = useRef();

  const loopCarousel = time => {
    const deltaTime = time - previousTimeRef.current || 1;

    setCarouselPosition(prevCount => {
      return Math.round((prevCount + (deltaTime * 0.1) + 2) % endCarousel);
    });
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(loopCarousel);
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(loopCarousel);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

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
              <section
                className="carousel-container"
                style={{
                  transform: `translateX(-${carouselPosition}px)`
                }}
              >
                {skills.concat(skills).map(({ Icon, text }, index) => {
                  return (
                    <div
                      key={index}
                      onClick={context.handleOpen}
                      className="item-skill"
                    >
                      <Icon width="150" heigth="150" />
                      <h5>{text}</h5>
                    </div>
                  );
                })}
              </section>
            </div>
          </div>
        </div>
      </div>
      <BasicModal />
      <img className="background-image-left" src={colorSharp} alt="Purple Space as Background" />
    </section>
  );
};
