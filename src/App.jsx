import { useState } from 'react';
import './App.css';

function App() {

  const [tasks,setTasks] = useState([]);
  const [newTask,setNewTask] = useState("");

  function handleAddTodo () {
      setTasks(t => [...t,newTask]);
      setNewTask("");
  }

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function handleDeleteTask(index) {
      const updatedTasks = tasks.filter( (_,i) => i!=index);
      setTasks(updatedTasks);
  }

  function handleTaskDone(event, index) {
  const taskVal = "task"+index;
    event.target.checked ? document.getElementById(taskVal).style.color = "red" :
        document.getElementById(taskVal).style.color = "black"

  }

  return (
      <div>
        <div className="todo-header">To-do App</div>
        <div className="todo-add-task">
          <input type="text" value={newTask} placeholder="Enter What is on your mind" onChange={handleInputChange}/>
          <button className="todo-add-task-button" onClick={handleAddTodo}>Add Task</button>
        </div>
        <ul>
          {tasks.map((task,i) =>
            <li key={i}><input type="checkbox" onChange={(e) => handleTaskDone(e,i)}/><p id={"task"+i}>{task}</p> <button className="todo-delete-task-button" onClick={() => handleDeleteTask(i)}>Delete</button></li>
          )}
        </ul>
      </div>
  )
}

export default App
