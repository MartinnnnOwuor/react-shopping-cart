import React from 'react'
import './App.css'
import Login from './component/Login'
import Dashboard from './component/Dashboard'
import Navbar from './component/Navbar'
import Home from "./component/Home"
import CustomersList from './component/CustomersList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './component/About'
import ShoppingCart from './component/ShoppingCart'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>} />
      <Route path='/dashboard'element={<Dashboard/>}/>
      <Route path='/customers' element={<CustomersList/>}/>
      <Route path='/about' element={<About />} />
      <Route path='/' element={<ShoppingCart/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App