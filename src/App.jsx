import React from 'react'

import './App.scss'
import { BrowserRouter, Routes } from 'react-router-dom'
import Header from './comp/header/Header'

function App() {


  return (
    <>
      <div class="app">
        <BrowserRouter>
        <Header/>
        <Routes>
          
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
