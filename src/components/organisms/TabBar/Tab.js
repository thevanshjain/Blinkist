import React, { useState, useEffect } from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import Image from "../../atoms/Image/Image";
import img from "../../atoms/Image/Image.png";
import SearchLogo from "../../atoms/Search/SearchLogo";
import CustomForm from "../Form/CustomForm";
import Explorer from "../Explorer/Explorer";
import BarButton from "../../atoms/Button/BarButton";
import CustomInput from "../../atoms/Input/CustomInput";
import LoginButton from "../../atoms/Button/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../../atoms/Button/LogoutButton";
import "./Tab.css";
import StatusTabs from "../StatusTabs/StatusTabs";

import BookCard from "../../molecules/Card/BookCard";
import AvatarOnBar from "../../atoms/Avatar/Avatar";
import Header from "../../atoms/Header/Header";

function Tab() {
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const {isAuthenticated, logout , loginWithRedirect, user} = useAuth0();
  const [exploredValue, setExploredValue] = useState(null);
  const [searchedValue, setSearchedValue] = useState(null);
  const [newBook, setNewBook] = useState(null);
  const [toggleLibrary, setToggleLibrary] = useState(true);
  const [explorerStatus, setExplorerStatus] = useState(null);

  const handleOpen = () => {
    setOpenForm(true);
  };
  const handleClose = () => {
    setOpenForm(false);
  };

  const toggleSearch = () => {
    setOpenSearchBar(!openSearchBar);
  };

  const explorerValue = (value) => {
    setExploredValue(value);
    setToggleLibrary(false);
  };

  const searchValue = (event) => {
    setSearchedValue(event.target.value);
  };
  const manipulateForm = (data) => {
    setNewBook(data);
  };

  const changeStatus = (category, data) => {
    setExplorerStatus({ category: category, data: data });
  };

  const myLibrary = () => {
    setToggleLibrary(true);
  };
  useEffect(() => {}, [newBook, exploredValue]);
  return (
    <>
      <div
        style={{
          float: "right",
          color: "black",
          marginTop: "13px",
          marginRight: "150px",
        }}
      >
        {isAuthenticated ? (
          <h4 style={{ display: "inline" }}>
            <AvatarOnBar user={user}/>
            <span className="logOutButton">
              <LogoutButton click={()=>logout({returnTo: window.location.origin})}/>
            </span>
          </h4>
        ) : (
          <LoginButton click={()=>loginWithRedirect()}/>
        )}
      </div>
      <AppBar
        position="static"
        style={{ background: "none", boxShadow: "none", display: "inline" }}
      >
        <Toolbar>
          <Image src={img} alt="logo" />
          <SearchLogo onClick={() => toggleSearch()} />
          {!openSearchBar && (
            <>
              {isAuthenticated ? <Explorer
                addBook={newBook}
                exploredValue={(value) => explorerValue(value)}
                explorerStatus={explorerStatus}
              /> :<></>}
              
              <BarButton value="My Library" click={myLibrary} />
              {isAuthenticated ? <BarButton value="Add Book" click={handleOpen} /> : <></>}
              <CustomForm
                openForm={openForm}
                closeForm={handleClose}
                formData={(data) => manipulateForm(data)}
              />
            </>
          )}
          {openSearchBar && (
            <CustomInput
              variant="standard"
              placeholder="Search"
              change={(value) => searchValue(value)}
              style={{width:"40%"}}
            />
          )}
        </Toolbar>
      </AppBar>

      {toggleLibrary ? (
        <>
          <h5 style={{ marginTop: "50px", marginLeft: "30px" }}>
            <Header heading="My Library"/>
          </h5>
          <div style={{ marginTop: "40px", marginLeft: "30px" }}>
            <StatusTabs
              search={searchedValue}
              explorerStatus={explorerStatus}
            />
          </div>
        </>
      ) : (
        <>
          {exploredValue !== null ? (
            <>
              <div style={{ marginTop: "50px", marginLeft: "30px" }}>
                <Header heading={exploredValue[0].category}/>
              </div>
              <div style={{ marginTop: "40px", marginLeft: "30px"}}>
                {exploredValue.map((data) => {
                  if (data.status === "Already in Library")
                    return (
                      <BookCard
                        author={data.author}
                        name={data.name}
                        readingTime={data.readingTime}
                        totalReads={data.totalReads}
                        url={data.url}
                        status={data.status}
                        category={data.category}
                        disabled="disabled"
                      />
                    );
                  else
                    return (
                      <BookCard
                        author={data.author}
                        name={data.name}
                        readingTime={data.readingTime}
                        totalReads={data.totalReads}
                        url={data.url}
                        status={data.status}
                        category={data.category}
                        changeStatus={() => changeStatus(data.category, data)}
                      />
                    );
                })}
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
}

export default Tab;
