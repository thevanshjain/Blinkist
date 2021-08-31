import React from 'react'
import { TextField } from '@material-ui/core';
import './CustomInput.css';


function CustomInput({style, change, placeholder, value, type, variant="outlined"}) {
    return (
        <TextField style={{style}} className="inputField" label={placeholder}  onChange={change} value={value} variant={variant} margin="dense" type={type}/>
    )
}

export default CustomInput
