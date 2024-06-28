import React from 'react'
import Layout from '../Layouts/Layout'
import { MdSupportAgent } from "react-icons/md";

import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";

const Contact = () => {
  const iconSize = 25;
  return (
    <Layout>
      <div className='my-10 mx-10'>
        <h1 className='font-bold text-2xl mb-3'>Contact My Restaurant</h1>
        <p className='mb-6'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, delectus. Vero voluptatibus autem alias id fuga. Sint molestias sunt ducimus inventore velit ad ipsum, libero esse soluta voluptatum ex, excepturi cum at laborum.
        </p>
        <table className='table-auto border-b border-gray-300 w-2/5	 '>
          <thead>
            <tr>
              <th className='bg-black text-white p-4 ' >Contact Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='p-4 flex items-center border-b border-gray-300'>
                <MdSupportAgent className='mr-2 transition duration-600 ease-in-out transform hover:scale-110 hover:text-green-300' size={iconSize}/>
                1800-00-0000 (tollfree)
              </td>
            </tr>
            <tr>
              <td className='p-4 flex items-center border-b border-gray-300 '>
                <MdMarkEmailRead className='mr-2 transition duration-600 ease-in-out transform hover:scale-110 hover:text-green-300' size={iconSize} />
                info@restaurant.com
              </td>
            </tr>
            <tr>
              <td className='p-4 flex items-center border-b border-gray-300'>
                <FaPhoneVolume className='mr-2 transition duration-600 ease-in-out transform hover:scale-110 hover:text-green-300' size={iconSize} />
                1234567890
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export default Contact
