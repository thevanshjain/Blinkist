import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";

import { makeStyles } from "@material-ui/core/styles";
import DialogContent from "@material-ui/core/DialogContent";

import CustomButton from "../../atoms/Button/CustomButton";
import CustomInput from "../../atoms/Input/CustomInput";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import "./CustomForm.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: 25,
  },
}));

const CustomForm = ({ openForm, closeForm, formData }) => {
  const classes = useStyles();

  const [url, setUrl] = React.useState("");
  const [name, setName] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [readingTime, setReadingTime] = React.useState("");
  const [totalReads, setTotalReads] = React.useState("");
  const [category, setCategory] = React.useState("");

  const handleUrl = (event) => {
    setUrl(event.target.value);
  };
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleAuthor = (event) => {
    setAuthor(event.target.value);
  };
  const handleReadingTime = (event) => {
    setReadingTime(event.target.value);
  };
  const handleTotalReads = (event) => {
    setTotalReads(event.target.value);
  };
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };



  const handleSubmit = (e) => {
    const book = {
      url: url,
      name: name,
      author: author,
      readingTime: readingTime,
      totalReads: totalReads,
      category: category,
      status: "Add to Library",
      id: Math.random(),
    };
    formData(book);
    closeForm();
    setAuthor("");
    setCategory("");
    setName("");
    setReadingTime("");
    setTotalReads("");
    setUrl("");
    e.preventDefault();
  };
  return (
    <div>
      <Dialog
        open={openForm}
        onClose={closeForm}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Add Book{" "}
          <span
            onClick={closeForm}
            style={{ float: "right", cursor: "pointer" }}
          >
            X
          </span>
        </DialogTitle>

        <DialogContent>
          <form>
            <label>
              Url
              <br />
              <CustomInput
                type="url"
                name="url"
                value={url}
                change={handleUrl}
              />
            </label>
            <br />
            <label className="formlabel">
              Book Name
              <br />
              <CustomInput
                type="text"
                name="name"
                style={{ borderColor: "green" }}
                value={name}
                change={handleName}
              />
            </label>
            <br />
            <label className="formlabel">
              Author
              <br />
              <CustomInput
                type="text"
                name="author"
                value={author}
                change={handleAuthor}
              />
            </label>

            <br />
            <label className="formlabel">
              Total Reads
              <br />
              <CustomInput
                type="number"
                name="totalReads"
                value={totalReads}
                change={handleTotalReads}
              />
            </label>
            <br />
            <label className="formlabel">
              Reading Time
              <br />
              <CustomInput
                type="number"
                name="readingTime"
                value={readingTime}
                change={handleReadingTime}
              />
            </label>

            <br />
            <label>
            
              Category
              <FormControl variant="outlined" className={classes.formControl}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select-outlined"
                  value={category}
                  name="category"
                  onChange={handleCategory}
                  style={{
                    marginLeft: "-66px",
                    width: "220px",
                    height: "40px",
                  }}
                >
                  <MenuItem value={"Entrepreneurship"} data-testid="Entrepreneurship">
                    Entrepreneurship
                  </MenuItem>
                  <MenuItem value={"Nature"}>Nature</MenuItem>
                  <MenuItem value={"Religion"}>Religion</MenuItem>
                  <MenuItem value={"Money"}>Money</MenuItem>
                  <MenuItem value={"Motivation"}>Motivation</MenuItem>
                  <MenuItem value={"Biography"}>Biography</MenuItem>
                </Select>
              </FormControl>
            </label>
            <br />
            <div style={{ float: "right", marginTop: "5px" }}>
              <CustomButton type="submit" value="Submit" click={handleSubmit} />
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CustomForm;
