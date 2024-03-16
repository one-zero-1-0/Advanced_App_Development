import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/public/Navbar'
import Footer from '../Components/public/Footer'

const Weblayout = () => {
  return (
    <>
        <div className='h-screen w-screen p-0 m-0 flex-col justify-center'>
            <Navbar/>
            <div>
              <Outlet/>
            </div>
            <Footer/>
        </div>
    </>
  )
}

export default Weblayout