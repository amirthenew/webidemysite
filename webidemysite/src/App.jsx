import { useState } from 'react'
import Header from './components/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
<div>


      <Header/>
<h1 className='text-3xl text-webidemy font-bold '>webidemy</h1>


    </div>
  )
}

export default App
