import Image from "next/image";
import { useState } from "react";



export default function Europa() {
    


    return(
        <div className="transition-all duration-500 relative flex w-full justify-center xl:gap-[15%] lg:gap-[10%] md:gap-[5%]">
        <Image className="max-lg:scale-90 select-none hover:scale-105 duration-700 ease-out" src="/images/image-europa.png" width={380} height={380} alt="europa"  />
        <div className="flex flex-col max-lg:items-center w-[30%] ">
            <h4 className="text-9xl my-[4%] max-lg:scale-90" >Europa</h4>
            <p className="border-gray-700 border-solid border-b h-[35%] max-lg:h-[45%]">  The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
  winter lover’s dream. With an icy surface, it’s perfect for a bit of 
  ice skating, curling, hockey, or simple relaxation in your snug 
  wintery cabin.</p>
            <div className="flex justify-between w-full"> 
                <div className="flex flex-col mt-[3%] max-lg:scale-90">
                    <a className="text-xl">Avg. distance</a>
                    <a className="text-4xl max-lg:text-2xl">628 mil. km</a>  
                </div>
                <div className="flex flex-col text-end mt-[3%] max-lg:scale-90">
                    <a className="text-xl">Est. travel time</a>
                    <a className="text-4xl max-lg:text-2xl">3 years</a>
                </div>
            </div>
        </div>
        </div>
    
    )
}