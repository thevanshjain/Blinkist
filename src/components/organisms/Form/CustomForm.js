import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { data } from "../../../booksData";
import CustomButton from "../../atoms/Button/CustomButton";
import CustomInput from "../../atoms/Input/CustomInput";

export default function CustomForm() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [inputField, setInputField] = useState({
    url: "",
    name: "",
    author: "",
    readingTime: "",
    totalReads: "",
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
    };
    data.push(book);

    e.preventDefault();
    setOpen(false);
  };

  return (
    <>
      <CustomButton value="Add Book" click={handleOpen} color="" />
      <Dialog
        open={open}
        onClose={handleClose}
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
              type="text"
            />
            <br />
            <CustomInput
              change={inputsHandler}
              placeholder="Total Reads"
              value={inputField.totalReads}
              type="text"
            />
            <br />
            <CustomButton
              value="Cancel"
              click={handleClose}
              color="secondary"
            />
            <CustomButton value="Submit" click={handleSubmit} color="primary" />
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
