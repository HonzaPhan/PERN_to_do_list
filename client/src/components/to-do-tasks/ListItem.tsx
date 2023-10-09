import { Button } from "@mui/material";
import { IListItemProps } from "../../helpers/Types";
import TickIcon from "../icon/TickIcon";
import ProgressBar from "../progress-bar/ProgressBar";
import "./ListItemStyles.css";

const ListItem = ({ task }: IListItemProps) => {
  return (
    <div className="list-item">
      <div className="info-container">
        <TickIcon />
        <p className="task-title">{task}</p>
        <ProgressBar />
      </div>

      <div className="button-container">
        <Button variant="contained" color="secondary">EDIT</Button>
        <Button variant="contained" color="error">DELETE</Button>
      </div>
      
    </div>
  );
};

export default ListItem;
