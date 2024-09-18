import {useRef } from 'react'

function App() {
  //method used in javascript
  // const email = document.getElementById('email')
  // const password = document.getElementById('password')


  //method to be used in react
  const email = useRef(null)     //ref={email} should be mentioned in attribute
  const password = useRef(null)  ////ref={password} should be mentioned in attribute

  // console.log(email, password);
  // console.log(email.current, password.current);
  
  
  const handleFormSubmit = (e) =>{
    e.preventDefault()
    console.log(email.current.value, password.current.value);
    
  }
  return (
    <>
      <div className='flex flex-col items-center h-screen w-screen bg-gray-100 text-green-600 text-left'>
        <h1 className='text-3xl font-bold my-6'>Hello, this is useRef tutorial!</h1>
        <form onSubmit={(e) => handleFormSubmit(e)} className='bg-green-200 my-5 mx-5 px-6 py-6 flex flex-col items-center rounded-sm'>
          <input className='py-2 px-2 my-4 rounded-sm' type="email" name="email" ref={email} placeholder='Enter your email'/><br />
          <input className='py-2 px-2 mb-4 rounded-sm' type="password" name="password" ref={password} placeholder='Enter your password'/><br />
          <button className='py-1 px-3 text-white bg-green-600 hover:bg-green-600/80 rounded-sm' type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
