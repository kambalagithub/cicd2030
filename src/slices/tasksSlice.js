import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: state.tasks.length + 1,
        text: action.payload,
        completed: false,
      });
      console.log("📝 Task added:", action.payload);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      console.log("🗑️ Task removed:", action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        console.log(
          "🔄 Task toggled:",
          action.payload,
          "Status:",
          task.completed ? "Completed" : "Incomplete"
        );
      }
    },
  },
});

export const { addTask, removeTask, toggleTask } = tasksSlice.actions;

export default tasksSlice.reducer;
