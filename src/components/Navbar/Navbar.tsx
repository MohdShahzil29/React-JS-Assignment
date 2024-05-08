import React from 'react'
import Logo from '../../assets/logo.png'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();

  const menuClicker = () => {
    navigate('/getProject');
  }

  const menuClick = () => {
    alert("Onboard Talent")
  }
  return (
    <div className='flex justify-between items-center mt-4 mr-[4rem] ml-[4rem] p-[9px] rounded-full shadow-outline-black'>
      <div>
        <img className='ml-[2rem]' src={Logo} alt="Logo Image" />
      </div>
      <div className='flex mr-[4rem] gap-5'>
         
        <Button btnName='Get projects' handleClick={menuClicker} classStyle='bg-white text-black rounded-full p-4 shadow-outline-black w-[9rem]' />
        <Button btnName='Onboard Talent' handleClick={menuClick} classStyle='bg-black text-white rounded-full p-4 shadow-outline-white w-[10rem]' />
      </div>
    </div>
  )
}

export default Navbar