import { Button } from '@material-ui/core'
import React from 'react'
import {
    makeStyles
  } from "@material-ui/core/styles";
  
  const useStyles = makeStyles({
    button: {
      textTransform: "none"
    }
  });
  

  
function BarButton({value, click, endIcon, ariaControls}) {
    const classes = useStyles();
    return (
        <Button className={classes.button}  onClick={click} endIcon={endIcon} aria-controls={ariaControls}>{value}</Button>
    )
}

export default BarButton
