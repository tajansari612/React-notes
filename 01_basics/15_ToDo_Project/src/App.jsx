import { useCallback, useEffect, useState } from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

function App() {
  const [time, setTime] = useState(new Date());
  const [taskList, setTaskList] = useState(['Apple','Banana','Peach']);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
  },[]);

  const addTask = useCallback(() => {
    let addTaskData  = document.querySelector('#addTaskData').value;
    setTaskList(prevTaskList => [...prevTaskList,addTaskData]);

    document.querySelector('#addTaskData').value = "";
  },[taskList])

  const markAsRead = useCallback((index) => {
    const element = document.querySelector('#task-'+index);
    const prevClassData = element.getAttribute('class');
    element.setAttribute('class',prevClassData+' line-through');    
  },[taskList]);

  const deleteTask = useCallback((index) => {
    const newTaskList = taskList.filter((_,i) => i!=index);
    setTaskList(newTaskList);    
  },[taskList]);

  const clearAll = useCallback(() => {
    setTaskList([]);
  },[taskList]);

  return (
    <div 
      id='body' 
      className='w-screen h-screen bg-gray-600 flex justify-center items-center'
      >
      <div 
        id='container'
        className='min-w-1/3 h-5/6 p-2.5 bg-gray-800 text-gray-50 rounded-2xl flex flex-col items-center gap-4'
        >
          <h1 className='mt-6 text-2xl'>Todo List</h1>
          <h2 className=''>{time.toLocaleDateString()} - {time.toLocaleTimeString()}</h2>
          <div id='addTask' className='mt-2'>
            <input 
              type="text" 
              name="newTask" 
              id="addTaskData" 
              className='py-2 px-3 bg-gray-200 rounded-tl-full rounded-bl-full text-gray-700 focus:outline-none focus:border-transparent focus:ring-0' 
              />
            <button 
              id='addTaskBtn' 
              className='py-2 px-3 bg-sky-400 rounded-tr-full rounded-br-full'
              onClick={() => addTask()}
              >
              Add Task
            </button>
          </div>

          <ul 
            id='taksList'
            className='w-full h-64 p-6 flex flex-col items-center gap-2 overflow-auto'
            >
            {
              taskList.map((task, index) => {
                return(
                  <li 
                    key={index}
                    id={`task-${index}`}
                    className='w-full py-2 px-3 bg-gray-50 text-gray-700 rounded-full flex justify-center gap-2'
                    >
                    <h2 className='w-4/5'>{task}</h2>
                    <FaCheckCircle className='mt-0.5 text-green-500' onClick={() => markAsRead(index)} size={24} />
                    <MdDeleteForever className='text-red-500' onClick={() => deleteTask(index)} size={28} />
                  </li>
                )
              })
            }
          </ul>

          <button 
            id='clearAll'
            className='py-2 px-3 bg-red-500 rounded-sm'
            onClick={clearAll}
            >
            Clear All
            </button>
      </div>

    </div>
  )
}

export default App
