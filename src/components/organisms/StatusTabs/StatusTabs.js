import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import BookCard from "../../molecules/Card/BookCard";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      // id={`full-width-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tabpanel-${index}`,
    "aria-controls": `simple-tab-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    color: "green",
    textColor: "green",
    textDecorationColor: "green",
    width: 680,
  },
}));

export default function StatusTabs({ search, explorerStatus }) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [searchValueCurrent, setSearchValueCurrent] = useState();
  const [searchValueFinish, setSearchValueFinish] = useState();

  const [current, setCurrent] = useState(null);
  const [finished, setFinished] = useState(null);

  const abortError = (err) => {
    if (err.name === "AbortError") {
      console.log("Fetch Aborted");
    }
  };
  useEffect(() => {
    const abortController = new AbortController();

    fetch("http://localhost:8008/current", { signal: abortController.signal })
      .then((res) => res.json())
      .then((data) => setCurrent(data))
      .catch((err) => {
        abortError(err);
      });
    fetch("http://localhost:8008/finish", { signal: abortController.signal })
      .then((res) => res.json())
      .then((data) => setFinished(data))
      .catch((err) => {
        abortError(err);
      });

    return () => abortController.abort();
  }, []);

  useEffect(() => {
    if (
      explorerStatus !== null &&
      current !== null &&
      explorerStatus.data !== undefined &&
      current !== undefined
    ) {
      fetch("http://localhost:8008/current", {
        method: "POST",
        body: JSON.stringify(explorerStatus.data),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }, [explorerStatus, current]);

  React.useEffect(() => {
    if (search !== null && current && finished) {
   
      const booksFoundCurrent = current.filter(
        (item) =>
          item.author.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
          item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );
      setSearchValueCurrent(booksFoundCurrent);

      const booksFoundFinished = finished.filter(
        (item) =>
          item.author.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
          item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );

      setSearchValueFinish(booksFoundFinished);
    }
  }, [search, current, finished]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const changeStatus = (data, status) => {
    if (
      status === "reading" &&
      current !== null &&
      data !== null &&
      current !== undefined &&
      finished !== undefined
    ) {
      const pos = current.indexOf(data);

      fetch("http://localhost:8008/finish", {
        method: "POST",
        body: JSON.stringify(current[pos]),
        headers: {
          "Content-Type": "application/json",
        },
      });
      fetch(`http://localhost:8008/current/${data.id}`, {
        method: "DELETE",
      });

      window.location.reload();
    } else if (
      finished !== null &&
      data !== null &&
      current !== undefined &&
      finished !== undefined
    ) {
      const pos = finished.indexOf(data);
      fetch("http://localhost:8008/current", {
        method: "POST",
        body: JSON.stringify(finished[pos]),
        headers: {
          "Content-Type": "application/json",
        },
      });
      fetch(`http://localhost:8008/finish/${data.id}`, {
        method: "DELETE",
      });

      window.location.reload();
    }
  };

  const statusBookCard = (data, status, currentStatus) => {
    return (
      <BookCard
        id={data.id}
        author={data.author}
        name={data.name}
        readingTime={data.readingTime}
        totalReads={data.totalReads}
        url={data.url}
        status={status}
        category={data.category}
        changeStatus={() => changeStatus(data, currentStatus)}
      />
    );
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="default"
        style={{ background: "none", boxShadow: "none", color: "green" }}
        data-testid="cardInStatus"
      >
        <Tabs
          value={value}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#22C870",
              color: "#22C870",
            },
          }}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="standard"
        >
          <Tab
            style={{ color: "black", textTransform: "none" }}
            label="Currently Reading"
            {...a11yProps(0)}
          />
          <Tab
            style={{ color: "black", textTransform: "none" }}
            label="Finished"
            {...a11yProps(1)}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {current &&
          current !== undefined &&
          search != null &&
          searchValueCurrent !== undefined &&
          searchValueCurrent != null 
            ? searchValueCurrent.map((data) => {
                return statusBookCard(data, "Finished Reading", "reading");
              })
            : current &&
              current !== undefined &&
              current.map((data) => {
                <span data-testid={`status-${data.id}`}></span>;
                return statusBookCard(data, "Finished Reading", "reading");
              })}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {/* {finished.length === 0 || */}
          {finished &&
          finished !== undefined &&
          search !== null &&
          searchValueFinish != null &&
          searchValueFinish !== undefined
            ? searchValueFinish.map((data) => {
                return statusBookCard(data, "Read again", "finish");
              })
            : finished &&
              finished !== undefined &&
              finished.map((data) => {
                return statusBookCard(data, "Read again", "finish");
              })}
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
