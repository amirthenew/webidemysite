import { useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import './App.css'
import Iconbar from './components/Iconbar';

function App() {


  return (
    <div className='bg-darkcolor'>
    <Header/>
  <Banner/>
  <Iconbar/>
    
    </div>

  )
}

export default App
