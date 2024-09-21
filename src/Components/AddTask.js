import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../slices/tasksSlice";

const AddTask = () => {
  const [taskText, setTaskText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      dispatch(addTask(taskText));
      setTaskText("");
      console.log("✅ Task added:", taskText);
    } else {
      console.log("⚠️ Task text is empty");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter a new task 📝"
      />
      <button type="submit">Add Task ➕</button>
    </form>
  );
};

export default AddTask;
