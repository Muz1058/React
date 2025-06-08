import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (

    <div className="w-full h-screen"
      style={{ backgroundColor: color }}>
      <div className= 'fixed bottom-12 bg-white flex flex-wrap items-end gap-3 justify-center shadow-lg border-2 border-black rounded-full p-1 left-20 right-20'>
        <div>
          <button onClick={() => setColor("red")} className="m-1 px-4 py-1 rounded-full outline-none shadow-lg text-white " style={{ backgroundColor: 'red' }}
          >RED</button>
        </div>
        <div>
          <button onClick={() => setColor("green")} className="m-1 px-4 py-1 rounded-full outline-none shadow-lg text-white" style={{ backgroundColor: 'green' }}
          >Green</button>
        </div>
        <div>
          <button onClick={() => setColor("blue")} className="m-1 px-4 py-1 rounded-full outline-none shadow-lg text-white" style={{ backgroundColor: 'blue' }}
          >Blue</button>
        </div>
        <div>
          <button onClick={() => setColor("olive")} className="m-1 px-4 py-1 rounded-full outline-none shadow-lg text-white" style={{ backgroundColor: 'olive' }}
          >Olive</button>
        </div>
        
        <div>
          <button onClick={() => setColor("grey")} className="m-1 px-4 py-1 rounded-full outline-none shadow-lg text-white" style={{ backgroundColor: 'grey' }}
          >Grey</button>
        </div>
        <div>
          <button onClick={() => setColor("yellow")} className="m-1 px-4 py-1 rounded-full outline-none shadow-lg text-black" style={{ backgroundColor: 'yellow' }}
          >Yellow</button>
        </div>
        <div>
          <button onClick={() => setColor("pink")} className="m-1 px-4 py-1 rounded-full outline-none shadow-lg text-white" style={{ backgroundColor: 'pink' }}
          >Pink</button>
        </div>
        <div>
          <button onClick={() => setColor("purple")} className="m-1 px-4 py-1 rounded-full outline-none shadow-lg text-white" style={{ backgroundColor: 'purple' }}
          >Purple</button>
        </div>
       
        <div>
          <button onClick={() => setColor("lavender")} className="m-1 px-4 py-1 rounded-full outline-none shadow-lg text-black" style={{ backgroundColor: 'lavender' }}
          >Lavender</button>
        </div>
        <div>
          <button onClick={() => setColor("white")} className="m-1 px-4 py-1 rounded-full outline-none shadow-lg text-black" style={{ backgroundColor: 'white' }}
          >White</button>
        </div>
        <div>
          <button onClick={() => setColor("#000")} className="m-1 px-4 py-1 rounded-full outline-none shadow-lg text-white" style={{ backgroundColor: '#000' }}
          >Black</button>
        </div>
      </div>

    </div>

  )
}

export default App