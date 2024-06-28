import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
    const iconSize = 20;
    return (
        <div>
            <h1 className='text-center 	bg-black	text-white p-3'>
            <div className='flex justify-center	text-center  items-center mb-1'>
                <Link to='https://www.instagram.com/'>
                <FaInstagram className='mr-3 hover:text-green-300 transition duration-600 ease-in-out transform hover:scale-110' size={iconSize} />
                </Link>
                <Link to='https://www.youtube.com/'>
                <FaYoutube className='mr-3 hover:text-green-300 transition duration-600 ease-in-out transform hover:scale-110' size={iconSize}  />
                </Link>
                <Link to='https://twitter.com/'>
                <FaTwitter className='mr-3 hover:text-green-300 transition duration-600 ease-in-out transform hover:scale-110' size={iconSize} />
                </Link>
                <Link to='https://github.com/'>
                <FaGithub className='mr-3 hover:text-green-300 transition duration-600 ease-in-out transform hover:scale-110' size={iconSize} />
                </Link>
           </div>

            All Rights Reserved &copy;</h1>
        </div>
    )
}

export default Footer
