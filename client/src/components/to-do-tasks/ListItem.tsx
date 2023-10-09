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
        <button className="edit">Edit</button>
        <button className="delete">Delete</button>
      </div>
      
    </div>
  );
};

export default ListItem;
