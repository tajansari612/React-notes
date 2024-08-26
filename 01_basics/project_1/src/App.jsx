import Navbar from './../components/Navbar'

function App() {

  return (
    <div className='flex flex-col items-center h-screen w-screen bg-blue-400 text-white'>
      <Navbar />
      <h1 className='text-3xl font-bold text-center mt-6'>Hello, this is my first Project!</h1>
      <p className="text-center max-w-96 mt-8 text-wrap">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, odio
        saepe. Accusantium repellat molestias rerum aut fuga nesciunt unde natus
        minus laborum, dicta incidunt quas eum tempore. Qui, neque et.
      </p>
    </div>
  )
}

export default App
