import { useEffect, useState } from "react";
import ListHeader from "./components/to-do-tasks/ListHeader";
import ListItem from "./components/to-do-tasks/ListItem";
import { GetToDoAPI } from "./components/api/ToDoAPI";
import { Task } from "./helpers/Types";
import { Box } from "@mui/material";
import Auth from "./components/auth/Auth";

const App = () => {
  const [task, setTask] = useState<Task[]>();
  const [showModal, setShowModal] = useState(false);

  const authToken = false;

  const fetchData = async () => {
    const data = await GetToDoAPI();
    setTask(data);
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
