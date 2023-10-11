import { useEffect, useState } from "react";
import ListHeader from "./components/to-do-tasks/ListHeader";
import ListItem from "./components/to-do-tasks/ListItem";
import { API_URL } from "./components/api/ToDoAPI";
import { Task } from "./helpers/Types";
import { Box, Typography } from "@mui/material";
import Auth from "./components/auth/Auth";
import { useCookies } from "react-cookie";
import axios from "axios";

const App = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies<string>(["user"]);
  const [task, setTask] = useState<Task[]>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showModal, setShowModal] = useState(false);

  const authToken = cookies.Authtoken
  const email = cookies.Email
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/todos/${email}`);
      if (response.status === 200) {
        setTask(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(authToken){
      fetchData();
    }
  }, []);


  const sortedTasks = task?.sort((a, b): number => {
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
  });

  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100vw",
      height: "100vh",      
    }}>
      {!authToken && <Auth />}
      {authToken && (
        <>
          <ListHeader listName={"To Do List"} fetchData={fetchData} />
          <Typography variant="h3" component="p">Welcome back {email}</Typography>
          {sortedTasks?.map((task) => (
            <ListItem
              key={task.id}
              task={task}
              fetchData={fetchData}
              setShowModal={setShowModal}
            />
          ))}
        </>
      )}
    </Box>
  );
};

export default App;
