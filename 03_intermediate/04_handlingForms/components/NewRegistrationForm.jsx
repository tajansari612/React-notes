import { useState } from "react"

export default function Form() {
  const [user, setuser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: ""
  })


  const handleInput = (e) =>{
    const {name, value} = e.target

    setuser((prev) =>({...prev, [name]:value}))
  }
  return (
  <div id="body" className="m-12 w-full flex justify-center ">
    <form>
    <div id="container" className="py-4 px-4 text-sm bg-white rounded shadow">
      <h1 className="mb-3 font-semibold text-xl">Sign Up</h1>
      <p className="mb-2 text-black/70">Please this form to create an account.</p>

      <label htmlFor="firstName">
      <p className='font-semibold'>First Name</p>
      </label>
      <input type="text" value={user.firstName} onChange={(e) => handleInput(e)} name="firstName" className="w-full py-[2px] px-1 mb-2 rounded border border-black" placeholder="Enter First Name" required />


      <label htmlFor="lastName" className="mb-4">
      <p className='font-semibold'>Last Name</p>
      </label>
      <input type="text" value={user.lastName} onChange={(e) => handleInput(e)} name="lastName" className="w-full py-[2px] px-1 mb-2 rounded border border-black" placeholder="Enter Last Name" required />

      <label htmlFor="email" className="mb-4">
      <p className='font-semibold'>Email</p>
      </label>
      <input type="email" value={user.email} onChange={(e) => handleInput(e)} name="email" className="w-full py-[2px] px-1 mb-2 rounded border border-black" placeholder="Enter Email" required />

      <label htmlFor="password" className="mb-4">
      <p className='font-semibold'>Password</p>
      </label>
      <input type="password" value={user.password} onChange={(e) => handleInput(e)} name="password" className="w-full py-[2px] px-1 mb-2 rounded border border-black" placeholder="Enter Password" required />

      <label htmlFor="phoneNumber" className="mb-4">
      <p className='font-semibold'>Phone Number</p>
      </label>
      <input type="text" value={user.phoneNumber} onChange={(e) => handleInput(e)} name="phoneNumber" className="w-full py-[2px] px-1 mb-2 rounded border border-black" placeholder="Enter Phone Number" required maxLength={10} />

      <p className="my-3 text-xs text-black/70">By creating an account you agree to our <span className="text-blue-700/100">Terms and Policies</span></p>
      <button className="bg-blue-500 py-1 w-full  text-white rounded-sm" type="submit">Sign Up</button>
    </div>
    </form>
  </div>
  )
}
