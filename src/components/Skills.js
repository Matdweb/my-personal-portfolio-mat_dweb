import HTML from "../assets/img/html-5.png";
import WebD from "../assets/img/Web Developer_Monochromatic.svg";
import CSS from "../assets/img/css-3.png";
import JS from "../assets/img/js.png";
import react from "../assets/img/react-logo.svg";
import Design from "../assets/img/layers.png";
import MUI from "../assets/img/material-ui-1.svg";
import VITEJS from "../assets/img/vitejs.svg";
import FIGMA from '../assets/img/figma-logo.svg'
import CHAKRA from '../assets/img/icons8-chakra-ui.svg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png"
import React from "react";
import { useContext } from 'react';
import { SkillsContext } from "../context/SkillsContext"
import { BasicModal } from "./Skills-modal"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skills = [
    { img: HTML, text: 'HTML' },
    { img: CSS, text: 'CSS' },
    { img: JS, text: 'JavaScript' },
    { img: react, text: 'React JS' },
    { img: Design, text: 'UI Design' },
    { img: MUI, text: 'Material UI' },
    { img: CHAKRA, text: 'Chakra UI' },
    { img: VITEJS, text: 'Vite.js' },
    { img: FIGMA, text: 'Figma' }
  ]

  const context = useContext(SkillsContext)

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn" >
              <h2>Skills</h2>
              <p>Here are some of the technologies I used for building websites. <br /> ¡Cilck them to know more!</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {skills.map((skill, index) => {
                  return (
                    <div
                      key={index}
                      onClick={context.handleOpen} className="item">
                      <img src={skill.img} alt="Image" />
                      <h5>{skill.text}</h5>
                    </div>
                  )
                })}
              </Carousel>
            </div>
          </div>
          <a href="https://www.flaticon.es/iconos-gratis/css" title="css iconos">Css iconos creados por Pixel perfect - Flaticon</a>
          <a target="_blank" href="https://icons8.com">Chakra UI icon by Icons8</a>
        </div>
      </div>
      <BasicModal />
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
