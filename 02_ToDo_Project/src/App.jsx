import { useState } from "react"
import TodoForm from "../components/TodoForm";
import TaskList from "../components/TaskList";
import DateAndTime from "../components/DateAndTime";

function App() {
  const [todo, settodo] = useState([])



  //handle delete all todo
  const deleteAllTasks = () => {
    settodo([])
  }

  //storing data in local storage
  localStorage.setItem('react-todo',JSON.stringify(todo))

  return (
    <section id="todo-container" className="bg-gray-600 w-full h-screen flex flex-col items-center py-7 transition-all delay-300">
      <header>
        <h1 className="text-white text-4xl text-center font-semibold">Todo List</h1>
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
          <button onClick={deleteAllTasks} className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-300 translate-x-full">Clear All</button>
        </section>
      </section>
    </section>
  )
}

export default App
