import React from 'react'
import LoginComponent from './components/LoginComponent'
import MainComponent from './components/MainComponent'
// import NavbarComponent from './components/NavbarComponent'
// import FooterComponent from './components/FooterComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ReqAuth from './common/ReqAuth'
import Auth from './common/Auth'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={
            <ReqAuth><LoginComponent/></ReqAuth>
          } />
          <Route path='/' element={
            <Auth><MainComponent/></Auth>
          } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
