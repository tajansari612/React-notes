import { useState } from 'react'

// The React useState Hook allows us to track state in a function component.
// State generally refers to data or properties that need to be tracking in an
// application.

// Import useState:
// To use the useState Hook, we first need to import it into our component.

// Initialize useState:
// We initialize our state by calling useState in our function component.
// useState accepts an initial state and returns two values:
// 01) The current state. ex. count
// 02) A function that updates the state. ex. setCount()

// Update State:
// To update our state, we use our state updater function.
// We should never directly update state. Ex: color = "red" is not allowed.

// What Can State Hold:
// The useState Hook can be used to keep track of strings, numbers, booleans, 
// arrays, objects, and any combination of these
// We could create multiple state Hooks to track individual values.

function App() {

  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    if(count<40){
      setCount(count+1)
    }
  }
  const handleDecrement = () => {
    if(count>0){
      setCount(count-1)
    }
  }

  let styleCount = "text-green-500"
  if(count<=10){
    styleCount = "text-yellow-500"
  }else if(count<=20){
    styleCount = "text-green-500"
  }else if(count<=30){
    styleCount = "text-blue-500"
  }else{
    styleCount = "text-red-500"
  }
  return (
    <>
      <div className='flex flex-col items-center h-screen w-screen bg-[#212121] text-white'>
        <h1 className='text-3xl font-bold text-center my-6'>
          Hello, This is useState() Hook tutorial!
        </h1>
        <h2 className={`mt-24 text-6xl font-bold ${styleCount}`}>{count}</h2>
        <button type="button" onClick={handleIncrement} className='bg-green-500 mt-6 py-2 px-6 text-lg rounded-sm'>Increment</button>
        <button type="button" onClick={handleDecrement} className='bg-green-500 mt-6 py-2 px-6 text-lg rounded-sm'>Decrement</button>
      </div>
    </>
  )
}

export default App
