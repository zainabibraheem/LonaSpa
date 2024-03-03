import React from 'react';
import { aboutData } from '../data';

const About = (data) => {
    return (
        <div className='bg-[#F9F8F8] px-10 py-20' id='about'>
            <div className='text-gray-900 text-center'>
                <h2 className='text-5xl font-serif mb-2'>ABOUT US</h2>
                <h2 className='text-3xl font-serif mb-7'>Your Relaxation Journey Starts Here</h2>
                <p className='text-md font-sans text-gray-800 leading-7 tracking-wide'>Welcome to LonaSpa, we offer a blend of African, Asian, and Western styles to achieve an exceptional Spa Experience. Our services includes spa treatments, customized skincare and meditation classes that nutures the body, mind, and spirit.
                    At LonaSpa, we believe in the power of tranquility to rejuvenate both body and soul. Nestled in the heart of Lagos, our spa is a haven for those seeking respite from the stresses of daily life. Escape the hustle and bustle of everyday life and embark on a journey of self-care and renewal at LonaSpa. We invite you to unwind, recharge, and rediscover your inner peace with us.
                </p>
            </div>

            <div className='mt-20 flex gap-20 flex-wrap justify-center items-center' >
                {aboutData.map((data, index) => {
                    return (
                        <div className='' key={index}>
                            <div className='w-[250px] h-[350px] border-[1px] border-gray-400 overflow-hidden rounded-full hover:scale-105 group relative mb-3'>
                              <img className='w-full h-full' src={data.image} alt={data.title}/>
                              <span className='text-center text-2xl hidden group-hover:block transform-y-8 absolute bottom-0 text-gray-900 bg-white w-full p-8 transition-all duration-300 ease-in-out'>
                              <h3 className=''>{data.title}</h3>
                              </span>
                            </div>
                            
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default About
