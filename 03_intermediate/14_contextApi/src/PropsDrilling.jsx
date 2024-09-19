import { useState } from 'react'


// In React, props drilling refers to the process of passing data from a 
// parent component down to a deeply nested child component through multiple 
// layers of intermediate components.
// Middle layers don't need that data but still they have access
// And also breaks DRY Priciple
// So to remove this issue we use context api



export function PropsDrilling() {
    const [data, setdata] = useState("Hi, My name is Taj")
    return (
        <>
            <h1>This is Grand Parent Component</h1>
            <Parent data={data} />
        </>
    )
}

export function Parent(props) {

    return (
        <>
            <h1>This is Parent Component</h1>
            <Children data={props.data} />
        </>
    )
}

export function Children(props) {

    return (
        <>
            <h1>This is Childrent Component</h1>
            <Grandchildren data={props.data} />
            
        </>
    )
}

export function Grandchildren(props) {

    return (
        <>
            <h1>This is Grand Children Component</h1>
            <h2>data: {props.data}</h2>
        </>
    )
}