import React from "react";
import { TextField } from "@material-ui/core";
import "./CustomInput.css";

function CustomInput({
  style,
  change,
  name,
  placeholder,
  value,
  type,
  variant = "outlined",
}) {
  return (
    <TextField
      style={ style}
      name={name}
      className="inputField"
      // label={placeholder}
      placeholder={placeholder}
      onChange={change}
      value={value}
      variant={variant}
      margin="dense"
      type={type}
    />
  );
}

export default CustomInput;
