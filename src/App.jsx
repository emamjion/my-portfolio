// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About/About'
import Header from './components/Header/Header'
import Home from './components/Home/Home'

function App() {
  return (
    <>
      {/* Header section */}
      <Header/>
      {/* Home section */}
      <main className='main'>
        {/* Home section */}
        <Home/>
        {/* About section */}
        <About/>
      </main>
    </>
  )
}

export default App
