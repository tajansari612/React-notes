import { useState } from "react"

export default function Form() {
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [phoneNumber, setphoneNumber] = useState('')

  const handleInput = (e) =>{
    const {name, value} = e.target

    switch (name) {
      case 'firstName':
        setfirstName(value)
        break;
      
      case 'lastName':
        setlastName(value)
        break

      case 'email':
        setemail(value)
        break

      case 'password':
        setpassword(value)
        break
      
      case 'phoneNumber':
        setphoneNumber(value)
        break

      default:
        break;
    }
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
      <input type="text" value={firstName} onChange={(e) => handleInput(e)} name="firstName" className="w-full py-[2px] px-1 mb-2 rounded border border-black" placeholder="Enter First Name" required />


      <label htmlFor="lastName" className="mb-4">
      <p className='font-semibold'>Last Name</p>
      </label>
      <input type="text" value={lastName} onChange={(e) => handleInput(e)} name="lastName" className="w-full py-[2px] px-1 mb-2 rounded border border-black" placeholder="Enter Last Name" required />

      <label htmlFor="email" className="mb-4">
      <p className='font-semibold'>Email</p>
      </label>
      <input type="email" value={email} onChange={(e) => handleInput(e)} name="email" className="w-full py-[2px] px-1 mb-2 rounded border border-black" placeholder="Enter Email" required />

      <label htmlFor="password" className="mb-4">
      <p className='font-semibold'>Password</p>
      </label>
      <input type="password" value={password} onChange={(e) => handleInput(e)} name="password" className="w-full py-[2px] px-1 mb-2 rounded border border-black" placeholder="Enter Password" required />

      <label htmlFor="phoneNumber" className="mb-4">
      <p className='font-semibold'>Phone Number</p>
      </label>
      <input type="text" value={phoneNumber} onChange={(e) => handleInput(e)} name="phoneNumber" className="w-full py-[2px] px-1 mb-2 rounded border border-black" placeholder="Enter Phone Number" required maxLength={10} />

      <p className="my-3 text-xs text-black/70">By creating an account you agree to our <span className="text-blue-700/100">Terms and Policies</span></p>
      <button className="bg-blue-500 py-1 w-full  text-white rounded-sm" type="submit">Sign Up</button>
    </div>
    </form>
  </div>
  )
}
