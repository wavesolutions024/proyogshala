import React from 'react'

import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './comp/header/Header'

function App() {


  return (
    <>
      <div class="app">
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route/>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
