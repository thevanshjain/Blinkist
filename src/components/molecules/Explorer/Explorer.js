import React, { useState } from "react";
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

function Explorer() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isExploreToggle, setIsExploreToggle] = useState(false);
  const [explorerValue, setExplorerValue] = useState(null);

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
    setExplorerValue(event);
  };
  
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
            <Grid item xs={4} >
              <StyledMenuItem onClick={()=>handleExplore("education")} >
                <FontAwesomeIcon icon={faGraduationCap} />
                <BarButton value="Education" />
              </StyledMenuItem>
            </Grid>
            <Grid item xs={4}>
              <StyledMenuItem onClick={()=>handleExplore("nature")} >
                <FontAwesomeIcon icon={faLeaf} />
                <BarButton value="Nature" />
              </StyledMenuItem>
            </Grid>

            <Grid item xs={4}>
              <StyledMenuItem onClick={()=>handleExplore("religion")}>
                <FontAwesomeIcon icon={faPrayingHands} />
                <BarButton value="Religion" />
              </StyledMenuItem>
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={4}>
              <StyledMenuItem onClick={()=>handleExplore("money")}>
                <FontAwesomeIcon icon={faPiggyBank} />
                <BarButton value="Money & Investment" />
              </StyledMenuItem>
            </Grid>
            <Grid item xs={4}>
              <StyledMenuItem onClick={()=>handleExplore("motivation")}>
                <FontAwesomeIcon icon={faLightbulb} />
                <BarButton value="Motivation" />
              </StyledMenuItem>
            </Grid>
            <Grid item xs={4}>
              <StyledMenuItem onClick={()=>handleExplore("biography")}>
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