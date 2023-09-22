import React, { useRef, useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { Description, Title } from "@mui/icons-material";
import { Box, Button, FormControl, IconButton, Snackbar } from "@mui/material";
// import { noteOperations } from '../services/note-operation';
import { MuiColorInput } from "mui-color-input";

import { Note } from "../models/note";
import { addNote } from "../redux/note-slice";
import { useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import FormDatePicker from "../../../shared/components/FormDatePicker";

const AddNote = (props) => {
  const [colorValue, setColorValue] = useState("#ffffff");
  // const [message, setMessage] = useState('')
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {};
  const id = useRef();
  const title = useRef();
  const desc = useRef();
  const dispatch = useDispatch();
  const add = () => {
    const idValue = id.current.value;
    const titleValue = title.current.value;
    const descValue = desc.current.value;

    // const noteObject={"id":idValue,"title":titleValue,"desc":descValue}
    // const noteObject=noteOperations.addNote(idValue,titleValue,descValue,'','')
    // noteOperations.addNote(idValue,titleValue,descValue,date,colorValue)
    // console.log('color is',colorValue)
    // props.fn()
    const noteObject = new Note(idValue, titleValue, descValue, colorValue);

    dispatch(addNote(noteObject));
    setOpen(true);
    // setMessage("Record added...")
    // setTimeout(() => {
    //   setMessage('')
    // }, 2000);
  };

  return (
    <>
      <Box
        sx={{
          margin: 5,
          flexDirection: "column",
          display: "flex",
        }}
      >
        {/* <Typography>
      {message}
      </Typography> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              message="Note added"
              action={action}
            />
            <TextField
              id="note-id"
              label="Note Id"
              {...register("id")}
              // inputRef={id}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Description />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
            <TextField
              id="note-title"
              label="Title"
              {...register("title", { required: true, minLength: 3 })}
              // inputRef={title}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Title />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
            {errors.title && errors.title.type === "required" && (
              <p style={{ color: "red" }}>*Title is required</p>
            )}
            {errors.title && errors.title.type === "minLength" && (
              <p style={{ color: "red" }}>*Min length is 3</p>
            )}
            <TextField
              id="note-desc"
              label="Description"
              // inputRef={desc}
              {...register("desc", {
                validate: {
                  checkLength: (value) => value.length >= 6,
                },
              })}
              multiline
              maxRows={4}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Title />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
            {errors.desc?.type==='checkLength' && (<p style={{color:'red'}}>Min length for description is:6</p>)}
            <FormDatePicker
              name="cdate"
              {...register("cdate")}
              control={control}
            />
            {/* <input type='date'/>
        <input type='color'/> */}
            <MuiColorInput
              {...register("color")}
              value={colorValue}
              onChange={(SelectedColor) => setColorValue(SelectedColor)}
            />
            <Button type="submit" variant="contained" color="warning">
              Add Note
            </Button>
          </FormControl>
        </form>
      </Box>
    </>
  );
};

export default AddNote;
