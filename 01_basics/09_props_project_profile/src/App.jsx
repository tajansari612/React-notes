import Profile from "../components/Profile"
function App() {
  name = "Taj Mohammad Ansari"
  return (
    <>
      <Profile
        name={name}
        age={24}
        greeting={<div>Hey, {name} welcome to this tutorial.</div>}
      />
      
      <Profile
        name="Mohammad Ayaj"
        age={22}
        greeting={<div>Hey, Mohammad Ayaj welcome to this tutorial.</div>}
      />
    </>
  )
}

export default App
