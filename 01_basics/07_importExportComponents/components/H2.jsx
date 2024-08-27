import React from 'react'

export function H2() {
  return (
    <div>
        <h1 className='text-3xl font-bold text-center my-6'>Hello, this is named export!</h1>
    </div>
  )
}

const studDetails = {
    name: "Taj Mohammad Ansasri",
    rollNo: 14,
    gender: "Male"
}
export function Stud(){
    return (
        <>
            <h3>Student Details:</h3>
            <h4>Name: {studDetails.name}</h4>
            <h4>RollNo: {studDetails.rollNo}</h4>
            <h4>Gender: {studDetails.gender}</h4>
        </>
    )
}