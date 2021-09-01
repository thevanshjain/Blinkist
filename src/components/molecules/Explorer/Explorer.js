import React, { useState, useEffect } from "react";
import BarButton from "../../atoms/Button/BarButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faLeaf,
  faPrayingHands,
  faPiggyBank,
  faLightbulb,
  faPenFancy,
  
} from "@fortawesome/free-solid-svg-icons";
import Grid from "@material-ui/core/Grid";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    width: "100%",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

function Explorer({ exploredValue, addBook, explorerStatus }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isExploreToggle, setIsExploreToggle] = useState(false);

  const [entrepreneurship, setEntrepreneurship] = useState([
    {
      url:
        "https://images.blinkist.io/images/books/611fc7fe6cee070007cf6a57/1_1/470.jpg",
      name: "The Entrepreneur's Weekly Nietzsche",
      author: "Dave Jilk and Brad Feld",
      readingTime: "12",
      totalReads: "7.1k",
      category: "Entrepreneurship",
      status:"Add to library"
    },
    {
      url: "https://images.blinkist.io/images/books/60fe5b446cee0700070a51c1/1_1/470.jpg",
      name: "How to Take Smart Notes",
      author: "Sönke Ahrens",
      readingTime: "15",
      totalReads: "17.1k",
      category: "Entrepreneurship",
      status: "Already in Library"
    },
    {
      url:
        "https://images.blinkist.io/images/books/61162f886cee070007535b4d/1_1/470.jpg",
      name: "The Common Path to Uncommon Success",
      author: "John Lee Dumas",
      readingTime: "15",
      totalReads: "7.1k",
      category: "Entrepreneurship",
      status:"Add to library"
    },
  ]);

  const [nature, setNature] = useState([
    {
      url:
        "https://images.blinkist.io/images/books/611fc0e96cee070007060334/1_1/470.jpg",
      name: "This Is Your Mind on Plants",
      author: "Michael Pollan",
      readingTime: "13",
      totalReads: "8k",
      category: "Nature",
      status:"Add to library"
    },
    {
      url:
        "https://images.blinkist.io/images/books/61162f886cee070007535b4d/1_1/470.jpg",
      name: "Finding the Mother Tree",
      author: "Suzanne Simard",
      readingTime: "16",
      totalReads: "10k",
      category: "Nature",
      status:"Add to library"
    },
  ]);

  const [religion, setReligion] = useState([
    {
      url:
        "https://images.blinkist.io/images/books/60d58ddb6cee0700074ab74b/1_1/470.jpg",
      name: "What Would You Do If You Weren't Afraid?",
      author: "Michal Oshman",
      readingTime: "10",
      totalReads: "6k",
      category: "Religion",
      status:"Add to library"
    },
    {
      url:
        "https://images.blinkist.io/images/books/61162f886cee070007535b4d/1_1/470.jpg",
      name: "Winning the War in Your Mind",
      author: "Craig Groeschel",
      readingTime: "13",
      totalReads: "8k",
      category: "Religion",
      status:"Add to library"
    },
  ]);

  const [money, setMoney] = useState([
    {
      url:
        "https://images.blinkist.io/images/books/60d58ddb6cee0700074ab74b/1_1/470.jpg",
      name: "The Price You Pay for College",
      author: "Ron Lieber",
      readingTime: "12",
      totalReads: "7k",
      category: "Money",
      status:"Add to library"
    },
    {
      url:
        "https://images.blinkist.io/images/books/604b2d436cee070007937971/1_1/470.jpg",
      name: "Know Yourself, Know Your Money",
      author: "Rachel Cruze",
      readingTime: "16",
      totalReads: "10k",
      category: "Money",
      status:"Add to library"
    },
    {
      url:
        "https://images.blinkist.io/images/books/60c346ca6cee070007f8b08c/1_1/470.jpg",
      name: "Make Money Trading Options",
      author: "Michael Sincere",
      readingTime: "30",
      totalReads: "1.1k",
      category: "Money",
      status: "Already in Library"
    },
  ]);

  const [motivation, setMotivation] = useState([
    {
      url:
        "https://images.blinkist.io/images/books/60ffb6176cee070007f2f766/1_1/470.jpg",
      name: "The Power of Giving Away Power",
      author: "Matthew Barzun",
      readingTime: "12",
      totalReads: "7k",
      category: "Motivation",
      status:"Add to library"
    },
    {
      url:
        "https://images.blinkist.io/images/books/60f14b996cee0700071a5fed/1_1/470.jpg",
      name: "How to enjoy you life and your job",
      author: "Rachel Cruze",
      readingTime: "15",
      totalReads: "9",
      category: "Motivation",
      status:"Add to library"
    },
  ]);

  const [biography, setBiography] = useState([
    {
      url:
        "https://images.blinkist.io/images/books/60ddd90c6cee070007f2cac8/1_1/470.jpg",
      name: "You Are Your Best Thing",
      author: "Tarana Burke and Brené Brown",
      readingTime: "18",
      totalReads: "11k",
      category: "Biography",
      status:"Add to library"
    },
    {
      url:
        "https://images.blinkist.io/images/books/60f14b996cee0700071a5fed/1_1/470.jpg",
      name: "A Year in the Life of William Shakespeare",
      author: "James Shapiro",
      readingTime: "13",
      totalReads: "8k",
      category: "Biography",
      status:"Add to library"
    },
    {
      url:
        "https://images.blinkist.io/images/books/61290aa96cee070007d29076/1_1/470.jpg",
      name: "Bedtime Biography: Madame Curie",
      author: "Eve Curie",
      readingTime: "25",
      totalReads: "57.1k",
      category: "Biography",
      status: "Already in Library"
    },
  ]);

  const handleClick = (event) => {
    setIsExploreToggle(!isExploreToggle);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsExploreToggle(!isExploreToggle);
  };

  const handleExplore = (event) => {
    handleClose();
    // exploredValue(event);

    if (event === "entrepreneurship") exploredValue(entrepreneurship);
    else if (event === "nature") exploredValue(nature);
    else if (event === "religion") exploredValue(religion);
    else if (event === "motivation") exploredValue(motivation);
    else if (event === "money") exploredValue(money);
    else if (event === "biography") exploredValue(biography);
    else exploredValue(null);
  };


  useEffect(() => {
    if(addBook!==null){
    if(addBook.category.toLowerCase()==="entrepreneurship")
      setEntrepreneurship((prev)=>[...prev, addBook]);
    else if(addBook.category.toLowerCase()==="nature")
      setNature((prev)=>[...prev, addBook]);
     else if(addBook.category.toLowerCase()==="religion")
      setReligion((prev)=>[...prev, addBook]);
    else if(addBook.category.toLowerCase()==="money")
      setMoney((prev)=>[...prev, addBook]);
    else if(addBook.category.toLowerCase()==="motivation")
      setMotivation((prev)=>[...prev, addBook]);
    else if(addBook.category.toLowerCase()==="biography")
      setBiography((prev)=>[...prev, addBook]);
    }
  }, [addBook])

  useEffect(() => {
    if(explorerStatus!==null && explorerStatus!==undefined){
    const {category, data} =explorerStatus;
    if(category.toLowerCase() === "entrepreneurship"){
        const index=entrepreneurship.indexOf(data);
        entrepreneurship[index].status="Already in Library";
       
    }
    else  if(category.toLowerCase() === "nature"){
      
      const index=nature.indexOf(data);
      nature[index].status="Already in Library";
    }
    else if(category.toLowerCase() === "religion"){
      
      const index=religion.indexOf(data);
      religion[index].status="Already in Library";
    }
    else if(category.toLowerCase() === "money"){
      
      const index=money.indexOf(data);
      money[index].status="Already in Library";
    }
    else if(category.toLowerCase() === "motivation"){
      
      const index=motivation.indexOf(data);
      motivation[index].status="Already in Library";
    }
    else if(category.toLowerCase() === "biography"){
      const index=biography.indexOf(data);
      biography[index].status="Already in Library";
    }

    }
  }, [explorerStatus, entrepreneurship, nature, religion, motivation, money, biography])

  return (
    <>
      <BarButton
        value="Explore"
        endIcon={!isExploreToggle ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        click={handleClick}
        ariaControls="customized-menu"
      />

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Grid container spacing={1} style={{ overflow: "hidden" }}>
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={4}>
              <StyledMenuItem onClick={() => handleExplore("entrepreneurship")}>
                <FontAwesomeIcon icon={faGraduationCap} />
                <BarButton value="Entrepreneurship" />
              </StyledMenuItem>
            </Grid>
            <Grid item xs={4}>
              <StyledMenuItem onClick={() => handleExplore("nature")}>
                <FontAwesomeIcon icon={faLeaf} />
                <BarButton value="Nature" />
              </StyledMenuItem>
            </Grid>

            <Grid item xs={4}>
              <StyledMenuItem onClick={() => handleExplore("religion")}>
                <FontAwesomeIcon icon={faPrayingHands} />
                <BarButton value="Religion" />
              </StyledMenuItem>
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={4}>
              <StyledMenuItem onClick={() => handleExplore("money")}>
                <FontAwesomeIcon icon={faPiggyBank} />
                <BarButton value="Money & Investment" />
              </StyledMenuItem>
            </Grid>
            <Grid item xs={4}>
              <StyledMenuItem onClick={() => handleExplore("motivation")}>
                <FontAwesomeIcon icon={faLightbulb} />
                <BarButton value="Motivation" />
              </StyledMenuItem>
            </Grid>
            <Grid item xs={4}>
              <StyledMenuItem onClick={() => handleExplore("biography")}>
                <FontAwesomeIcon icon={faPenFancy} />
                <BarButton value="Biography" />
              </StyledMenuItem>
            </Grid>
          </Grid>
        </Grid>
      </StyledMenu>
    </>
  );
}

export default Explorer;
