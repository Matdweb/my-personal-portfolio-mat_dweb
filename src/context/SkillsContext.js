import React from 'react';
import {createContext} from 'react'
 
export const SkillsContext = createContext()
 
export function SkillsContextProvider(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <SkillsContext.Provider value = {{open, handleOpen, handleClose}}>
        {props.children}
    </SkillsContext.Provider>
  )
}
