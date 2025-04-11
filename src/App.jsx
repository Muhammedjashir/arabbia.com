import React from 'react'
import Home from './Home/Home'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className='font-Open-Sans font-light'>
      <BrowserRouter>
      <Home/>
      </BrowserRouter>
    </div>
  )
}

export default App
