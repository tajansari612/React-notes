/* eslint-disable react/prop-types */
import { BiCheckCircle } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";


export default function TaskList(props) {

  //handle check function for line-through css
  const handleCheck = () => {
    const updatedTodo = props.todo.map((ele) =>{
      if(props.currEle === ele){
        return {...ele, checked:!props.currEle.checked}
      }else{
        return ele
      }
    })
    props.settodo(updatedTodo)
  }
  
  //handle delete task function
  const handleDeleteTask = (value) => {
    // const index = todo.indexOf(value)    //slow
    // todo.splice(index,1)

    const updatedTodo = props.todo.filter((currEle) => (currEle !== value))  //fast
    props.settodo(updatedTodo)
  }


  return (
    <li key={props.currEle} className="bg-gray-50 text-black mb-3 py-2 px-4 rounded-md flex flex-row justify-end">
      <span className={`w-full text-wrap ${props.currEle.checked ? 'line-through' : 'decoration-none'}`}>{props.currEle.value}</span>
      <button id="check-btn" className='mr-2 text-2xl text-green-600' value={props.currEle.checked} onClick={handleCheck}><BiCheckCircle /></button>
      <button id="delete-btn" className="text-red-600 text-2xl" onClick={() => (handleDeleteTask(props.currEle))}><MdDeleteForever /></button>
    </li>
  )
}

