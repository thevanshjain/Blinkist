import React from "react";
import { Button } from "@material-ui/core";

const LoginButton = ({click}) => {

  return (
    <Button
      onClick={click}
      style={{ textTransform: "none" }}
    >
      Log In
    </Button>
  );
};

export default LoginButton;
