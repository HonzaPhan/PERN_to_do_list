import { useEffect, useState } from "react";
import ListHeader from "./components/to-do-tasks/ListHeader";
import ListItem from "./components/to-do-tasks/ListItem";
import { GetToDoAPI } from "./components/api/ToDoAPI";
import { Task } from "./helpers/Types";
import { Box } from "@mui/material";

const App = () => {
  const [task, setTask] = useState<Task[]>();
  const [showModal, setShowModal] = useState(false);
  
  const fetchData = async () => {
    const data = await GetToDoAPI();
    setTask(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const sortedTasks = task?.sort((a, b): number => {
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
  });

  return (
    <Box className="app">
      <ListHeader listName={"To Do List"} fetchData={fetchData} />
      {sortedTasks?.map((task) => (
        <ListItem key={task.id} task={task} fetchData={fetchData} setShowModal={setShowModal}/>
      ))}
    </Box>
  );
};

export default App;
