import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  // setInterval(() => {
  //   setCount((prev) => (prev+1))
  // }, 1000);
  //above code runs multiple times

  //using useEffect
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => (prev+1))
    }, 1000)

    return () => (clearInterval(timer))   //useEffect cleanup
  }, [])
  

  return (
    <>
      <div className='flex flex-col items-center h-screen w-screen bg-white text-green-600 text-left'>
        <h1 className='text-3xl font-bold my-6'>Hello, this is useEffect tutorial!</h1>
        <p className='text-xl font-semibold text-black'>Count: {count}</p>

        <button onClick={() => (setCount((prev) => (prev+1)))} className='py-2 px-4 mt-4 text-white bg-green-500 hover:bg-green-500/80 rounded-sm'>Increment</button>
        <button onClick={() => (setCount(0))} className='py-2 px-4 mt-4 text-white bg-green-500 hover:bg-green-500/80 rounded-sm'>Reset</button>
      </div>
    </>
  )
}

export default App
