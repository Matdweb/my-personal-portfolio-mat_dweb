import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import { SkillsContext } from "../context/SkillsContext"
//Images importation
import HTML from "../assets/img/html-5.png";
import CSS from "../assets/img/css-3.png";
import JS from "../assets/img/js.png";
import REACT from "../assets/img/react-logo.svg";
import DESING_UI from "../assets/img/layers.png";
import VITEJS from "../assets/img/vitejs.svg";
import FIGMA from '../assets/img/figma-logo.svg';
import TYPESCRIPT from '../assets/img/icons8-typescript-240.png'
import EXPRESS from '../assets/img/icons8-express-js-250.png'
import JAVA from '../assets/img/icons8-java.svg'
import MONGODB from '../assets/img/icons8-mongodb.svg'
import NEXTJS from '../assets/img/icons8-nextjs-240.png'
import PHYTON from '../assets/img/icons8-python.svg'
import REDUX from '../assets/img/icons8-redux.svg'

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
  const skills = [HTML, CSS, JS, TYPESCRIPT, REACT, VITEJS, NEXTJS, REDUX, EXPRESS, MONGODB, FIGMA, DESING_UI, JAVA, PHYTON]
  return (
    <div>
      <Modal
        open={context.open}
        onClose={context.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={window.screen.width < 510 ? { width: "320px" } : { width: "500px" }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Skillset
          </Typography>
          <div className='modal-skills'>
            {skills.map((skill, index) => {
              return (
                <div key={index}>
                  <img src={skill} />
                </div>
              )
            })}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
