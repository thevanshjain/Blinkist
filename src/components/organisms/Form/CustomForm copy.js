import React, { useState } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { data } from "../../../booksData";
import CustomButton from "../../atoms/Button/CustomButton";
import CustomInput from "../../atoms/Input/CustomInput";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import "./CustomForm.css";


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function CustomForm({ openForm, closeForm }) {
  const classes = useStyles();
  const [inputField, setInputField] = useState({
    url: "",
    name: "",
    author: "",
    readingTime: "",
    totalReads: "",
    category: "",

  });

  const inputsHandler = (e) => {
    setInputField({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    const book = {
      url: inputField.url,
      name: inputField.name,
      author: inputField.author,
      readingTime: inputField.readingTime,
      totalReads: inputField.totalReads,
      category: inputField.category

    };
    data.push(book);
    console.log(data);
  };

  return (
    <>
      {/* <CustomButton value="Add Book" click={handleOpen} displayType="block"/> */}
      <Dialog
        open={openForm}
        onClose={closeForm}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Book</DialogTitle>
        <DialogContent>
          <form>
            <CustomInput
              change={inputsHandler}
              placeholder="Image Url"
              value={inputField.url}
              type="url"
            />
            <br />
            <CustomInput
              change={inputsHandler}
              placeholder="Book Name"
              value={inputField.name}
              type="text"
            />
            <br />
            <CustomInput
              change={inputsHandler}
              placeholder="Author"
              value={inputField.author}
              type="text"
            />
            <br />
            <CustomInput
              change={inputsHandler}
              placeholder="Reading Time"
              value={inputField.readingTime}
              type="number"
            />
            <br />
            <CustomInput
              change={inputsHandler}
              placeholder="Total Reads"
              value={inputField.totalReads}
              type="text"
            />
            <br />
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={inputField.category}
                onChange={handleSubmit}
              >
                <MenuItem value={"Education"}>Education</MenuItem>
                <MenuItem value={"Nature"}>Nature</MenuItem>
                <MenuItem value={"Religion"}>Religion</MenuItem>
                <MenuItem value={"Money"}>Money</MenuItem>
                <MenuItem value={"Motivation"}>Motivation</MenuItem>
                <MenuItem value={"Biography"}>Biography</MenuItem>
              </Select>
            </FormControl>
            
          </form>
        </DialogContent>
        <CustomButton value="Cancel" click={closeForm} color="secondary" />
            <CustomButton value="Submit" click={handleSubmit} color="primary" />
      </Dialog>
    </>
  );
}
