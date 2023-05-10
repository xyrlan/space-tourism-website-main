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

    const { currentStep, handleStepClick, goBackwards, goForwards } = Multistep(4);


    const [selectedButton, setSelectedButton] = useState("Moon");

    function handleButtonClick(buttonValue: any) {

        setSelectedButton(buttonValue);
    }

    const MultiStepComponents = [<Moon />, <Mars />, <Europa />, <Titan />];


    const [inProp, setInProp] = useState(false); // para CSSTransition

    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    function handleSwipe(direction:  any) {
        if (direction === "left" ) {
            goForwards();
        } else if (direction === "right") {
            goBackwards();
        }
    }

    function handleStepChange() {
        setInProp(true);
        setTimeout(() => {
            setInProp(false);
        }, 500);
    }


    function handleTouchStart(e: any) {
        setTouchStart(e.targetTouches[0].clientX);
    }

    function handleTouchMove(e: any) {
        setTouchEnd(e.targetTouches[0].clientX);
    }

    function handleTouchEnd() {
        const touchDiff = touchEnd - touchStart;
        if (touchDiff > 50 && currentStep > 0) {
            handleSwipe("right");
            handleStepChange();
        } else if (touchDiff < -80  && currentStep < 3) {
            handleSwipe("left");
            handleStepChange();
        }
        setTouchStart(0);
        setTouchEnd(0);

        console.log(touchDiff);
    }

    return (
        <>
            <section id="destination" className="selection:bg-gray-500 selection:bg-opacity-30 font-genos md:bg-deskdestination max-sm:bg-mobiledestination sm:bg-tabletdestination h-screen flex flex-col justify-end  pb-10 bg-cover relative section items-center ">      <div className='mainbg' />

                <h1 className="text-4xl w-fit left-[13%] mb-[5%] max-md:mb-[3%] max-md:text-3xl absolute top-[20%]"><span className="text-[#a19797]">01</span> Pick your destination</h1>

                <div className="text-xl flex gap-4 max-md:justify-center select-none z-10">
                

                    <div onClick={() => {
                        handleStepClick(0);
                        handleButtonClick("Moon");
                        setInProp(true);
                        setTimeout(() => {
                            setInProp(false);
                        }, 500);
                    }}
                        className={` hover:border-[#a19797] hover:border-b-2 cursor-pointer h-10 duration-500 ${currentStep === 0 ? 'hover:border-white border-white border-solid border-b-2 ' : 'border-white border-solid border-b-2 border-opacity-0'} `}>
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
                        className={`hover:border-[#a19797] hover:border-b-2 cursor-pointer h-10 duration-500 ${currentStep === 1 ? 'hover:border-white border-white border-solid border-b-2 ' : 'border-white border-solid border-b-2 border-opacity-0'} `}>
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
                        className={`hover:border-[#a19797] hover:border-b-2 cursor-pointer h-10 duration-500 ${currentStep === 2 ? 'hover:border-white border-white border-solid border-b-2 ' : 'border-white border-solid border-b-2 border-opacity-0'} `}>
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
                        className={`hover:border-[#a19797] hover:border-b-2 cursor-pointer h-10 duration-500 ${currentStep === 3 ? 'hover:border-white border-white border-solid border-b-2 ' : 'border-white border-solid border-b-2 border-opacity-0'} `}>
                        <button >Titan</button>

                    </div>
                </div>
                <div onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}>
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