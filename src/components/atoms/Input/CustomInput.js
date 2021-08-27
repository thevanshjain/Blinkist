import React from 'react'
import { TextField } from '@material-ui/core';



function CustomInput({change, placeholder, value, type}) {
    return (
        <TextField className="inputField" label={placeholder}  onChange={change} value={value} variant="outlined" margin="dense" type={type}/>
    )
}

export default CustomInput
