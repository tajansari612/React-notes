import { useState } from 'react'


// React Importing and Exporting Components:

// Modules:
// JavaScript modules allow you to break up your code into separate files.
// This makes it easier to maintain the code-base.
// ES Modules rely on the import and export statements.

// Export:
// You can export a function or variable from any file.
// Let us create a file named person.js, and fill it with the things we want to 
// export.
// There are two types of exports: Named and Default.

// Named Exports
// You can create named exports two ways. In-line individually, or all at once 
// at the bottom.

// In-line individually:
/*   ---person.js---
export const name = "Jesse"
export const age = 40
*/

// All at once at the bottom:
/*   ---person.js---
const name = "Jesse"
const age = 40
export { name, age }
*/


// Default Exports:
// Let us create another file, named message.js, and use it for demonstrating 
// default export.
// You can only have one default export in a file.

// Example:

/*   ---message.js---
const message = () => {
  const name = "Jesse";
  const age = 40;
  return name + ' is ' + age + 'years old.';
};
export default message;
*/


// Import
// You can import modules into a file in two ways, based on if they are named 
// exports or default exports.
// Named exports must be destructured using curly braces. Default exports do not.

// Example:
// Import named exports from the file person.js:
/*
import { name, age } from "./person.js";
*/

// Example:
// Import a default export from the file message.js:
/*
import message from "./message.js";
*/


import AnyName from "../components/H1"  
//Above is default import and can be of any name given but first letter should
// be capital.
// No curly braces is used if used it gives error

import {H2,Stud} from "../components/H2"
function App() {

  return (
    <>
      <div className='flex flex-col items-center h-screen w-screen bg-blue-400 text-white text-left'>
        <h1 className='text-3xl font-bold my-6'>Hello, this is Import & Export tutorial!</h1>
        <AnyName />
        <H2 />
        <div className='text-left'>
          <Stud />
        </div>
      </div>
    </>
  )
}

export default App
