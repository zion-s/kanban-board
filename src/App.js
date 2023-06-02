import { useState } from "react";
import TaskItem from "./components/TaskItem/TaskItem";
import "./styles.css";

export default function App() {
  const [board, setBoard] = useState([
    {
      category: "Backlog",
      tasks: ["task 1", "task 2"]
    },
    {
      category: "To Do",
      tasks: ["task 3"]
    },
    {
      category: "Ongoing",
      tasks: ["task 4", "task 5"]
    },
    {
      category: "Done",
      tasks: ["task 6"]
    }
  ]);
  const [newTask, setNewTask] = useState("");

  const modifyTask = (type, categoryIndex, taskIndex) => {
    let boardCopy = [...board];
    if (type === "delete") {
      boardCopy[categoryIndex].tasks.splice(taskIndex, 1);
    } else if (type === "next") {
      if (categoryIndex < 3) {
        let task = boardCopy[categoryIndex].tasks.splice(taskIndex, 1);
        boardCopy[categoryIndex + 1].tasks.push(task);
      }
    } else {
      if (categoryIndex > 0) {
        let task = boardCopy[categoryIndex].tasks.splice(taskIndex, 1);
        boardCopy[categoryIndex - 1].tasks.push(task);
      }
    }
    setBoard([...boardCopy]);
  };

  const addTask = () => {
    let boardCopy = [...board];
    boardCopy[0].tasks.push(newTask);
    setNewTask("");
  };

  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => setNewTask(e.target.value)}
        value={newTask || ""}
      />
      <button onClick={addTask}>Create Task</button>
      <div className="boardContainer">
        {board.map((category, index) => {
          return (
            <div key={index} className="categoryContainer">
              <div>{category.category}</div>
              {category.tasks.map((task, i) => {
                return (
                  <TaskItem
                    categoryIndex={index}
                    taskIndex={i}
                    name={task}
                    modifyTask={modifyTask}
                    key={i}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
