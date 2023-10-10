import { Box, Button, Typography } from "@mui/material";
import { IListHeaderProps } from "../../helpers/Types";
import ModalTask from "../modals/Modal";
import { useState } from "react";

const ListHeader = ({ listName, fetchData }: IListHeaderProps) => {
  const [showModal, setShowModal] = useState(false);

  const singOut = () => {
    console.log("Sign out");
  };

  return (
    <Box className="list-header">
      <Typography variant="h1">{listName}</Typography>
      <Box className="button-container">
        <Button variant="contained" color="success" onClick={() => setShowModal(true)}>Add New</Button>
        <Button variant="contained" color="error" onClick={singOut}>Sign Out</Button>
      </Box>
      {showModal && <ModalTask mode={`create`} setShowModal={setShowModal} fetchData={fetchData} task={undefined}/>}
    </Box>
  );
};

export default ListHeader;