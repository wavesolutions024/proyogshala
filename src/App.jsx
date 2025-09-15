import React from 'react'

import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './comp/header/Header'
import Home from './pages/home/Home'
import Services from './pages/service/Services'

function App() {


  return (
    <>
      <div class="app">
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/services' element={<Services/>} />
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
