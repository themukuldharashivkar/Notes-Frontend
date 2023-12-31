import React from 'react';

export default function Contact() {
  return (
    <div className='flex flex-col justify-center min-h-screen w-full bg-gray-800'>
        {/* <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={loginImg} alt="" />
        </div> */}

        <div className='bg-gray-800 flex flex-col justify-center m-5 mt-28'>
            <form className='max-w-[400px] w-full mx-auto rounded bg-gray-900 p-8 px-8 m-5'>
                <h2 className='text-xl md:text-2xl lg:text-4xl dark:text-white font-bold text-center'>CONTACT US</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Name</label>
                    <input className='rounded bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" placeholder='Enter you name' />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Email</label>
                    <input className='rounded bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" placeholder='Enter you email' />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Message</label>
                    <textarea rows="5" className='p-2 resize-none rounded bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="message" placeholder='Enter your message' />
                </div>
                <button className='w-full my-5 py-2 bg-indigo-600 shadow-lg  hover:bg-indigo-400 
    duration-500 text-white font-semibold rounded'>SEND MESSAGE</button>
                
            </form>
        </div>
    </div>
  )
}