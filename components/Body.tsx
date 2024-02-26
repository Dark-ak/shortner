/* eslint-disable react/no-unescaped-entities */
'use client'

import React, { useState } from 'react'
import axios from 'axios'
import Brand from "@/public/icon-brand-recognition.svg"
import Record from "@/public/icon-detailed-records.svg"
import Custom from "@/public/icon-fully-customizable.svg"
import Image from 'next/image'


interface URLdata {
  url: String,
  short: String
}

const Body = () => {


  const [data, setData] = useState<URLdata[]>([])
  const [link, setLink] = useState<string>("");
  const [error, setError] = useState(false)


  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!link) {
      setError(true);
    }
    else {
      try {
        const response = await axios.post("api/", { url: link })
        const values = {
          url: link,
          short: response.data.result_url
        }
        setData([...data, values])
        setLink("")

      } catch (error) {
        console.log(error)
      }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value)
  }

  return (
    <div className='bg-[#EFF1F7] pb-16'>
      <div className='flex relative flex-col items-center justify-center w-full '>

        <div className='pt-32 md:pt-14 w-full flex flex-col items-center mt-5 gap-3'>
          {data.map((links: URLdata, index) => (
            <div className='bg-white md:w-[70%] w-[90%] flex  flex-col md:flex-row md:justify-end py-0 md:py-2 md:items-end rounded-lg' key={index}>
              <p className='px-4 py-2 text-violet-800 text-base md:px-5 md:py-4 font-medium'>{links.url}</p>
              <div className='pt-2 flex flex-col md:flex-row md:items-center md:justify-end gap-4 fl border-t-2 md:border-0 w-full border-gray px-4 py-2'>
                <a className='text-cyan font-medium text-base' href={links.short as string} target='_blank'>{links.short}</a>
                <button className='bg-cyan w-full md:w-28 text-white text-center py-2 font-medium rounded-lg'>Copy</button>
              </div>
            </div>
          ))}

          <div>

          </div>
        </div>
        <div className='absolute bg-violet-500 w-[90%] md:w-[70%] -top-14 rounded-lg'>
          <div className='bg-boost pt-6 pb-7 rounded-lg px-4'>
            {error && <p className='flex px-2 md:px-10 text-red font-medium'>Enter Url</p>}
            <div className='flex flex-col lg:flex-row justify-center items-center  gap-5 rounded-lg'>
              <input type="text" placeholder='Shorten link here...' className={`w-[95%] md:w-[80%] text-lg px-3 py-3 rounded-lg focus:${error ? "outline-red border-red border-4" : "outline-none"}`} onChange={handleChange} />
              <button className='text-white bg-cyan px-6 py-3 rounded-lg w-[95%] lg:w-[15%]' onClick={handleClick} >Shorten</button>
            </div>
          </div>

        </div>




        <div className='pt-5'>
          <div className='flex flex-col gap-2 justify-center items-center pt-16'>
            <p className='text-2xl md:text-4xl text-violet-800 font-bold'>Advanced Statistics</p>
            <p className='text-center text-gray font-semibold w-[80%]'>Track how your links are performing  across the web  with our advanced statistics dashboard.</p>
          </div>

          <div className='flex flex-col  px-16 lg:flex-row gap-16 py-10 '>
            <div className='pt-8 md:py-12'>
              <div className='flex flex-col items-center md:items-start relative rounded bg-white px-5 pt-14 pb-6 w-[300px] md:w-fit'>
                <div className='rounded-full absolute bg-violet-500 p-4 flex justify-start  -top-8 '>
                  <Image src={Brand} width={35} alt='brand' />
                </div>

                <div className='flex flex-col items-center md:items-start gap-2'>
                  <p className='text-2xl text-violet-500 text-center font-bold'>Brand Recognition</p>
                  <p className='text-gray text-lg font-medium text-center md:text-start'>Boost your brand recognition with each links doesn't mean a thing. Brands links help instil confidence in your content.</p>
                </div>
              </div>
            </div>

            <div className=' md:py-16'>
              <div className='flex flex-col items-center md:items-start relative rounded bg-white px-5 pt-14 pb-6 w-[300px] md:w-fit'>
                <div className='rounded-full absolute bg-violet-500 p-4 flex justify-start  -top-8 '>
                  <Image src={Record} width={35} alt='brand' />
                </div>

                <div className='flex flex-col items-center md:items-start gap-2'>
                  <p className='text-2xl text-violet-500 text-center font-bold'>Detailed Records</p>
                  <p className='text-gray text-lg font-medium text-center md:text-start'>Gain insights who is clicking your links. Knowing when and where people engage with your content help inform better decisions</p>
                </div>
              </div>
            </div>

            <div className='md:py-[84px]'>
              <div className='flex flex-col items-center md:items-start relative rounded bg-white px-5 pt-14 pb-6 w-[300px] md:w-fit'>
                <div className='rounded-full absolute bg-violet-500 p-4 flex justify-start -top-8'>
                  <Image src={Custom} width={35} alt='brand' />
                </div>

                <div className='flex flex-col items-center md:items-start gap-2'>
                  <p className='text-2xl text-violet-500 font-bold text-center'>Fully Customisable</p>
                  <p className='text-gray text-lg font-medium text-center md:text-start'>Improve brand awareness and content  dicoveribility  through customizable links, supercharging audience engagement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Body