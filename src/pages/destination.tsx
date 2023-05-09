import Head from "next/head"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import { useState } from "react"
import { Multistep } from "@/hooks/multistep"
import { CSSTransition } from "react-transition-group"

import Moon from "@/components/Moon"
import Mars from "@/components/Mars"
import Europa from "@/components/Europa"
import Titan from "@/components/Titan"





export default function Destination() {

    const { currentStep, handleStepClick } = Multistep(3);


    const [selectedButton, setSelectedButton] = useState("Moon");

    function handleButtonClick(buttonValue: any) {

        setSelectedButton(buttonValue);
    }

    const MultiStepComponents = [<Moon />, <Mars />, <Europa />, <Titan />];


    const [inProp, setInProp] = useState(false); // para CSSTransition

    return (
        <>
            <section id="destination" className="selection:bg-gray-500 selection:bg-opacity-30 font-genos md:bg-deskdestination max-sm:bg-mobiledestination sm:bg-tabletdestination h-screen flex flex-col justify-end  pb-10 bg-cover relative section ">      <div className='mainbg' />

                <h1 className="text-4xl w-fit ml-[13%] mb-[5%] max-md:mb-[3%] max-md:text-3xl absolute top-[20%]"><span className="text-[#a19797]">01</span> Pick your destination</h1>

                <div className="text-xl flex justify-end max-md:justify-center xl:mr-[19%] lg:mr-[12%] md:mr-[7%] space-x-[6%] max-lg:space-x-[4%] select-none z-10">
                

                    <div onClick={() => {
                        handleStepClick(0);
                        handleButtonClick("Moon");
                        setInProp(true);
                        setTimeout(() => {
                            setInProp(false);
                        }, 500);
                    }}
                        className={` hover:border-[#a19797] hover:border-b-2 cursor-pointer h-10 duration-500 ${selectedButton === "Moon" ? 'hover:border-white border-white border-solid border-b-2 ' : 'border-white border-solid border-b-2 border-opacity-0'} `}>
                        <button>Moon</button>
                    </div>
                    <div onClick={() => {
                        handleStepClick(1);
                        handleButtonClick("Mars");
                        setInProp(true);
                        setTimeout(() => {
                            setInProp(false);
                        }, 500);
                    }}
                        className={`hover:border-[#a19797] hover:border-b-2 cursor-pointer h-10 duration-500 ${selectedButton === "Mars" ? 'hover:border-white border-white border-solid border-b-2 ' : 'border-white border-solid border-b-2 border-opacity-0'} `}>
                        <button>Mars</button>
                    </div>
                    <div onClick={() => {
                        handleStepClick(2);
                        handleButtonClick("Europa");
                        setInProp(true);
                        setTimeout(() => {
                            setInProp(false);
                        }, 500);
                    }}
                        className={`hover:border-[#a19797] hover:border-b-2 cursor-pointer h-10 duration-500 ${selectedButton === "Europa" ? 'hover:border-white border-white border-solid border-b-2 ' : 'border-white border-solid border-b-2 border-opacity-0'} `}>
                        <button>Europa</button>
                    </div>
                    <div onClick={() => {
                        handleStepClick(3);
                        handleButtonClick("Titan");
                        setInProp(true);
                        setTimeout(() => {
                            setInProp(false);
                        }, 500);
                    }}
                        className={`hover:border-[#a19797] hover:border-b-2 cursor-pointer h-10 duration-500 ${selectedButton === "Titan" ? 'hover:border-white border-white border-solid border-b-2 ' : 'border-white border-solid border-b-2 border-opacity-0'} `}>
                        <button >Titan</button>

                    </div>
                </div>
                <div>
                    <CSSTransition
                        in={inProp} // renderiza o componente atual
                        timeout={500} // tempo em milissegundos da duração da animação
                        classNames="fade" // classes CSS da animação
                    >
                        {MultiStepComponents[currentStep]}
                    </CSSTransition>
                </div>
                



            </section>
        </>

    )
}