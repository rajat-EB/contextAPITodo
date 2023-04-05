import React, { useState } from "react";
import { useTasks } from "./DataProvider";

const TaskForm = () => {
  const [task, setTask] = useState("");
  const { addtasks } = useTasks();

  const submit = (e) => {
    e.preventDefault();
    addtasks(task);
    setTask("");
  };

  return (
    <>
      <form onSubmit={submit}>
        <input
          type="text"
          value={task}
          placeholder="add your task here"
          onChange={(e) => setTask(e.target.value)}
        />
        <button>Add</button>
      </form>
    </>
  );
};

export default TaskForm;
