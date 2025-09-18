import React from 'react'

function App() {
  return (
    <div>
      <h1>Video Streaming</h1>
      <video controls height={500} >
        <source src='http://localhost:3000/videostreamrange'/>
      </video>
    </div>
  )
}

export default App