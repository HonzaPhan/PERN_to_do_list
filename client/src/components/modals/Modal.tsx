import {
  Box,
  Button,
  FormControl,
  Input,
  Slider,
  Typography,
} from "@mui/material";
import "./ModalStyles.css";
import { ChangeEvent, useState } from "react";
import { IHandleSliderChange, IModalProps } from "../../helpers/Types";
import axios from "axios";
import { API_URL } from "../api/ToDoAPI";
import { useCookies } from "react-cookie";

const ModalTask = ({ mode, setShowModal, fetchData, task }: IModalProps) => {
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const editMode = mode === "edit" ? true : false;

  const [data, setData] = useState({
    user_email: editMode ? task!.user_email: cookies.Email,
    title: editMode ? task!.title : null,
    progress: editMode ? task!.progress : 50,
    date: editMode ? task!.createdAt : new Date(),
  });

  const postData = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = axios({
        method: "POST",
        url: `${API_URL}/todos/`,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(data),
      })
      if ((await response).status === 200) {
        setShowModal(false);
        fetchData()
      }  
    } catch (error) {
      console.log(error);
    }
  }

  const editData = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = axios({
        method: "PUT",
        url: `${API_URL}/todos/${task!.id}/`,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(data),
      })
      if ((await response).status === 200) {
        setShowModal(false);
        fetchData()
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSliderChange: IHandleSliderChange = (e, newValue) => {
    if (typeof newValue === "number") {
      const name = "progress";
      const value = newValue.toString();
      handleChange({
        target: { name, value },
      } as ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <Box className="overlay">
      <Box className="modal">
        <Box className="form-title-container">
          <Typography component="h3" variant="h5" sx={{ alignSelf: "center" }}>
            Let's {mode} your task.
          </Typography>
          <Button
            color="error"
            onClick={() => setShowModal && setShowModal(false)}
            sx={{
              position: "absolute",
              top: "0px",
              right: "0px",
              transform: "translate(35px, -30px)",
            }}
          >
            X
          </Button>
        </Box>

        <FormControl
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "2rem",
            paddingTop: "2rem",
          }}
        >
          <Input
            onChange={handleChange}
            required
            value={data.title}
            placeholder="Your task goes here"
            name="title"
            fullWidth
          />
          <Typography component="p">
            Drag to select you current progress
          </Typography>
          <Slider
            defaultValue={50}
            aria-label="Default"
            valueLabelDisplay="auto"
            name="progress"
            onChange={handleSliderChange}
            value={data.progress}
          />
          <Button variant="contained" color="primary" type="submit" onClick={editMode ? editData : postData}>
            Submit
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};

export default ModalTask;
