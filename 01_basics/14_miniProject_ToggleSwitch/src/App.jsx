import { useState } from 'react'

function App() {
  const [themeDark, setThemeDark] = useState({toggle:'OFF',circle:'self-start bg-red-600 border-red-600',bgcolor:'white',textcolor:'black', contBg:'[#212121]'})

  const handleSwitch = () =>{
    if(themeDark.toggle=="OFF"){
      setThemeDark({toggle:'ON',circle:'translate-x-[95px] bg-green-600',bgcolor:'black',textcolor:'white', contBg:'green-500'})
    }else{
      setThemeDark({toggle:'OFF',circle:'translate-x-[0px] bg-red-600 border-red-600',bgcolor:'white',textcolor:'black', contBg:'[#212121]'})
    }
  }
  return (
    <div className={`flex flex-col items-center h-screen w-screen bg-${themeDark.bgcolor} text-${themeDark.textcolor} transition-all duration-700`}>
      <h1 className='text-3xl font-bold text-center my-6'>
        Hello, This is miniProject ToggleSwitch tutorial!
      </h1>
      <div className={`switch bg-${themeDark.contBg} text-white font-bold w-44 py-2 px-2 rounded-full flex flex-col`} onClick={handleSwitch}>
        <div className={`onOff w-16 py-5 text-center border-2 rounded-full ${themeDark.circle} transition-all duration-500`}>
          <span>{themeDark.toggle}</span>
        </div>
      </div>
    </div>
  )
}

export default App
