import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'


export default function App() {
  return (
    <div>
     <NavBar/>
     <Outlet/>
     <Footer/>
    </div>

  )
}
