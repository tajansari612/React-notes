
// Event propagation in React refers to the order in which event handlers are 
// called when an event occurs on an element within a React component. It works 
// similarly to event propagation in the standard DOM, but with a few key 
// differences. 

// Phases of Event Propagation:
// 01) Capturing Phase:
// (Not typically used in React) The event starts at the root of the DOM and 
// travels down to the target element.

// 02) Target Phase:
// The event reaches the target element, which is the element that triggered
//  the event.

// 03) Bubbling Phase:
// (Most common in React) The event travels up from the target element to the
//  root of the DOM.
function App() {

  const handleButtonClick = (event) => {
    // console.log("hello")
    // alert("Hey, I am on Click!")
    console.log(event)
    console.log(event.type)
    console.log(event.target)
  }


  return (
    <>
      <div className='flex flex-col items-center h-screen w-screen text-black text-left'>
        <h1 className='text-3xl font-bold mt-28 mb-20'>Hello, This is event handling tutorial!</h1>

        <button onClick={handleButtonClick} className="inline-block rounded border border-indigo-600 bg-indigo-600 px-6 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500" type="button">
          Click Me
        </button>

        {/* for passing parameters use below method */}
        <button onClick={() => (handleButtonClick())} className="inline-block rounded border border-indigo-600 bg-indigo-600 px-6 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500" type="button">
          Click Me 2
        </button>
      </div>
    </>
  )
}

export default App
