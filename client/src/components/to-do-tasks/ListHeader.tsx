import { Box, Button, Typography } from "@mui/material";
import { IListHeaderProps } from "../../helpers/Types";
import ModalTask from "../modals/Modal";
import { useState } from "react";
import { CustomizedBox } from "../MUI-customized-components/Box";
import { useCookies } from "react-cookie";

const ListHeader = ({ listName, fetchData }: IListHeaderProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies(['Email', 'Authtoken']);

  const [showModal, setShowModal] = useState(false);

  const singOut = () => {
    console.log("Sign out");
    removeCookie('Email')
    removeCookie('Authtoken')
    window.location.reload()
  };

  return (
    <CustomizedBox>
      <Typography variant="h1" sx={{ textAlign: "center" }}>{listName}</Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem", paddingTop: "1rem" }}>
        <Button variant="contained" color="success" onClick={() => setShowModal(true)}>Add New</Button>
        <Button variant="contained" color="error" onClick={singOut}>Sign Out</Button>
      </Box>
      {showModal && <ModalTask mode={`create`} setShowModal={setShowModal} fetchData={fetchData} task={undefined}/>}
    </CustomizedBox>
  );
};

export default ListHeader;