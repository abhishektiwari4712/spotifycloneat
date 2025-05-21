import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/sidebar'
import MainSection from './components/mainsection/mainsection'
function App() {


  return (
    <>
      <div className="main-container">
        <Navbar />
        <div className="mainSectionContentContainer">
          <Sidebar />
          <MainSection />

        </div>
      </div>
    </>
  )
}

export default App
