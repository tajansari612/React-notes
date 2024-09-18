import { useState,useEffect } from "react"

function App() {
  const [apiData, setapiData] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => (
      res.json()
    ))
    .then((data) => (
      setapiData(data)   //no many requests
      // because useEffect runs only once due to no dependency 
    ))
    .catch((error) => (console.log(error)
    ))
  },[])
  
  return (
    <>
      <div className='flex flex-col items-center h-screen w-screen bg-gray-100 text-green-600 text-left'>
        <h1 className='text-3xl font-bold my-6'>Hello, this is useEffect tutorial!</h1>
        <ul>
          {apiData.map((currEle) =>{
            return <li key={currEle.id}>{currEle.title}</li>
          })}
        </ul>
      </div>
    </>
  )
}

export default App
