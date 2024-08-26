import React from "react";
import Card from "./../components/Card"


// React Components
// Components are independent and reusable bits of code. They serve the same
// purpose as JavaScript functions, but work in isolation and return HTML.

// Components come in two types, Class components and Function components,
// in this tutorial we will concentrate on Function components.

// In older React code bases, you may find Class components primarily used.
// It is now suggested to use Function components along with Hooks, which
//  were added in React 16.8. There is an optional section on Class components
//  for your reference.


// Class Component:
// A class component must include the extends React.Component statement.
// This statement creates an inheritance to React.Component, and gives your 
// component access to React.Component's functions.
// The component also requires a render() method, this method returns HTML.

// Example
// Create a Class component called Car


class ClassComponent extends React.Component {
  render() {
    return <h2 className="mb-6">Hi, I am a Class component!</h2>;
  }
}



// Function Component:
// Here is the same example as above, but created using a Function component instead.

// A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand, and will be preferred in this tutorial.

// Example
// Create a Function component called Car

function FunctionalComponent() {
  return <h2 className="mb-4">Hi, I am a Functional component!</h2>;
}


function studName(k){
  if(k=="taj") return "Taj Mohammad Ansari"
  else if(k=="ayaj") return "Mohammad Ayaj Ansari"
}

function App() {

  return (
    <div className='flex flex-col items-center h-screen w-screen bg- text-blue-600'>
      <h1 className='text-3xl font-bold text-center my-6'>
        Hello, Components
      </h1>
      <FunctionalComponent />
      <ClassComponent />
      <div className='w-4/5 flex justify-evenly flex-wrap' id="components">
        <Card />
        <Card />
        <Card />
      </div>
      <h2>Name: {studName("taj")}</h2>
      <h2>Name: {studName("ayaj")}</h2>
    </div>
  )
}

export default App


