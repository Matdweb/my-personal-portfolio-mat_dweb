import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import {SkillsContext} from "../context/SkillsContext"
//Images importation
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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: "70%",
  bgcolor: '#1C1C1C',
  boxShadow: 24,
  p: 4,
  borderRadius: "15px",
  outline: "2px solid #aaaa"
}

export function BasicModal() {

  const context = useContext(SkillsContext)
  const skills = [HTML,WebD,CSS,JS,react,Design,MUI,VITEJS,FIGMA,CHAKRA]
  return (
    <div>
      <Modal
        open={context.open}
        onClose={context.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={window.screen.width < 510 ? {width: "320px"} : {width: "500px"}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Skills Percentaje
          </Typography>
          <div className='modal-skills'>
              {skills.map((skill,index)=>{
                return (
                  <div key={index}>
                    <img src={skill}/>
                  </div>
                )
              })}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
