import React, { createContext, useContext, useState } from "react";
import { v4 } from "uuid";

const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

const DataProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addtasks = (ts) => {
    setTasks([
      ...tasks,
      {
        id: v4(),
        task: ts,
        complete: false,
      },
    ]);
  };

  const isCompleted = (id, status) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, complete: status } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((ts) => ts.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addtasks, isCompleted, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default DataProvider;
