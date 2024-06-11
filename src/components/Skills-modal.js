import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useContext } from "react";
import { SkillsContext } from "../context/SkillsContext";
//Images importation
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

const style = {
  position: "absolute",
  displey: 'flex',
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "70%",
  bgcolor: "#1C1C1C",
  boxShadow: 24,
  p: 4,
  borderRadius: "15px",
  outline: "2px solid #aaaa",
};

export function BasicModal() {
  const context = useContext(SkillsContext);
  const skills = [
    HtmlIcon,
    CSSIcon,
    JavascriptIcon,
    TypescriptIcon,
    ReactIcon,
    ViteIcon,
    NextJSIcon,
    ReduxIcon,
    TailwindCSSIcon,
    ExpressIcon,
    MongoDBIcon,
    FigmaIcon,
    AdobeXDIcon,
    JavaIcon,
    PythonIcon,
  ];
  return (
    <div>
      <Modal
        open={context.open}
        onClose={context.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          style={
            window.screen.width < 510 ? { width: "320px" } : { width: "500px" }
          }
        >
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: 'flex', justifyContent: 'center', fontSize: '30px', fontWeight: 'bold' }}>
            Skillset
          </Typography>
          <div className="modal-skills">
            {skills.map((Skill, index) => {
              return (
                <div key={index}>
                  <Skill width="110" heigth="110" />
                </div>
              );
            })}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
