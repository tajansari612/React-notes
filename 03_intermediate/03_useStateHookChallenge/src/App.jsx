import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [step, setstep] = useState(0)

  const handleStep = (value) =>{
    setstep(value)
  }

  const handleIncrement = () =>{
    if(count+step <= 100) setCount(count+step)
  }

  const handleDecrement = () =>{
    if(count-step >=0 ) setCount(count-step)
  }

  const handleReset = () =>{
    setCount(0)
  }
  return (
    <>
      <div className='flex flex-col items-center h-screen w-screen bg-[#212121] text-white'>
        <h1 className='text-3xl font-bold text-center my-6'>
          Hello, This is useState() Hook challenge!
        </h1>

        <section id='challenge-card' className='w-1/2 py-4 px-4 shadow-md shadow-yellow-400 rounded-lg'>
          <h1 className='text-4xl text-center font-semibold'>useState Challenge</h1>
          <h3 className='mt-5'>count: <span className='text-amber-400 font-semibold'>{count}</span></h3>
          <div id="step" className='mt-4'>
            <p className='inline mr-3'>step: </p>
            <input type="number" name="step" id="step-input" className="text-black inline  rounded-sm outline-black" value={step} onChange={(e) => (handleStep(Number(e.target.value)))}/>
          </div>
          <div id="counter-change" className='mt-12 mx-4 mb-12 flex justify-between'>
            <button className='bg-white/80 hover:bg-white hover:shadow-sm hover:shadow-white/80 py-1.5 px-8 rounded-full text-black' onClick={handleIncrement}>Increment</button>
            <button className='bg-white/80 hover:bg-white hover:shadow-sm hover:shadow-white/80 py-1.5 px-8 rounded-full text-black' onClick={handleDecrement}>Decrement</button>
            <button className='bg-white/80 hover:bg-white hover:shadow-sm hover:shadow-white/80 py-1.5 px-8 rounded-full text-black' onClick={handleReset}>Reset</button>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
