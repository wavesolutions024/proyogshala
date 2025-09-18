import React from 'react'

import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './comp/header/Header'
import Home from './pages/home/Home'
import Services from './pages/service/Services'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'

function App() {


  return (
    <>
      <div class="app">
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/services' element={<Services/>} />
          <Route  path='/about' element={<About/>} />
          <Route  path='/contact' element={<Contact/>} />
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
