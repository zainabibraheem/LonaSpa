import React from 'react'
import { BiCopyright } from 'react-icons/bi'


const Footer = () => {
  return (
    <div className='flex  flex-col items-start bg-[#ddaf86b9] md:flex-row md:justify-between py-5 px-4 md:px-8 lg:px-12'>
      <div className='flex items-center gap-1 justify-center text-sm font-sans text-gray-800 leading-7 tracking-wide'>
        <BiCopyright className='block'/> LonaSpa 2024 | Developed by Zainab
      </div>
      
      <div className='flex gap-6 text-[12px] font-sans text-gray-800 leading-7 tracking-wide'>
        <h3 className='hover:scale-125  hover:text-[#E4405F] hover:underline duration:700 ease-in-out'>REFUNDS</h3>
        <h3 className='hover:scale-125  hover:text-[#E4405F] hover:underline duration:700 ease-in-out'>TERMS</h3>
        <h3 className='hover:scale-125 hover:text-[#E4405F] hover:underline duration:700 ease-in-out'>PRIVACY</h3>
      </div>
    </div>
  )
}

export default Footer
