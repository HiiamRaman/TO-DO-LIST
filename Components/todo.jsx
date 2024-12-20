import { useState } from "react";
import './todo.css'
export default function TODO() {
  const [tasks, setTask] = useState(["Eat", "Shower", "Run"]);
  const [newtask, setNewTask] = useState("");

  function handleSubmit(event) {
    setNewTask(event.target.value);
  }
  function addTask(){
    if (newtask.trim()!=='')
        {
            setTask([...tasks,newtask]);
            setNewTask("")
          }
  }
  function deleteTask(index) {
    const updatedTask= tasks.filter((element, i) => i !== index);  //
    setTask(updatedTask);
  }
  function moveTop(index) {
    if (index>0){

        const updatedTask=[...tasks];
    [updatedTask[index], updatedTask[index-1]]=[updatedTask[index-1], updatedTask[index]]
    setTask(updatedTask);
    }
  }

  
  function moveDown(index) {
    if (index < tasks.length-1){
        const updatedTask=[...tasks];
    [updatedTask[index], updatedTask[index+1]]=[updatedTask[index+1], updatedTask[index]]
    setTask(updatedTask);
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="ENTER YOUR TASKS"
        value={newtask}
        onChange={handleSubmit}
      />
      <button onClick={addTask}>ADD</button>

      <ol>
        {tasks.map((element, index) => (
          <li key={index}>
            <span> {element} </span>
            <button onClick={() => deleteTask(index)}>Delete</button>
            <button onClick={() => moveTop(index)}> ☝️ </button>
            <button onClick={() => moveDown(index)}> 👇 </button>
          </li>
        ))}
      </ol>
    </div>
  );
}


