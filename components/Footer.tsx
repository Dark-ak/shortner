import React from 'react'
import Logo from "@/public/logo.svg"
import Image from 'next/image'
import fb from "@/public/icon-facebook.svg"
import x from "@/public/icon-twitter.svg"
import pint from "@/public/icon-pinterest.svg"
import insta from "@/public/icon-instagram.svg"


const Footer = () => {
  return (
    <div className='bg-violet-800 md:px-32 py-20'>
      <div className='flex flex-col md:gap-10 lg:gap-0 lg:flex-row items-center justify-center md:items-start md:justify-evenly'>
        <p className='text-white font-bold text-5xl'>Shortly</p>
        <div className='flex flex-col md:items-start md:flex-row gap-6 md:gap-14'>
          <div className='flex flex-col items-center md:items-start pt-5 md:pt-0'>
            <p className='text-lg font-bold text-white'>Features</p>
            <div className='flex flex-col items-center md:items-start gap-1 pt-3'>
              <p className='text-violet-100 font-medium '>Link Shortening</p>
              <p className='text-violet-100 font-medium '>Branded Links</p>
              <p className='text-violet-100 font-medium '>Analytics</p>
            </div>
          </div>
          <div className='flex flex-col items-center md:items-start'>
            <p className='text-lg font-bold text-white'>Resources</p>
            <div className='flex flex-col items-center md:items-start gap-1 pt-3'>
              <p className='text-violet-100 font-medium '>Blog</p>
              <p className='text-violet-100 font-medium '>Developers</p>
              <p className='text-violet-100 font-medium '>Support</p>
            </div>
          </div>
          <div className='flex flex-col items-center md:items-start gap-1 '>
            <p className='text-lg font-bold text-white'>Company</p>
            <div className='flex flex-col items-center md:items-start gap-1 pt-3'>
              <p className='text-violet-100 font-medium '>About</p>
              <p className='text-violet-100 font-medium '>Our Teams</p>
              <p className='text-violet-100 font-medium '>Careers</p>
              <p className='text-violet-100 font-medium '>Contacts</p>
            </div>

          </div>


          <div className='flex items-start justify-center gap-4'>
            <Image src={fb} width={25} alt='facebook' className='cursor-pointer'/>
            <Image src={x} width={25} alt='twitter' className='cursor-pointer'/>
            <Image src={pint} width={25} alt='pinterest' className='cursor-pointer'/>
            <Image src={insta} width={25} alt='instagram' className='cursor-pointer'/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer