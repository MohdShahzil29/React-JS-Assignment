import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-[#F5F5F5] rounded-full opacity-80 m-12 '>
      <div className='flex justify-between p-12'>
        <div className="left">
          <p>Talup 2023. All rights reserved</p>
        </div>
        <li className="right flex flex-row gap-3 cursor-pointer">
          <ul>
            Terms & Conditions
          </ul>
          <ul>
            Privacy Policy
          </ul>
        </li>
      </div>



    </div>
  )
}

export default Footer