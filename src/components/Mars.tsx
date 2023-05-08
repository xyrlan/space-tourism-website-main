import Image from "next/image";
import { useState, useEffect } from "react";




export default function Mars() {


 
    
    return(
        <div className={`selection:bg-gray-500 selection:bg-opacity-30 durantion-500 delay-200 transition-all ease-in-out relative flex w-full justify-center xl:gap-[15%] lg:gap-[10%] md:gap-[5%] `}>
        <Image className="  select-none hover:scale-105 duration-700 ease-out" src="/images/image-mars.png" width={380} height={380} alt="mars"  />
        <div className="flex-col w-[30%]">
            <h4 className="text-9xl my-[4%]" >Mars</h4>
            <p className="border-gray-700 border-solid border-b h-[35%]">  Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
  the tallest planetary mountain in our solar system. It’s two and a half times 
  the size of Everest!</p>
            <div className="flex justify-between "> 
                <div className="flex flex-col mt-[3%]">
                    <a className="text-xl">Avg. distance</a>
                    <a className="text-4xl"> 225 mil. km</a>  
                </div>
                <div className="flex flex-col mt-[3%]">
                    <a className="text-xl">Est. travel time</a>
                    <a className="text-4xl">9 months</a>
                </div>
            </div>
        </div>
        </div>
    
    )
}