'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import logo from "@/public/logo.svg"

const Nav = () => {

  const [show, setShow] = useState(true);

  return (
    <div className='pt-12 px-6 lg:px-24'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-16 items-center'>
          <Image src={logo} width={150} alt='logo' />
          <div className='hidden lg:flex gap-5'>
            <a href="" className='text-gray font-poppins font-bold text-[18px] hover:text-violet-800'>Features</a>
            <a href="" className='text-gray font-poppins font-bold text-[18px] hover:text-violet-800'>Pricing</a>
            <a href="" className='text-gray font-poppins font-bold text-[18px] hover:text-violet-800'>Resources</a>
          </div>
        </div>

        {
          show &&
          <div className="absolute w-[90%] pr-4 top-24 lg:hidden">
            <div className='bg-violet-500 flex flex-col justify-center rounded-lg'>
              <div className='flex flex-col items-center py-6 gap-6'>
                <p className='text-white font-bold'>Features</p>
                <p className='text-white font-bold'>Pricing</p>
                <p className='text-white font-bold'>Resources</p>
              </div>

              <hr className='text-violet-100' />

              <div className='flex flex-col px-5 gap-4 items-center py-6'>
                <p className='text-white font-bold'>Login</p>
                <button className='py-2 px-5 rounded-full bg-cyan font-bold text-white hover:bg-opacity-70 w-full'>Sign Up</button>
              </div>
            </div>
          </div>
        }

        <div className='lg:hidden' onClick={() => { setShow(!show) }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-violet-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>

        <div className='hidden lg:flex gap-8 items-center'>
          <p className='text-[18px] font-bold text-gray hover:text-violet-800 cursor-pointer'>Login</p>
          <button className='py-2 px-5 rounded-full bg-cyan font-bold text-white hover:bg-opacity-70'>Sign Up</button>
        </div>
      </div>


    </div>
  )
}

export default Nav