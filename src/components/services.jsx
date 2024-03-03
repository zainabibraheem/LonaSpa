import React, {useState} from 'react';
import { servicesData } from '../data';
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";


const Services = () => {
 const [toggle, setToggle] = useState(false)
  
  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div className='bg-[#fad4a2bd] py-[80px]' id='services'>

      <div className='text-center px-10 mb-5 lg:mb-20 '>
        <h2 className='text-5xl lg:text-6xl font-serif mb-4'>What We Do</h2>
        <p className='text-md font-sans text-gray-800 leading-7 tracking-wide'>At LonaSpa, we offer a range of luxurious treatments designed to relax, rejuvenate, and pamper you from head to toe. Our expert therapists are committed to providing you with a blissful spa experience, tailored to your individual needs and preferences. Explore our comprehensive list of services below</p>
      </div>
      <div>
        {servicesData.map((service, index) => {
          return (
            <div className='px-6 lg:px-10 lg:mt-6' key={index}>
              <div className='border-b border-gray-700 p-4 '>
              <div className='flex justify-between items-center hover:scale-90 duration-700 ease-in '>
                <h2 className='text-xl lg:text-2xl'>{service.title}</h2>
                <div onClick={handleToggle}>{!toggle? <IoIosArrowBack size={20}/> : <IoIosArrowDown size={20}/>}</div>
              </div>

              <div className={toggle? 'flex flex-col gap-1 justify-start p-4 ease-in-out duration-500 ' : 'hidden'}>
                <p className='text-md font-sans text-gray-800 leading-7 tracking-wide'>{service.description}</p>
                <p className='text-md font-sans text-gray-800 leading-7 tracking-wide'> <span className='font-semibold'>Time:</span> {service.duration}</p>
                <p className='text-md font-sans text-gray-800 leading-7 tracking-wide'> <span className='font-semibold'>Price:</span> {service.price}</p>
              </div>

              </div>
              
              
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Services
