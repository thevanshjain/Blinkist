import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";

import { makeStyles } from '@material-ui/core/styles';
import DialogContent from "@material-ui/core/DialogContent";

import CustomButton from "../../atoms/Button/CustomButton";
import CustomInput from "../../atoms/Input/CustomInput";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import "./CustomForm.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: 25,
    // minWidth: 120,
  },
  selectEmpty: {
    // marginTop: theme.spacing(2),
  },
}));

const CustomForm = ({ openForm, closeForm }) => {
  const classes = useStyles();
  return(
  <div>
    <Dialog
      open={openForm}
      onClose={closeForm}
      aria-labelledby="form-dialog-title"
      
    >
      <DialogTitle id="form-dialog-title">Add Book <span onClick={closeForm} style={{float: "right", cursor:"pointer"}}>X</span></DialogTitle>
      
      <DialogContent>
        {/* <Formik
         
          onSubmit={() => {
            alert("Hello");
          }}
        >
          {({ isSubmitting }) => ( */}
            <form>
              <label >Url<br/>
              <CustomInput type="url" />
              </label>
              <br/>
              <label className="formlabel">Book Name<br/>
              <CustomInput type="text" style={{borderColor: "green"}}/>
              </label>
              <br/>
              <br/>
              <label className="formlabel">Author<br/>
              <CustomInput type="text" />
              </label>

              <br/>
              <label className="formlabel" >Total Reads<br/>
              <CustomInput type="number" />
              </label>
              <br/>
              <label className="formlabel" >Reading Time<br/>
              <CustomInput type="number" />
              </label>

              <br/>
              <label> Category
              <FormControl variant="outlined"  className={classes.formControl}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select-outlined"
                // value={inputField.category}
                // onChange={handleSubmit}

                style={{marginLeft:"-66px", width: "235px", height: "40px"}}
              >
                <MenuItem value={"Education"}>Education</MenuItem>
                <MenuItem value={"Nature"}>Nature</MenuItem>
                <MenuItem value={"Religion"}>Religion</MenuItem>
                <MenuItem value={"Money"}>Money</MenuItem>
                <MenuItem value={"Motivation"}>Motivation</MenuItem>
                <MenuItem value={"Biography"}>Biography</MenuItem>
              </Select>
            </FormControl>
            </label>
            <br/>
            <div style={{float: "right", marginTop: "5px"}}>
             <CustomButton type="submit" value="Submit" />
             </div>
            </form>
          {/* )} */}
        {/* </Formik> */}
      </DialogContent>
    </Dialog>
  </div>
)};

export default CustomForm;
