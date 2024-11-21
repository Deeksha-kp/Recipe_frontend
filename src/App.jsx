import { useState } from 'react'
import './bootstrap.min.css'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home'
import Landing from './Pages/Landing'
import {Route,Routes} from 'react-router-dom'
import Header from './Components/Header'
import { ToastContainer } from 'react-toastify'

function App() {
  

  return (
    <>
    <Header/>
     <Routes>
      <Route path='/'element={<Landing/>}/>
      <Route path='/home'element={<Home/>}/>
     </Routes>
     <ToastContainer/>
      
   </>
  )
}

export default App
