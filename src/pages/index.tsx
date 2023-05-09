import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'  
import Head from 'next/head'
import Link from 'next/link'

import { useState } from 'react'
import Destination from './destination'
import Crew from './crew'
import Technology from './technology'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    
    <>
    <Head>
      <title>Space tourism website</title>
      <link rel="icon" type="image/svg" sizes="32x32" href="/images/logo.svg"></link>
    </Head>
    <Navbar/>
    <section id='home' className="selection:bg-gray-500 selection:bg-opacity-30 font-genos md:bg-deskhome max-sm:bg-mobilehome sm:bg-tablethome h-screen bg-cover relative section flex p-2 items-end">
      <div className='mainbg' />


      <div className='flex max-md:flex-col justify-between px-[15%] max-md:px-[5%] pb-[5%] items-center z-20'>
        <div className='flex flex-col md:w-[40%] max-md:w-full max-md:items-center gap-6 max-md:gap-2 '>
          <h1 className='text-4xl'>So, you want to travel to</h1>
          <h6 className='text-9xl md:text-end'>SPACE</h6>
          <p className='mt-6 text-justify'>
          Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!</p>
        </div>

        <div
        onClick={() => {
        document.getElementById("destination")?.scrollIntoView()
    }} 
        className='cursor-pointer select-none h-60 w-60 max-md:h-40 max-md:w-40 rounded-full bg-white flex justify-center items-center hover:scale-105 duration-500 md:inline-flex max-md:mt-10'>
          <h4 className='text-black text-5xl max-md:text-3xl select-none'>Explore</h4>
        </div>
      </div>
      
    </section>
    
    <Destination />
    <Crew />
    <Technology />
    </>
  )
}
