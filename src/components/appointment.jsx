import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { servicesData } from '../data';
import interior from '../assets/interior2.jpg'

const Appointment = () => {
    const [dropdown, setDropdown] = useState(false)

    const handleDropdown = () => {
        setDropdown(!dropdown)
    }

    const [selectedService, setSelectedService] = useState('')

    const handleSelectedService = (service) => {
        setSelectedService(service.title)
    }

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        description: ''

    })

    function handleChange(event) {
        const { name, value } = event.target
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            username: '',
            email: '',
            phone: '',
            description: '' 
        })
        alert('Your appointent has been book succesfully, and appointment emails has been sent to your email');
        
    }

    return (
        <div className='grid md:grid-cols-2' id='appointment'>
            <div className='py-10 px-10' >

                <h2 className='text-2xl mb-3 text-center'>Schedule Your Appointment With Us</h2>

                <form className=' flex flex-col gap-5'>
                    <div>
                        <label className='text-sm text-gray-900' for='user-name'>Name</label> <br />
                        <input
                            className='w-full border border-gray-400 focus:outline-none focus:border-blue-500 rounded-md px-4 py-[7px]'
                            id='user-name'
                            name='username'
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className='text-sm text-gray-900' for=''>Email</label> <br />
                        <input
                            className='w-full border border-gray-400 focus:outline-none focus:border-blue-500 rounded-md px-4 py-[7px]'
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className='text-sm text-gray-900' for='phone'>Phone no</label> <br />
                        <input
                            className='w-full border border-gray-400 focus:outline-none focus:border-blue-500 rounded-md px-4 py-[7px]'
                            id='phone'
                            name='phone'
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='text-sm text-gray-900 border border-gray-400 p-2 rounded-md '>
                        <div className='flex justify-between items-center '>
                            <input
                                className='focus:outline-none'
                                placeholder='Select a service'
                                type='text'
                                name='service'
                                value={selectedService}
                                onChange={handleChange}
                            />
                            <div onClick={handleDropdown}>{dropdown ? <IoIosArrowDown size={15} /> : <IoIosArrowBack size={15} />}</div>

                        </div>

                        {dropdown && (
                            <div>
                            {servicesData.map((service, id) => {
                                return (
                                    <div className='mt-2' onClick={handleSelectedService}>
                                        {service.title}
                                    </div>
                                )
                            })}
                          </div>
                        )}

                      
                    </div>

                    <button onClick={handleSubmit} className='w-[5rem] rounded-md bg-[rgb(210,148,94)] p-2 text-lg font-semibold'>Send</button>
                </form>

            </div>

            <img className='xl:h-full' src={interior} alt='lonaSpa interior ' loaadin='lazy'/>
        </div>
    )
}

export default Appointment
