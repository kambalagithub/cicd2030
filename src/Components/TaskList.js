import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTask, toggleTask } from "../slices/tasksSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  console.log(tasks);
  const dispatch = useDispatch();

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
            onClick={() => dispatch(toggleTask(task.id))}
          >
            {task.text}
          </span>
          <button onClick={() => dispatch(removeTask(task.id))}>
            Delete 🗑️
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
