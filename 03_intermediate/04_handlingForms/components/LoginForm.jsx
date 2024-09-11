import { useState } from "react"

export default function LoginForm() {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")


    const handleFormSubmit = (e) =>{
        e.preventDefault()
        const userData = {
            username,        //username: username
            password         //password: password
        }
        console.log(userData);
        
    }
    
    return (
      <div id="container" className="h-screen w-screen flex justify-center items-center">
          <form onSubmit={(e) => (handleFormSubmit(e))} className="w-72">
            <div id="loginForm" className="flex flex-col p-4 shadow-lg">
                <h1 className="text-xl text-center font-semibold mb-5">Login Form</h1>

                <label htmlFor="username">
                <p className="mb-1">Username:</p>
                </label>
                <input type="text" name="username" value={username} onChange={(e) => (setusername(e.target.value))} className="rounded py-[2px] px-1 mb-4" placeholder="Enter username" />

                <label htmlFor="password">
                <p className="mb-1">Password:</p>
                </label>
                <input type="password" name="password" value={password} onChange={(e) => (setpassword(e.target.value))} className="rounded py-[2px] px-1 mb-4" placeholder="Enter password" />

                <button type="submit" className="bg-blue-500 mt-4 py-1.5 px-4 text-white rounded-sm hover:bg-blue-400">Login</button>
            </div>
          </form>
      </div>
    )
  }
  