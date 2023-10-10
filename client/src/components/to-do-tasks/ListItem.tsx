import { Box, Button, Typography } from "@mui/material";
import { IModalProps } from "../../helpers/Types";
import TickIcon from "../icon/TickIcon";
import ProgressBar from "../progress-bar/ProgressBar";
import "./ListItemStyles.css";
import { useState } from "react";
import ModalTask from "../modals/Modal";
import axios from "axios";
import { API_URL } from "../api/ToDoAPI";

const ListItem = ({ task, fetchData }: IModalProps) => {
  const [showModal, setShowModal] = useState(false);
  
  const deleteItem = async () => {
    try {
      const response = await axios({
        method: "DELETE",
        url: `${API_URL}/todos/${task!.id}/`,
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (response.status === 200) {
        fetchData()
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box className="list-item">
      <Box className="info-container">
        <TickIcon />
        <Typography component="p" className="task-title">{task?.title}</Typography>
        <ProgressBar />
      </Box>

      <Box className="button-container">
        <Button variant="contained" color="secondary" onClick={() => setShowModal(true)}>EDIT</Button>
        <Button variant="contained" color="error" onClick={deleteItem}>DELETE</Button>
      </Box>
      {showModal && <ModalTask mode={`edit`} setShowModal={setShowModal} fetchData={fetchData} task={task!}/>}
    </Box>
  );
};

export default ListItem;
