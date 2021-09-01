import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import "./BookCard.css";
import CustomButton from "../../atoms/Button/CustomButton";


const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
  media: {
    height: "200px",
  },
});

export default function BookCard({
  url,
  name,
  author,
  readingTime,
  totalReads,
  status,
  category,
  changeStatus,
  disabled
}) {
  const classes = useStyles();

  

  return (
    <>
      <div key={url} className="bookCard">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={url} title="Book" />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="h4"
                style={{ textAlign: "left", fontSize: "15px" }}
                fontWeight="fontWeightBold"
              >
                {name.length > 18? name.substring(0, 40) + "..." : name}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                style={{ textAlign: "left", fontSize: "10px" }}
              >
                {author.length > 20 ? author.substring(0, 20) + "..." : author}
              </Typography>
              <br/>
              <Typography
                variant="caption"
                color="textSecondary"
                fontWeight="fontWeightBold"
              >
                {category}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <AccessTimeIcon style={{ fontSize: "16px" }} />
            <Typography
              variant="caption"
              display="block"
              style={{ fontSize: "8px" }}
              gutterBottom
            >
              {readingTime}-minute read
            </Typography>
            <PersonOutlineIcon style={{ fontSize: "16px" }} />
            <Typography
              variant="caption"
              display="block"
              style={{ fontSize: "8px" }}
              gutterBottom
            >
              {totalReads} reads
            </Typography>
          </CardActions>

          {status!=='Already in Library' ?
          <>
          <hr />
          <CustomButton value={status} variant="contained" disabled={disabled} click={changeStatus} style={{width: "100%"}}/> 
            </>
          :
          <></>
           }
        </Card>
       
      </div>
    </>
  );
}
