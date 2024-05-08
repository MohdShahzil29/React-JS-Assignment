import React from 'react'
import Logo from '../../../assets/logo.png'
import { IoMdClose } from "react-icons/io"
import { useNavigate } from 'react-router-dom';
const RoutingNavbar = () => {
  const navigate = useNavigate();

  const handelclicker = () => {
    navigate('/')
  }
  return (

    <div>
      <div className='flex justify-between items-center mt-4 mr-[4rem] ml-[4rem] p-[9px]'>
        <div>
          <img className='ml-[2rem]' src={Logo} alt="Logo Image" />
        </div>
        <div className='flex mr-[4rem] gap-5 rounded-full shadow-outline-black p-3'>
          <IoMdClose className=' cursor-pointer' onClick={handelclicker} size={25} />
        </div>
      </div>
    </div>
  )
}

export default RoutingNavbar