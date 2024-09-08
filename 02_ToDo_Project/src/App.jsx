import { useState } from "react"
import TodoForm from "../components/TodoForm";
import TaskList from "../components/TaskList";
import DateAndTime from "../components/DateAndTime";
import { setLocalStorageData, getLocalStorageData } from "../components/TodoLoacalStorage";

function App() {
  const [todo, settodo] = useState(() =>(getLocalStorageData()))



  //handle delete all todo
  const deleteAllTasks = () => {
    settodo([])
  }

  //storing data in local storage
  setLocalStorageData(todo)

  return (
    <section id="todo-container" className="flex flex-col items-center py-7 transition-all delay-300">
      <header>
        <h1 className="text-4xl text-center font-[lora] font-semibold">Todo List</h1>
        <DateAndTime />
      </header>
      <section className="todo-form">
        <TodoForm key='key123' todo={todo} settodo={settodo} />
        <section id="tasksList" className="py-7">
          <ul>
            {todo.map((currEle) => {
              return <TaskList key={currEle.id} todo={todo} settodo={settodo} currEle={currEle} />
            })}
          </ul>
          <button onClick={deleteAllTasks} className="py-2 px-4 mt-4 text-sm rounded-md bg-[#DD5628] hover:bg-[#EB7A53] font-semibold text-white translate-x-full">Clear All</button>
        </section>
      </section>
    </section>
  )
}

export default App
