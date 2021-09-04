import React from "react";
import { Button } from "@material-ui/core";

const LogoutButton = ({click}) => {
  

  return (
    <Button
      style={{ textTransform: "none" }}
      onClick={click}
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
