import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  const [profile, setProfile] = useState({ firstName: "", lastName: "" })
  return (
    <>
      
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div>
        <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
        <h2>Hello, {name ? name : 'Guest'}!</h2>
      </div>
      <div>
        <input type="text" placeholder="First Name" onChange={(e) => setProfile({ ...profile, firstName: e.target.value })} />
        <input type="text" placeholder="Last Name" onChange={(e) => setProfile({ ...profile, lastName: e.target.value })} />
        <h2>Your full name is: {profile.firstName} {profile.lastName}</h2>
      </div>
    </>
  )
}

export default App
