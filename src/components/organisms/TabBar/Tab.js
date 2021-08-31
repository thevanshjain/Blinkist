import React, { useState } from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import Image from "../../atoms/Image/Image";
import img from "../../atoms/Image/Image.png";
import SearchLogo from "../../atoms/Search/SearchLogo";
import CustomForm from "../Form/CustomForm";
import Explorer from "../../molecules/Explorer/Explorer";
import BarButton from "../../atoms/Button/BarButton";
import CustomInput from "../../atoms/Input/CustomInput";
import LoginButton from "../../atoms/Button/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../../atoms/Button/LogoutButton";


function Tab() {
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const { user, isAuthenticated} = useAuth0();

  const handleOpen = () => {
    setOpenForm(true);
  };
  const handleClose = () => {
    setOpenForm(false);
  };

  const toggleSearch = () => {
      setOpenSearchBar(!openSearchBar);
    };
    
    return (
        <>
        <div style={{ float: "right", color: "black", marginTop: "15px"}}>
            {isAuthenticated ? <h4 style={{display: "inline"}}>{user.name}   <LogoutButton /></h4>  :  <LoginButton />}
            
        </div>
      <AppBar
        position="static"
        style={{ background: "none", boxShadow: "none" , display: "inline"}}
      >
        <Toolbar>
          <Image src={img} alt="logo" />
          <SearchLogo onClick={() => toggleSearch()} />
          {!openSearchBar && (
            <>
              <Explorer />
              <BarButton value="My Library" />
              <BarButton value="Add Book" click={handleOpen} />
              <CustomForm openForm={openForm} closeForm={handleClose} />
            </>
          )}
          {openSearchBar && (
              <CustomInput
              variant="standard"
              placeholder="Search "
            
                />
              )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Tab;
