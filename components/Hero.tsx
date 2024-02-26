import React from 'react'
import Working from "@/public/illustration-working.svg"
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='lg:pl-32 pt-20 lg:-mr-12 pb-32'>
      <div className='flex items-center flex-col-reverse lg:flex-row'>
        <div className='flex flex-col gap-6 md:items-start items-center'>
          <div className='flex flex-col items-center px-2 md:px-0 gap-2 md:w-[80%] pt-8 md:pt-0' >
            <p className='text-4xl md:text-7xl font-bold text-center md:text-start text-violet-500'>More than just short links</p>
            <p className='text-lg text-gray font-medium text-center md:text-start' >Build your brands recognition and get detailed insights on how your links are performing</p>
          </div>
          <button className='px-8 py-2 rounded-full text-lg bg-cyan font-bold text-white hover:bg-opacity-70'>
            Get Started
          </button>
        </div>

        <Image src={Working} alt='image' className='w-[350px] lg:w-[100%] -mr-12 lg:mr-0'/>
      </div>
    </div>
  )
}

export default Hero