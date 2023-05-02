import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    <>
    <Head>
      <title>Space tourism website</title>
      <link rel="icon" type="image/svg" sizes="32x32" href="/images/logo.svg"></link>
    </Head>
    <main className="md:bg-deskhome max-sm:bg-mobilehome sm:bg-tablethome h-screen w-screen bg-cover relative">
      <Navbar/>
      <div className='flex flex-col w-[30%] absolute bottom-10 left-[10%] gap-6'>
        <h1 className='text-4xl'>So, you want to travel to</h1>
        <h6 className='text-9xl text-end'>SPACE</h6>
        <p className='mt-8 text-justify'>
          Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!</p>
      </div>
      <div className='h-60 w-60 right-[15%] bottom-10 rounded-full bg-white absolute flex justify-center items-center'>
        <h4 className='text-black text-4xl'>Explore</h4>
      </div>

    </main>
    </>
  )
}
