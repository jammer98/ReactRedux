import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addtodo from './components/Addtodo'
import Todos from './components/todos'

function App() {
  

  return (
    <div className='bg-red-200 h-screen text-center '>
      <div className='p-4 flex flex-warp justify-center items-center'>
        <Addtodo/>
      </div>
      <Todos/>
    
    </div>
  )
}

export default App
