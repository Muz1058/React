import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import UserGreeting from './components/UserGreeting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <UserGreeting isLogedIn={true} username={"react"}  />
     <UserGreeting isLogedIn={false} username={"vite"}  />
    </>
  )
}

export default App
