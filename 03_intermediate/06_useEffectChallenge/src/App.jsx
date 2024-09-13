import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [name, setname] = useState("")

  useEffect(() => {
    console.log("Name is: ",name);
    
  }, [name])

  useEffect(() => {
    document.title = `count ${count}`
  }, [count])
  
  
  return (
    <>
      <div className='flex flex-col items-center h-screen w-screen bg-white text-green-600 text-left'>
        <h1 className='text-3xl font-bold my-6'>Hello, this is useEffect tutorial!</h1>
        <p className='text-xl font-semibold text-black'>Count: {count}</p>

        <button onClick={() => (setCount((prev) => (prev+1)))} className='py-2 px-4 mt-4 text-white bg-green-500 hover:bg-green-500/80 rounded-sm'>Increment</button>

        <div id="displayName" className='mt-8 flex items-center flex-col'>
          <p className='text-2xl'>Name: {name}</p>
          <input type="text" value={name} onChange={(e) => (setname(e.target.value))} className='py-1 px-1 bg-gray-100 text-black font-semibold mt-4 outline-none'/>
        </div>
      </div>
    </>
  )
}

export default App
