import React from 'react';
import lonaspa from '../assets/lonaspa2.jpg'
import Navbar from './navbar';

const Hero = () => {
  const style = {
    backgroundImage : `url(
        ${lonaspa})`,
  }

  return (
    <div style={style}
     className='h-screen bg-cover'
    > 
    <Navbar/>
      <div className='text-gray-900 flex absolute bottom-8 flex-col gap-4  px-8 lg:w-2/4 ' id='hero'>
        <h2 className=' text-3xl font-semibold lg:text-5xl'>Relax & Rejuvenate today.</h2>
        <p className='text-lg text-gray-800 font-semibold'>We provide a unique atmosphere that connects the mind, spirit and body through different healing therapies.</p>
        <a href='#appointment' >
          <button className='w-[14rem] bg-[rgb(210,148,94)] py-3 text-lg font-semibold'>Schedule Appointment</button>
        </a>
      </div>
    </div>
  )
}

export default Hero
