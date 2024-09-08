/* eslint-disable react/prop-types */
import { useState } from "react";

export default function TodoForm(props) {
  const [newTask, setnewTask] = useState({id:'',value:'',checked:false})

  //handle form submit
  const handleFormSubmit = (event) => {
    event.preventDefault()

    if (!newTask.value) return;

    const ifTodoMatched = props.todo.find((currEle) => (currEle.value === newTask.value ))
    if (ifTodoMatched){
      setnewTask({id:'',value:'',checked:false})
      return
    }              

    props.settodo((prevArr) => ([...prevArr, {id:newTask.id, value:newTask.value, checked:newTask.checked}]))
    setnewTask({id:'',value:'',checked:false})
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <div id="todo-input" className="inline-block">
        <input type="text" value={newTask.value} onChange={(event) => (setnewTask({id:event.target.value,value:event.target.value,checked:false}))} className="py-2 pl-4 pr-2 rounded-l-md text-sm outline-none" autoComplete="off" />
      </div>
      <div id="todo-btn" className="inline-block">
        <input type="submit" value="Add Task" className="bg-gray-600 hover:bg-gray-600/80 transition-all duration-100 text-center py-2 px-3 text-white font-semibold text-sm rounded-r-md outline-none" />
      </div>
    </form>
  )
}