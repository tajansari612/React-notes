import { useState } from "react"
import { BiCheckCircle } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";

function App() {
  const [newTask, setnewTask] = useState('')
  const [todo, settodo] = useState([])
  

  const handleFormSubmit = (event) =>{
    event.preventDefault()

    if(!newTask) return;
    if(todo.includes(newTask)){
      setnewTask("")
      return
    }
       
    settodo((prevArr) => ([...prevArr, newTask]))

    setnewTask("")

  }

  //todo date and time
  const date = new Date();
  const [time, settime] = useState('')
  setTimeout(() =>{
    settime(date.toLocaleTimeString())
    console.log(time)
  },1000)
  
  // console.log(date)


  return (
    <section id="todo-container" className="bg-gray-600 w-full h-screen flex flex-col items-center py-7">
      <header className="mb-6 text-center">
        <h1 className="text-white text-4xl font-semibold">Todo List</h1>
        <h2 id="date-time" className="text-white mt-6 text-2xl font-semibold">
          <span id="date" className="">
            {date.toLocaleDateString()}
          </span>
          <span id="time"> - {time}</span>
        </h2>
      </header>
      <section className="todo-form">

        <form onSubmit={handleFormSubmit}>
          <div id="todo-input" className="inline-block">
            <input type="text" value={newTask} onChange={(event) => (setnewTask(event.target.value))} className="py-2 pl-4 pr-2 rounded-l-md text-sm outline-none" autoComplete="off" />
          </div>
          <div id="todo-btn" className="inline-block">
            <input  type="submit" value="Add Task" className="bg-yellow-400 hover:bg-yellow-200 transition-all duration-100 text-center py-2 px-3 text-white text-sm rounded-r-md outline-none" />
          </div>
        </form>
        
        <section id="tasksList" className="py-7">
          <ul>
            {todo.map((currEle) =>{
              return <li key={currEle} className="bg-yellow-400 mb-4 text-white py-2 px-4 rounded-md flex flex-row justify-end">
                <span className="w-full text-wrap">{currEle}</span>
                <button id="check-btn" className="mr-2"><BiCheckCircle /></button>
                <button id="delete-btn"><MdDeleteForever /></button>
              </li>
            })}
          </ul>
        </section>
      </section>
      
    </section>
  )
}

export default App
