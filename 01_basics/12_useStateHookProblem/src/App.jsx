import { useState } from 'react'

function App() {

  // const users = [
  //   { name: "Taj", age: 24 },
  //   { name: "Ayaj", age: 22 },
  //   { name: "Pravin", age: 23 },
  //   { name: "Shinde", age: 23 }
  // ]

  const [usersState, setUsersState] = useState([
    { name: "Taj", age: 24 },
    { name: "Ayaj", age: 22 },
    { name: "Pravin", age: 23 },
    { name: "Shinde", age: 23 }
  ])

  let usersLength = usersState.length
  let usersAgeAvg = usersState.reduce((accu, curEle) => (accu + curEle.age),0)/usersLength
  return (
    <div className='flex flex-col items-center h-screen w-screen bg-[#212121] text-white'>
      <h1 className='text-3xl font-bold text-center my-6'>
        Hello, This is useState() Hook tutorial!
      </h1>

      {/* using map or without state */}
      {/* <ul>
        {
          users.map((ele) => {
            return <li key={ele.index}>{ele.name} is {ele.age} years old!</li>
          })
        }
      </ul> */}

      {/* using state hook */}
      <ul>
        {
          usersState.map((ele) => {
            return <li key={ele.index}>{ele.name} is {ele.age} years old!</li>
          })
        }
        <li>Total users: {usersLength}</li>
        <li>Users age average: {usersAgeAvg}</li>
      </ul>
    </div>
  )
}

export default App
