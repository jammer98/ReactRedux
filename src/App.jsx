import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addtodo from './components/Addtodo'
import Todos from './components/todos'

function App() {
  

  return (
    <>
     <h1 className='bg-red-400'>this is redux toolkit </h1>

     <Addtodo/>
     <Todos/>
    </>
  )
}

export default App
