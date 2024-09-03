import { useState } from 'react'


function App() {
  const [inputText, setInputText] = useState("")
  return (
    <div className='flex flex-col items-center h-screen w-screen bg-[#212121] text-white'>
      <h1 className='text-3xl font-bold text-center my-6'>
        Hello, This is passing state as a props tutorial!
      </h1>
      <Input inputText={inputText} setInputText={setInputText}/>
      <Display inputText={inputText} setInputText={setInputText}/>
    </div>
  )
}
export default App


export function Input(props) {
  // console.log(props.inputText)
  return (
    <div className='text-black'>
      <input type="text" placeholder='Enter your text' value={props.inputText} onChange={(e) => (props.setInputText(e.target.value))} />
    </div>
  )
}

export function Display(props) {
  return (
    <div>
      <h2>Entered Text: {props.inputText}</h2>
    </div>
  )
}
