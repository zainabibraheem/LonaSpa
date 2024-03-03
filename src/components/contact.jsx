import React from 'react';
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
    return (
        <div className='flex gap-8 flex-col bg-[#fad4a256] md:flex-row md:justify-between py-[50px] px-4 md:px-8 lg:px-12'>
            <div>
                <h2 className='text-xl text-black'>Address</h2>
                <p className='text-md font-sans text-gray-800 leading-7 tracking-wide'>Located in VI, Lagos, Nigeria</p>
            </div>

            <div className=''>
                <h2 className='text-xl text-black'>Reach Out To Us</h2>
                <div className='flex gap-5 mt-2'>
                    <div className='border-[1px] hover:text-[#1877F2] hover:scale-105 w-[38px] h-[38px] flex justify-center items-center rounded-full border-black'><TiSocialFacebook size={25} /></div>
                    <div className='border-[1px] w-[38px] h-[38px] hover:text-[#1DA1F2] hover:scale-105 flex justify-center items-center p-1 rounded-full border-black'><FaTwitter size={20}/></div>
                    <div className='border-[1px] rounded-full  w-[38px] h-[38px] hover:text-[#E4405F] hover:scale-105 flex justify-center items-center p-1 border-black'><RiInstagramFill size={20} /></div>
                    <div className='border-[1px] w-[38px] h-[38px] hover:text-[#25D366] hover:scale-105 flex justify-center items-center p-1 rounded-full border-black'> <IoLogoWhatsapp  size={20}/></div>
                   
                </div>
            </div>

            <div>
                <h2 className='text-lg text-black' id='contact'>Say Hello</h2>
                <p className='text-md underline font-sans text-gray-800 leading-7 tracking-wide'>support@lonaspa.com</p>
                <p className='text-xl font-sans text-black leading-7 tracking-wide'>+2348100456376</p>
            </div>
        </div>
    )
}

export default Contact
