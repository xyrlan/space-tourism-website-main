import Image from "next/image";
import { useState, useEffect } from "react";




export default function Mars() {


 
    
    return(
        <div className={`selection:bg-gray-500 selection:bg-opacity-30 relative flex w-full justify-center xl:gap-[15%] lg:gap-[10%] md:gap-[5%] max-md:flex-col px-[2%] items-center h-full`}>
        <Image className="max-lg:scale-90 select-none md:hover:scale-105 duration-700 ease-out max-md:absolute max-md:-top-[350px]  max-md:scale-50 " src="/images/image-mars.png" width={380} height={380} alt="mars"  />
        <div className="w-[30%] max-md:w-[75%] max-md:px-5 max-md:text-center">
            <h4 className="text-9xl my-[4%] max-lg:my-[1%] max-md:text-7xl" >Mars</h4>
            <p className="border-gray-700 border-solid border-b h-[35%] max-lg:h-[40%]">  Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
  the tallest planetary mountain in our solar system. It’s two and a half times 
  the size of Everest!</p>
            <div className="flex justify-between max-md:mb-2"> 
                <div className="flex flex-col mt-[3%] max-lg:scale-90">
                    <a className="text-xl">Avg. distance</a>
                    <a className="text-4xl max-lg:text-2xl"> 225 mil. km</a>  
                </div>
                <div className="flex flex-col mt-[3%] text-end max-lg:scale-90">
                    <a className="text-xl">Est. travel time</a>
                    <a className="text-4xl max-lg:text-2xl">9 months</a>
                </div>
            </div>
        </div>
        </div>
    
    )
}