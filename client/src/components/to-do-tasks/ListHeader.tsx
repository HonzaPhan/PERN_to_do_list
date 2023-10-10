import { Box, Button, Typography } from "@mui/material";
import { IListHeaderProps } from "../../helpers/Types";
import ModalTask from "../modals/Modal";

const ListHeader = ({ listName }: IListHeaderProps) => {

  const singOut = () => {
    console.log("Sign out");
  };

  return (
    <Box className="list-header">
      <Typography variant="h1">{listName}</Typography>
      <Box className="button-container">
        <Button variant="contained" color="success">Add New</Button>
        <Button variant="contained" color="error" onClick={singOut}>Sign Out</Button>
      </Box>
      <ModalTask />
    </Box>
  );
};

export default ListHeader;