/* eslint-disable react/prop-types */
import { useState } from "react";

export default function TodoForm(props) {
  const [newTask, setnewTask] = useState('')

  //handle form submit
  const handleFormSubmit = (event) => {
    event.preventDefault()
      
    if (!newTask) return;
    if (props.todo.includes(newTask)) {
      setnewTask("")
      return
    }                   

    props.settodo((prevArr) => ([...prevArr, newTask]))

    setnewTask("")

  }
  return (
    <form onSubmit={handleFormSubmit}>
      <div id="todo-input" className="inline-block">
        <input type="text" value={newTask} onChange={(event) => (setnewTask(event.target.value))} className="py-2 pl-4 pr-2 rounded-l-md text-sm outline-none" autoComplete="off" />
      </div>
      <div id="todo-btn" className="inline-block">
        <input type="submit" value="Add Task" className="bg-yellow-400 hover:bg-yellow-200 transition-all duration-100 text-center py-2 px-3 text-white text-sm rounded-r-md outline-none" />
      </div>
    </form>
  )
}