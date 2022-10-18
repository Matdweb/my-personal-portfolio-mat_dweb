import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import {SkillsContext} from "../context/SkillsContext"
//Images importation
import HTML from "../assets/img/HTML-graf.png";
import CSS from "../assets/img/CSS-graf.png";
import JS from "../assets/img/JS-graf.png";
import react from "../assets/img/React-graf.png";
import Design from "../assets/img/Design-graf.png";
import MUI from "../assets/img/MUI-graf.png"; 

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: "70%",
  bgcolor: '#151515',
  boxShadow: 24,
  p: 4,
  borderRadius: "15px",
  outline: "2px solid #aaaa"
}

export function BasicModal() {

  const context = useContext(SkillsContext)

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
              <div>
              <img src={HTML}/>
              </div>
              <div>
              <img src={CSS}/>
              </div>
              <div>
              <img src={JS}/>
              </div>
              <div>
              <img src={react}/>
              </div>
              <div>
              <img src={Design}/>
              </div>
              <div>
              <img src={MUI}/>
              </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
