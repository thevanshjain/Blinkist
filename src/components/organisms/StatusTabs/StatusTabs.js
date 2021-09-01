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
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    color: "green",
    textColor: "green",
    textDecorationColor:"green",
    width: 680,
  },
}));

export default function StatusTabs({ search, explorerStatus}) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [searchValueCurrent, setSearchValueCurrent] = useState();
  const [searchValueFinish, setSearchValueFinish] = useState();

  const [current, setCurrent] = useState([
    {
      url: "https://images.blinkist.io/images/books/60fe5b446cee0700070a51c1/1_1/470.jpg",
      name: "How to Take Smart Notes",
      author: "Sönke Ahrens",
      readingTime: "15",
      totalReads: "17.1k",
      category: "Entrepreneurship",
    },
    {
      url:
        "https://images.blinkist.io/images/books/61290aa96cee070007d29076/1_1/470.jpg",
      name: "Bedtime Biography: Madame Curie",
      author: "Eve Curie",
      readingTime: "25",
      totalReads: "57.1k",
      category: "Biography",
    },
  ]);

  const [finished, setFinished] = useState([
    {
      url:
        "https://images.blinkist.io/images/books/60c346ca6cee070007f8b08c/1_1/470.jpg",
      name: "Make Money Trading Options",
      author: "Michael Sincere",
      readingTime: "30",
      totalReads: "1.1k",
      category: "Money",
    },
  ]);

useEffect(() => {
  if(explorerStatus!==null)
  setCurrent(prev=>[...prev, explorerStatus.data])
 
}, [explorerStatus])

  // React.useEffect(() => {
  //   if (explore !== null) {
  //     const booksFoundCurrent = current.filter(
  //       (item) => item.category.toLowerCase() === explore.toLowerCase()
  //     );
  //     const booksFoundFinished = finished.filter(
  //       (item) => item.category.toLowerCase() === explore.toLowerCase()
  //     );
  //     setExploreValueCurrent(booksFoundCurrent.length);
  //     setExploreValueFinish(booksFoundFinished.length);

  //   }
  // }, [explore, current, finished]);

  React.useEffect(() => {
    if (search !== null) {
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

  // React.useEffect(() => {
  //   if (newBook !== null) {
  //     current.push(newBook);
  //   }
  // }, [newBook]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const changeStatus = (url, status) => {
    if (status === "reading") {
      const pos = current
        .map(function (e) {
          return e.url;
        })
        .indexOf(url);
      setFinished((prev) => [...prev, current[pos]]);
      current.splice(pos, 1);
      setCurrent(current);
    } else {
      const pos = finished
        .map(function (e) {
          return e.url;
        })
        .indexOf(url);
      setCurrent((prev) => [...prev, finished[pos]]);
      finished.splice(pos, 1);
      setFinished(finished);
    }
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="default"
        style={{ background: "none", boxShadow: "none", color: "green" }}
      >
        <Tabs
          value={value}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#22C870",
              color: "#22C870"
            },
          }}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab
            style={{ color:"black", textTransform: "none", width: "286.33px" }}
            label="Currently Reading"
            {...a11yProps(0)}
          />
          <Tab
            style={{ color:"black", textTransform: "none" }}
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
          {/* {current.length === 0 || */}
          {search!==null && searchValueCurrent !== undefined && searchValueCurrent!==null ? (
            searchValueCurrent.map((data) => {
              return (
                <BookCard
                  author={data.author}
                  name={data.name}
                  readingTime={data.readingTime}
                  totalReads={data.totalReads}
                  url={data.url}
                  status="Finished Reading"
                  category={data.category}
                  changeStatus={() => changeStatus(data.url, "reading")}
                />
              );
            })
          ) : (
            current.map((data) => {
              return (
                <BookCard
                  author={data.author}
                  name={data.name}
                  readingTime={data.readingTime}
                  totalReads={data.totalReads}
                  url={data.url}
                  status="Finished Reading"
                  category={data.category}
                  changeStatus={() => changeStatus(data.url, "reading")}
                />
              );
            })
          )}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {/* {finished.length === 0 || */}
          {search!==null && searchValueFinish!== undefined && searchValueFinish!==null ? (
              searchValueFinish.map((data) => {
                return (
                  <BookCard
                    author={data.author}
                    name={data.name}
                    readingTime={data.readingTime}
                    totalReads={data.totalReads}
                    url={data.url}
                    status="Read again"
                    category={data.category}
                    changeStatus={() => changeStatus(data.url, "finish")}
                  />
                )})
          ) : (
            finished.map((data) => {
              return (
                <BookCard
                  author={data.author}
                  name={data.name}
                  readingTime={data.readingTime}
                  totalReads={data.totalReads}
                  url={data.url}
                  status="Read again"
                  category={data.category}
                  changeStatus={() => changeStatus(data.url, "finish")}
                />
              );
            })
          )}
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
