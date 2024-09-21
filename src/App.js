import Top from "./Components/Top";
import "./App.css";
import Parent from "./Components/Parent";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";
const App = () => {
  return (
    <div className="container">
      <AddTask />
      <TaskList />
    </div>
  );
};
export default App;
