import { Multistep } from "@/hooks/multistep"
import { useState } from "react";
import { CSSTransition } from 'react-transition-group'
import { setTimeout } from "timers";


import Vehicle from "@/components/Vehicle-tech";
import Capsule from "@/components/Capsule-tech";
import Spaceport from "@/components/Spaceport-tech";


export default function Technology() {

    const { currentStep, handleStepClick, goBackwards, goForwards } = Multistep(3);

    const [selectedButton, setSelectedButton] = useState("vehicle");

    function handleButtonClick(buttonValue: any) {
        setSelectedButton(buttonValue);
    }

    const MultiStepComponents = [<Vehicle key={currentStep}/>, <Capsule key={currentStep} />, <Spaceport key={currentStep} />]

    const [inProp, setInProp] = useState(false);

    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    function handleSwipe(direction: any) {
        if (direction === "left") {
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
        } else if (touchDiff < -80 && currentStep < 2) {
            handleSwipe("left");
            handleStepChange();
        }
        setTouchStart(0);
        setTouchEnd(0);

        console.log(touchDiff);
    }


    return (

        <>
            <section id="technology" className="selection:bg-gray-500 selection:bg-opacity-30 font-genos md:bg-desktech max-sm:bg-mobiletech sm:bg-tablettech h-screen flex flex-col md:justify-center bg-cover relative max-md:justify-end section gap-4">
                <div className='mainbg' />
                <h1 className="text-4xl w-fit max-md:mb-[3%] max-md:text-3xl z-20 ml-[14%]"><span className="text-[#a19797]">03</span> Space launch 101
                </h1>
                <div className="flex max-md:flex-col items-center justify-center md:ml-[10%] z-10">

                    <ul className="flex md:flex-col gap-7 max-xl:scale-90 max-lg:scale-75 z-20 ">
                        <button
                            className={` duration-500 ${currentStep === 0 ? "h-20 w-20 rounded-full border-white border-solid border-2 bg-white text-black text-6xl" : "h-20 w-20 rounded-full border-white border-solid border-2 hover:bg-gray-600 bg-transparent text-6xl"}`}
                            onClick={() => {
                                handleStepClick(0);
                                setSelectedButton("vehicle");
                                setInProp(true);
                                setTimeout(() => {
                                    setInProp(false);
                                }, 500);
                            }}> 1 </button>
                        <button
                            className={` duration-500 ${currentStep === 1 ? "h-20 w-20 rounded-full border-white border-solid border-2 bg-white text-black text-6xl" : "h-20 w-20 rounded-full border-white border-solid border-2 hover:bg-gray-600 bg-transparent text-6xl"}`}
                            onClick={() => {
                                handleStepClick(1);
                                setSelectedButton("capsule");
                                setInProp(true);
                                setTimeout(() => {
                                    setInProp(false);
                                }, 500);
                            }}> 2 </button>
                        <button
                            className={` duration-500 ${currentStep === 2 ? "h-20 w-20 rounded-full border-white border-solid border-2 bg-white text-black text-6xl" : "h-20 w-20 rounded-full border-white border-solid border-2 hover:bg-gray-600 bg-transparent text-6xl"}`}
                            onClick={() => {
                                handleStepClick(2);
                                setSelectedButton("spaceport");
                                setInProp(true);
                                setTimeout(() => {
                                    setInProp(false);
                                }, 500);
                            }}> 3 </button>
                    </ul>
                    <div onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}>
                        <CSSTransition
                            in={inProp} // renderiza o componente atual
                            timeout={500} // tempo em milissegundos da duração da animação
                            classNames="fade" // classes CSS da animação
                        >{MultiStepComponents[currentStep]}
                        </CSSTransition>
                    </div>
                </div>
            </section>
        </>
    )
}