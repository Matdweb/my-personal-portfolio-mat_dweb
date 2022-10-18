import HTML from "../assets/img/html-5.png";
import WebD from "../assets/img/Web Developer_Monochromatic.svg";
import CSS from "../assets/img/css-3.png";
import JS from "../assets/img/js.png";
import react from "../assets/img/react-logo.svg";
import Design from "../assets/img/layers.png";
import MUI from "../assets/img/material-ui-1.svg";
import VITELG from "../assets/img/vitejs.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import React from "react";
import { useContext } from 'react';
import {SkillsContext} from "../context/SkillsContext"
import { BasicModal } from "./Skills-modal"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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

  const context = useContext(SkillsContext)

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn" >
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div onClick={context.handleOpen} className="item">
                                <img src={WebD} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div onClick={context.handleOpen} className="item">
                                <img src={HTML} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div onClick={context.handleOpen} className="item">
                                <img src={CSS} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div onClick={context.handleOpen} className="item">
                                <img src={JS} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div onClick={context.handleOpen} className="item">
                                <img src={react} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div onClick={context.handleOpen} className="item">
                                <img src={Design} alt="Image" />
                                <h5>UI Design</h5>
                            </div>
                            <div onClick={context.handleOpen} className="item">
                                <img src={MUI} alt="Image" />
                                <h5>Material UI</h5>
                            </div>
                            <div onClick={context.handleOpen} className="item">
                                <img src={VITELG} alt="Image" />
                                <h5>Vite.js</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
                <a style={{color: "white", fontSize: "10px", textDecoration: "none", marginLeft: "40px"}} href="https://www.flaticon.es/iconos-gratis/css" title="css iconos">Css iconos creados por Pixel perfect - Flaticon</a>
            </div>
        </div>
        <BasicModal />
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
