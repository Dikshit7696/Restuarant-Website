import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
        <ul className=' flex flex-col gap-2 '>
                <li className='hover:text-green-300 bg-slate-100 border flex justify-center'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='hover:text-green-300 bg-slate-100 border flex justify-center '>
                    <Link to='/about'>About</Link>
                </li>
                <li className='hover:text-green-300 bg-slate-100 border flex justify-center'>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li className='hover:text-green-300 bg-slate-100 border flex justify-center'>
                    <Link to='/menu'>Menu</Link>
                </li>
            </ul>
    </div>
  )
}

export default Menu
