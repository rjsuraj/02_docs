import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'

function App() {
  return (
    <div className="wrapper relative w-full h-screen">
      <Background/>
      <Foreground/>
    </div>
  )
}

export default App  