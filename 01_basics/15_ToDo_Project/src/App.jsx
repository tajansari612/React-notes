import { useCallback, useEffect, useState } from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

function App() {
  const [time, setTime] = useState(new Date());
  const [taskList, setTaskList] = useState([{key:1,value:"Apple"},{key:2,value:"Banana"},{key:3,value:"Kiwi"}]);
  const [taskId, setTaskId] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  },[]);

  const addTask = useCallback(() => {
    let addTaskData  = document.querySelector('#addTaskData').value;
    if(addTaskData==="") return;
    
    const newTask = {key: taskId,value: addTaskData}
    setTaskList(prevTaskList => [...prevTaskList,newTask]);
    setTaskId(prev => prev+1);

    document.querySelector('#addTaskData').value = "";
  },[taskId])

  const markAsRead = useCallback((taskId) => {
    const element = document.querySelector('#task-'+taskId);
    const prevClassData = element.getAttribute('class');
    element.setAttribute('class',prevClassData+' line-through');    
  },[]);

  const deleteTask = useCallback((taskId) => {
    const newTaskList = taskList.filter((task) => task.key !==taskId);
    setTaskList(newTaskList);
  },[taskList]);

  const clearAll = useCallback(() => {
    setTaskList([]);
  },[]);

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
              taskList.map((task) => {
                return(
                  <li 
                    key={task.key}
                    id={`task-${task.key}`}
                    className='w-full py-2 px-3 bg-gray-50 text-gray-700 rounded-full flex justify-center gap-2'
                    >
                    <h2 className='w-4/5'>{task.value}</h2>
                    <FaCheckCircle className='mt-0.5 text-green-500' onClick={() => markAsRead(task.key)} size={24} />
                    <MdDeleteForever className='text-red-500' onClick={() => deleteTask(task.key)} size={28} />
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
