import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Hero } from './components/Hero'

function App() {

  return (
    <div className='relative main flex place-items-center flex-col'>
      <video autoPlay muted playsInline loop id="bg-video" className='absolute right-0 top-0'>
        <source src="/video/video.mp4" type="video/mp4" />
      </video>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
