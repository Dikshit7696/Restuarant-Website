import React from 'react'
// import Layout from './Layouts/Layout'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
    return (
        <div>
           <BrowserRouter>
           <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='*' element={<NotFound/>}/>
           </Routes>
           </BrowserRouter>

            

        </div>
    )
}

export default App
