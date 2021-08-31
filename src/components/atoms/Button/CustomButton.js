import React from 'react'
import Button from "@material-ui/core/Button";  
import {
  makeStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    textTransform: "none"
  }
});


export default function CustomButton({style, type, disabled, variant="contained", click, value,color, displayType}) {
  const classes = useStyles();
    return (
        <Button type={type} className={classes.button} disabled={disabled} variant={variant} color={color} onClick={click} style={{display: displayType, ...style}}>
        {value}
      </Button>
    )
}
