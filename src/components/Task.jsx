import React, { useState } from "react";
import { useTasks } from "./DataProvider";

const Task = ({ id, task, complete }) => {
  const [edittask, setEditTask] = useState(task);
  const [toggleUT, setToggleUT] = useState(false);

  const { isCompleted, deleteTask, updateTask } = useTasks();

  const checkTask = (e) => isCompleted(id, e.target.checked);

  const edTask = () => updateTask(id, edittask);

  return (
    <>
      <div className={!toggleUT ? "show-edit" : ""}>
        <input
          type="text"
          value={edittask}
          onChange={(e) => setEditTask(e.target.value)}
        />
        <button onClick={edTask}>Edit</button>
      </div>

      <tr>
        <td>
          <input type="checkbox" onChange={checkTask} />
        </td>
        <td>
          <span className={complete ? "task-done" : ""}>{task}</span>
        </td>
        <td>
          <button onClick={() => setToggleUT(!toggleUT)}>Update task</button>
        </td>
        <td>
          <button onClick={() => deleteTask(id)}>Delete</button>
        </td>
      </tr>
    </>
  );
};

export default Task;
