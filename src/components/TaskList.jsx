import React from "react";
import { useTasks } from "./DataProvider";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <>
      <table>
        <tbody>
            {
                tasks.map((tasks, i) => <Task key={i}{...tasks}/>)
            }
        </tbody>
      </table>
    </>
  );
};

export default TaskList;
