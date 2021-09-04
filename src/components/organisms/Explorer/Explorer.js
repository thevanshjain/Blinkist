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

  const [entrepreneurship, setEntrepreneurship] = useState(null);
  const [nature, setNature] = useState(null);
  const [religion, setReligion] = useState(null);
  const [money, setMoney] = useState(null);
  const [motivation, setMotivation] = useState(null);
  const [biography, setBiography] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    fetch("http://localhost:8008/entrepreneurship", {
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((data) => setEntrepreneurship(data))
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch Aborted");
        }
      });
    fetch("http://localhost:8008/nature", { signal: abortController.signal })
      .then((res) => res.json())
      .then((data) => setNature(data))
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch Aborted");
        }
      });
    fetch("http://localhost:8008/religion", { signal: abortController.signal })
      .then((res) => res.json())
      .then((data) => setReligion(data))
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch Aborted");
        }
      });
    fetch("http://localhost:8008/money", { signal: abortController.signal })
      .then((res) => res.json())
      .then((data) => setMoney(data))
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch Aborted");
        }
      });
    fetch("http://localhost:8008/motivation", {
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((data) => setMotivation(data))
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch Aborted");
        }
      });

    fetch("http://localhost:8008/biography", { signal: abortController.signal })
      .then((res) => res.json())
      .then((data) => setBiography(data))
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch Aborted");
        }
      });

    return () => abortController.abort();
  }, []);

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
    // else exploredValue(null);
  };

  useEffect(() => {
    if (addBook !== null) {
      //  console.log(`http://localhost:8008/${addBook.category.toLowerCase()}`);

      fetch(`http://localhost:8008/${addBook.category.toLowerCase()}`, {
        method: "POST", // or 'PUT'https://example.com/profile
        body: JSON.stringify(addBook),
        headers: {
          "Content-Type": "application/json",
        },
      });
      window.location.reload();
    }
  }, [addBook]);

  useEffect(() => {
    if (explorerStatus !== null && explorerStatus !== undefined) {
      const { category, data } = explorerStatus;
      data.status = "Already in Library";
      fetch("http://localhost:8008/current", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      fetch(`http://localhost:8008/${category.toLowerCase()}/${data.id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      //  window.location.reload();
    }
  }, [
    explorerStatus,
    entrepreneurship,
    nature,
    religion,
    motivation,
    money,
    biography,
  ]);

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
