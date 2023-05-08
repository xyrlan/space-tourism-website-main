import Head from "next/head"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import { useState } from "react"
import { Multistep } from "@/hooks/multistep"

import Moon from "@/components/Moon"
import Mars from "@/components/Mars"
import Europa from "@/components/Europa"
import Titan from "@/components/Titan"





export default function Destination() {

    const {currentStep, handleStepClick} = Multistep(3);

    

    const [selectedButton, setSelectedButton] = useState("0");

    function handleButtonClick(buttonValue: any) {
      setSelectedButton(buttonValue);
    }

    const MultiStepComponents = [<Moon />, <Mars />, <Europa />, <Titan />];


    console.log(currentStep)


    return(
        <>
        <section id="destination" className="font-genos md:bg-deskdestination max-sm:bg-mobiledestination sm:bg-tabletdestination h-screen flex flex-col justify-end pb-10 bg-cover relative section">
            
                <h1 className="text-4xl w-fit ml-[13%]"><span className="text-[#a19797]">01</span> Pick your destination</h1>

                <div className="text-xl flex justify-end xl:w-[76%] lg:w-[80%] md:w-[90%] space-x-10 select-none">

                <div onClick={() => { 
                handleStepClick(0); 
                handleButtonClick("0");}} className={` hover:border-[#a19797] hover:border-b-2 cursor-pointer h-10 duration-500 ${selectedButton === "0" ? 'hover:border-white border-white border-solid border-b-2 ' : 'border-white border-solid border-b-2 border-opacity-0'} `}>
                <button>Moon</button>
                </div>
                <div onClick={() => { 
                handleStepClick(1); 
                handleButtonClick("1");}} className={`hover:border-[#a19797] hover:border-b-2 cursor-pointer h-10 duration-500 ${selectedButton === "1" ? 'hover:border-white border-white border-solid border-b-2 ' : 'border-white border-solid border-b-2 border-opacity-0'} `}>
                <button>Mars</button>
                </div>
                <div onClick={() => { 
                handleStepClick(2); 
                handleButtonClick("2");}} className={`hover:border-[#a19797] hover:border-b-2 cursor-pointer h-10 duration-500 ${selectedButton === "2" ? 'hover:border-white border-white border-solid border-b-2 ' : 'border-white border-solid border-b-2 border-opacity-0'} `}>
                <button>Europa</button>
                </div>
            <div onClick={() => { 
                handleStepClick(3); 
                handleButtonClick("3");}} className={`hover:border-[#a19797] hover:border-b-2 cursor-pointer h-10 duration-500 ${selectedButton === "3" ? 'hover:border-white border-white border-solid border-b-2 ' : 'border-white border-solid border-b-2 border-opacity-0'} `}>
            <button >Titan</button>

            </div>
 
        </div>
        <div className='duration-1000 delay-1000 transition-all'>
        {MultiStepComponents[currentStep]}
        </div>
        </section>
        </>

    )
}