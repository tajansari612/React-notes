/* eslint-disable react/prop-types */
import { BiCheckCircle } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";


export default function TaskList(props) {
  //handle check function
  const handleCheck = () => {
    //log
  }
  //handle delete task function
  const handleDeleteTask = (value) => {
    // const index = todo.indexOf(value)    //slow
    // todo.splice(index,1)

    const updatedTodo = props.todo.filter((currEle) => (currEle !== value))  //fast
    props.settodo(updatedTodo)
  }


  return (
    <li key={props.currEle} className="bg-yellow-400 mb-4 text-white py-2 px-4 rounded-md flex flex-row justify-end">
      <span className='w-full text-wrap'>{props.currEle}</span>
      <button id="check-btn" className="mr-2" onClick={handleCheck}><BiCheckCircle /></button>
      <button id="delete-btn" onClick={() => (handleDeleteTask(props.currEle))}><MdDeleteForever /></button>
    </li>
  )
}

