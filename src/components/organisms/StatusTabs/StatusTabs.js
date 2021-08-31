
import React , {useState} from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
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
        <Box p={3}>
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
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    color: "black", 
    width: 500,
  },
}));

export default function StatusTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);



  const[current, setCurrent] = useState([
    {
      
      "url":"https://images.unsplash.com/photo-1615665598671-053520c11811?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGJvb2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "name":"Building an Inclusive Organization",
      "author":"Stephen Frost, Raafi-Karim...",
      "readingTime":"15",
      "totalReads":"17.1k",
      "category": "Education",
    },
    {
      "url":"https://images.unsplash.com/photo-1517148892120-4d2da39c8dc1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGJvb2tzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "name":"Building an Inclusive Organization",
      "author":"Stephen Frost, Raafi-Karim...",
      "readingTime":"15",
      "totalReads":"17.1k",
      "category": "Motivation",
    },
  ]);

  const [finished, setFinished ] =useState([
    {
      "url":"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "name":"Building an Exclusive Organization",
      "author":"Stephen Frost, Raafi-Karim...",
      "readingTime":"30",
      "totalReads":"1.1k",
      "category": "Motivation",
    }
  ]);



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const changeStatus = (url,status) => {
    if(status==='reading'){
      const pos=current.map(function(e) { return e.url; }).indexOf(url);
      setFinished(prev => [...prev, current[pos]]);
      current.splice(pos,1);
      setCurrent(current);
  }
  else
  {
    const pos=finished.map(function(e) { return e.url; }).indexOf(url);
    setCurrent(prev => [...prev, finished[pos]]);
    finished.splice(pos,1);
    setFinished(finished);
  }
}

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" style={{ background: "none", boxShadow: "none", color:"green" }}>
        <Tabs
          value={value}
          TabIndicatorProps={{
            style: {
              backgroundColor: "green",
              color: "green"
            }
          }}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          
        >
          <Tab style={{color: "black"}} label="Currently Reading" {...a11yProps(0)} />
          <Tab style={{color: "black"}} label="Finished" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        {current.length===0 ? <h4>Not reading!!</h4> : current.map((data) => {
        return (
          <BookCard
            author={data.author}
            name={data.name}
            readingTime={data.readingTime}
            totalReads={data.totalReads}
            url={data.url}
            status="Finished Reading"
            category={data.category}
            changeStatus={()=>changeStatus(data.url,"reading")}
          />
        );
      })}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        {finished.length===0 ? <h4>Not finished reading !!</h4> :finished.map((data) => {
        return (
          <BookCard
            author={data.author}
            name={data.name}
            readingTime={data.readingTime}
            totalReads={data.totalReads}
            url={data.url}
            status="Read again"
            category={data.category}
            changeStatus={()=>changeStatus(data.url,"finish")}
          />
        );
      })}
        </TabPanel>
      </SwipeableViews>
    </div>
  );
} 