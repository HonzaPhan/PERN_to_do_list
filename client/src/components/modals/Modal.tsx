import {
  Box,
  Button,
  FormControl,
  Input,
  Slider,
  Typography,
} from "@mui/material";
import "./ModalStyles.css";
import { useState } from "react";

const Modal = () => {
  const mode = "create";
  const editMode = mode === "edit" ? true : false;

  const [data, setData] = useState({
    user_email: "",
    title: "",
    progress: 0,
    date: editMode ? "" : new Date(),
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setData((data) => ({
      ...data,
      [name]: value,
    }));

    console.log(data);
    
  };

  return (
    <Box className="overlay">
      <Box className="modal">
        <Box className="form-title-container">
          <Typography component="h3">Let's {mode} your task.</Typography>
          <Button color="error">X</Button>
        </Box>

        <FormControl
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Input
            onChange={handleChange}
            required
            value={""}
            placeholder="Your task goes here"
            name="title"
            fullWidth
          />
          <Slider
            defaultValue={50}
            aria-label="Default"
            valueLabelDisplay="auto"
            name="progress"
            onChange={handleChange}
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Modal;
