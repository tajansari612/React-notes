import { useState } from 'react'

function App() {
  const [theme, setTheme] = useState({
    isDarkApplied: false,
    bgColor: 'bg-white',
    textColor: 'text-black',
    containerColor: 'bg-black',
    containerTextColor: 'text-white',
    circleColor: 'bg-white',
    circleTextColor: 'text-black',
    circleTranslate: 'translate-x-0'
  })

  function themeChanger() {
    if(theme.isDarkApplied == false){
      setTheme({
        isDarkApplied: true,
        bgColor: 'bg-black',
        textColor: 'text-white',
        containerColor: 'bg-white',
        containerTextColor: 'text-black',
        circleColor: 'bg-black',
        circleTextColor: 'text-white',
        circleTranslate: 'translate-x-38'
      })
    }else{
      setTheme({
        isDarkApplied: false,
        bgColor: 'bg-white',
        textColor: 'text-black',
        containerColor: 'bg-black',
        containerTextColor: 'text-white',
        circleColor: 'bg-white',
        circleTextColor: 'text-black',
        circleTranslate: 'translate-x-0'
      })
    }
  };

  return (
    <div
      id='body'
      className={`w-screen h-screen pt-24 ${theme.bgColor} ${theme.textColor} flex flex-col items-center gap-6 transition-background-color delay-150 duration-300 ease-in-out`}
    >
      <h1 className='text-2xl'>Hi, I am Taj</h1>
      <h2 className='text-xl'>I am a Software Developer</h2>
      <div 
        id='container'
        className={`w-64 h-24 mt-8 pl-2 ${theme.containerColor} ${theme.circleTextColor} rounded-full flex items-center transition-background-color delay-150 duration-300 ease-in-out`}
        onClick={() => (themeChanger())}
      >
        <div 
          id='circle'
          className={`w-22 h-21 ${theme.circleColor} ${theme.circleTextColor} ${theme.circleTranslate} rounded-full flex justify-center items-center transition-translate duration-500`}
          >
          <span id='theme-text'>{theme.isDarkApplied?'ON':'OFF'}</span>
        </div>
      </div>
    </div>
  )
}

export default App