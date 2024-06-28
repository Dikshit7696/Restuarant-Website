import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import Menu from '../components/Menu'
import { GiHamburgerMenu } from "react-icons/gi";



const Header = () => {
    const[menu,setMenu] =useState(false)
    return (
       <div>
         <div className='h-12 bg-black flex justify-between items-center'>
            <div className='flex items-center pl-10 text-white'>
                <img src={logo} alt='My Restaurant logo' className='h-8 w-8 mr-2 'style={{ filter: 'invert(1)', fill: 'white' }}/>
                <span>My Restaurant</span>
            </div>
            <div onClick={()=>setMenu(!menu)}  className='text-white sm:hidden pr-3 '>
            <GiHamburgerMenu />

            </div>
            <ul className=' space-x-8 pr-10 text-white list-none hidden sm:flex'>
                <li className='hover:text-green-300'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='hover:text-green-300'>
                    <Link to='/about'>About</Link>
                </li>
                <li className='hover:text-green-300'>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li className='hover:text-green-300'>
                    <Link to='/menu'>Menu</Link>
                </li>
            </ul>
        </div>
      {
        menu&&<Menu/>
      }
       </div>
    )
}

export default Header
