import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

export default function AvatarOnBar({user}) {

  const classes = useStyles();
 
  return (
    <div className={classes.root} style={{ display: "inline-flex" }}>
      <div style={{display:"none"}}>Avatar</div>
      <Avatar className={classes.small}>
        {user === undefined || user.given_name === undefined
          ? "B" 
          : user.given_name.charAt(0)}
      </Avatar>
    </div>
  );
}
