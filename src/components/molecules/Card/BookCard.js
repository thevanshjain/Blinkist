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
import { data } from "../../../booksData";
import './BookCard.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
  media: {
    height: 140,
  },
});

export default function BookCard() {
  const classes = useStyles();

  return (
    <>
      {data.map((data) => {
        return (
          <div key={data.url} className="bookCard">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={data.url}
                  title="Book"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h4"
                    style={{ textAlign: "left", fontSize: "15px" }}
                    fontWeight="fontWeightBold"
                  >
                    {data.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{ textAlign: "left", fontSize: "10px" }}
                  >
                    {data.author}
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
                  {data.readingTime}-minute read
                </Typography>
                <PersonOutlineIcon style={{ fontSize: "16px" }} />
                <Typography
                  variant="caption"
                  display="block"
                  style={{ fontSize: "8px" }}
                  gutterBottom
                >
                  {data.totalReads} reads
                </Typography>
              </CardActions>
              <Typography
                variant="caption"
                display="block"
                gutterBottom
                fontWeight="fontWeightBold"
                style={{
                  textAlign: "right",
                  fontSize: "20px",
                  marginRight: "5px",
                }}
              >
                ...
              </Typography>
            </Card>
          </div>
        );
      })}
    </>
  );
}
