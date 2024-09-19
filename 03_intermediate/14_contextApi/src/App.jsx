import { useState } from 'react'
import { PropsDrilling } from './PropsDrilling'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col items-center h-screen w-screen bg-gray-100 text-green-600 text-left'>
        <h1 className='text-3xl font-bold my-6'>Hello, this is useRef tutorial!</h1>
        <PropsDrilling />
      </div>
    </>
  )
}

export default App
