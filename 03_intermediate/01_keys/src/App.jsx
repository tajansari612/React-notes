import { useState } from 'react'


// A key is a unique identifier. In React, it is used to identify which items
// have changed, updated, or deleted from the Lists. It is useful when we 
// dynamically created components or when the users alter the lists. It also 
// helps to determine which components in a collection needs to be re-rendered 
// instead of re-rendering the entire set of components every time.

// Keys should be given inside the array to give the elements a stable identity. 
// The best way to pick a key as a string that uniquely identifies the items in 
// the list.
function App() {
  const stringLists = ['Peter', 'Sachin', 'Kevin', 'Dhoni', 'Alisa']
  return (
      // <>
      //   <ul>
      //     {
      //       stringLists.map((strList) => {
      //         return <li key={strList.id}> {strList} </li>
      //       })
      //     }
      //   </ul>
      // </>
      
      //App.jsx:17 Warning: Each child in a list should have a unique "key" prop.


    // If there are no stable IDs for rendered items, you can assign the item 
    // index as a key to the lists. 

    <>
      {
        stringLists.map((strList, index) => {
          return <li key={index}> {strList} </li>;
        })
      }
    </>
  )
}

export default App
