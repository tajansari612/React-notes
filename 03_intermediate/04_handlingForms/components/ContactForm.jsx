import { useState } from "react"

export default function LoginForm() {    
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [message, setmessage] = useState("")


    const handleFormSubmit = (e) =>{
        e.preventDefault()
        const userData = {
            username,
            email,
            message
        }
        console.log(userData);
        
    }
    
    return (
      <div id="container" className="h-screen w-screen flex justify-center items-center">
          <form onSubmit={(e) => (handleFormSubmit(e))} className="w-72">
            <div id="loginForm" className="flex flex-col p-4 shadow-lg">
                <h1 className="text-xl text-center font-semibold mb-5">Contact Form</h1>

                <label htmlFor="username">
                <p className="mb-1">Username:</p>
                </label>
                <input type="text" name="username" value={username} onChange={(e) => (setusername(e.target.value))} className="rounded py-[2px] px-1 mb-4" placeholder="Enter username" />

                <label htmlFor="email">
                <p className="mb-1">Email:</p>
                </label>
                <input type="email" name="email" value={email} onChange={(e) => (setemail(e.target.value))} className="rounded py-[2px] px-1 mb-4" placeholder="Enter email" />
                
                <label htmlFor="message">
                <p className="mb-1">Message:</p>
                </label>
                <textarea name="message" rows={5} value={message} onChange={(e) => (setmessage(e.target.value))} className="rounded-md py-[2px] px-1 mb-4"></textarea>

                <button type="submit" className="bg-blue-500 mt-4 py-1.5 px-4 text-white rounded-sm hover:bg-blue-400">Send Message</button>
            </div>
          </form>
      </div>
    )
  }
  