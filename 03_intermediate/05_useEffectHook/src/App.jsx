import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() =>{
    console.log("useEffect rendering...");   //it renders only on starting and when dependency array changes
    //it takes two arguments on is callback funtion and another is dependecy array
    console.log("u clicked ",count," times");   //it renders only if dependecy state changes
  },[count])

  console.log("outside rendering..."); //it renders each time if any state changes
  
  return (
    <>
      <div className='flex flex-col items-center h-screen w-screen bg-white text-green-600 text-left'>
        <h1 className='text-3xl font-bold my-6'>Hello, this is useEffect tutorial!</h1>
        <p className='text-xl font-semibold text-black'>Count: {count}</p>

        <button onClick={() => (setCount((prev) => (prev+1)))} className='py-2 px-4 mt-4 text-white bg-green-500 hover:bg-green-500/80 rounded-sm'>Increment</button>
      </div>
    </>
  )
}

export default App
