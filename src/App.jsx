import { useState } from 'react'
import './App.css'

function App() {

  let [color ,setColor] = useState("white");

  return (
    <>
      <div style={{backgroundColor : color}} class="w-screen h-screen">
        <div class="w-screen h-16 fixed bottom-0 bg-gray-800 flex justify-around items-center">
          <button onClick={() => setColor("red")} class="w-20 h-10 bg-red-500 text-white rounded-lg shadow-lg font-semibold">
            Red
          </button>
          <button onClick={() => setColor("blue")} class="w-20 h-10 bg-blue-500 text-white rounded-lg shadow-lg font-semibold">
            Blue
          </button>
          <button onClick={() => setColor("green")} class="w-20 h-10 bg-green-500 text-white rounded-lg shadow-lg font-semibold">
            Green
          </button>
          <button onClick={() => setColor("yellow")} class="w-20 h-10 bg-yellow-500 text-gray-800 rounded-lg shadow-lg font-semibold">
            Yellow
          </button>
          <button onClick={() => setColor("purple")} class="w-20 h-10 bg-purple-500 text-white rounded-lg shadow-lg font-semibold">
            Purple
          </button>
        </div>
      </div>

    </>
  )
}

export default App
