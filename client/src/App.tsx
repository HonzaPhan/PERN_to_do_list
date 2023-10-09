import { useEffect, useState } from "react";
import ListHeader from "./components/to-do-tasks/ListHeader";
import ListItem from "./components/to-do-tasks/ListItem";
import { GetToDoAPI } from "./components/api/ToDoAPI";

interface Task {
  id: number;
  title: string;
  progress: number;
  createdAt: string;
}

const App = () => {
  const [task, setTask] = useState<Task[]>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetToDoAPI();
      setTask(data);
    };

    fetchData();
  }, []);

  const sortedTasks = task?.sort((a, b): number => {
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
  });

  return (
    <div className="app">
      <ListHeader listName={"To Do List"} />
      {sortedTasks?.map((task) => (
        <ListItem key={task.id} task={task.title} />
      ))}
    </div>
  );
};

export default App;
