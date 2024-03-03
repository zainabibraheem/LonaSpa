import React, { useState } from 'react';
import { FiUserPlus } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [toggledNav, setToggledNav] = useState(false)

  const handleToggledNav = () => {
    setToggledNav(!toggledNav)
  }

  return (
    <div>
      <nav className='flex justify-between items-center bg-[#ddaf86] py-4 px-10'>
        <ul className='hidden lg:flex'>
          <li className='mr-10 font-semibold hover:scale-125'> <a href='#hero' >Home</a> </li>
          <li className='mr-10 font-semibold hover:scale-125'> <a href='#about' >About</a> </li>
          <li className='mr-10 font-semibold hover:scale-125'> <a href='#services' >Services</a> </li>
          <li className='mr-10 font-semibold hover:scale-125'> <a href='#contact' >Contact</a> </li>
        </ul>

        <div className={toggledNav ? 'p-4 flex flex-col fixed top-0 left-0 h-screen w-[50%] z-10 bg-white duration-800 ease-in-out' : 'hidden'}>

          <div className='text-center' onClick={handleToggledNav}>
            {toggledNav ? <MdOutlineClose size={25} /> : <RxHamburgerMenu size={25} />}
          </div>

          <ul className='mt-4 py-5 px-2 '>
            <li className='p-4 cursor-pointer hover:bg-[#fad4a256] border-b font-semibold hover:scale-105 duration-500 ease-in-out'
              onClick={() => { setToggledNav(false) }}
            >
              <a href='#hero' >Home</a>
            </li>

            <li className='p-4 cursor-pointer border-b hover:bg-[#fad4a256] font-semibold hover:scale-105 duration-500 ease-in-out'
              onClick={() => { setToggledNav(false) }}
            > 
              <a href='#about' >About</a> 
            </li>
            
            <li className='p-4 cursor-pointer border-b hover:bg-[#fad4a256] font-semibold hover:scale-105 duration-500 ease-in-out'
              onClick={() => { setToggledNav(false) }}
            > 
             <a href='#services' >Services</a> 
            </li>
            
            <li className='p-4 cursor-pointer border-b hover:bg-[#fad4a256] font-semibold hover:scale-105 duration-500 ease-in-out'
              onClick={() => { setToggledNav(false) }}
            > 
              <a href='#contact' >Contact</a>
             </li>
          </ul>

        </div>


        <div className='lg:hidden hover:scale-125' onClick={handleToggledNav}>
          {toggledNav ? <MdOutlineClose size={25} /> : <RxHamburgerMenu size={25} />}
        </div>

        <h2 className='font-semibold text-gray-900 text-3xl'>Lona-Spa</h2>
        <FiUserPlus className='hover:scale-125' size={25} />
      </nav>

    </div>
  )
}

export default Navbar
