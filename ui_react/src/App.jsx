import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { Suspense, lazy } from 'react'
import Aboutus from './Components/public/Aboutus'
import Loading from './Components/public/Loading'
import Home from './pages/Home'
import Weblayout from './layout/Weblayout'
import Admindashboard from './pages/admin/Admindashboard'
import Userdashboard from './pages/user/Userdashboard'

const Signup =lazy(()=> import('./pages/auth/Signup')) 
const Contact =lazy(()=> import('./pages/Contact'))
const Login =lazy(()=> import('./pages/auth/Login'))

const App =()=> {
  return (
    <>
    <BrowserRouter>
    <Suspense fallback={<Loading/>}>
    <Routes>
      
      <Route element={<Weblayout/>}>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/aboutus" element={<Aboutus />}></Route>
      </Route>

      <Route element={<Admindashboard/>}>
        <Route path="/admin/dashboard" element={<Admindashboard/>}></Route>
      </Route>

      <Route element={<Userdashboard/>}>
        <Route path="/user/dashboard" element={<Userdashboard/>}></Route>
      </Route>

    </Routes>
    </Suspense>
    </BrowserRouter>
    </>
  )
}

export default App