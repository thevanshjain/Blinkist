import React from 'react'
import Button from "@material-ui/core/Button";  


export default function CustomButton({click, value,color}) {
    return (
        <Button variant="contained" color={color} onClick={click}>
        {value}
      </Button>
    )
}
