import Commander from "@/components/Commander-crew";
import Specialist from "@/components/Specialist-crew";
import Pilot from "@/components/Pilot-crew";
import Engineer from "@/components/Engineer-crew";



import { Multistep } from "@/hooks/multistep"
import { useState, useRef, useEffect } from "react";
import { CSSTransition } from 'react-transition-group'
import { setTimeout } from "timers";
import { useSwipeable } from "react-swipeable";





export default function Crew() {

    const { currentStep, handleStepClick, goBackwards, goForwards } = Multistep(4);

    const [selectedButton, setSelectedButton] = useState("Commander");

    function handleButtonClick(buttonValue: any) {
        setSelectedButton(buttonValue);
    }

    const MultiStepComponents = [<Commander key={currentStep} />, <Specialist key={currentStep} />, <Pilot key={currentStep} />, <Engineer key={currentStep} />]

    const [inProp, setInProp] = useState(false);

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



    // useEffect(() => {
    //     setInProp(true);
    //     setTimeout(() => {
    //         setInProp(false);
    //     }, 500);
    // }, [currentStep])


    // {() => handleSwipe("right")}

    return (

        <>
            <section id="crew" className="selection:bg-gray-500 selection:bg-opacity-30 font-genos md:bg-deskcrew max-sm:bg-mobilecrew sm:bg-tabletcrew h-screen flex flex-col justify-end bg-cover relative section">
                <div className=' mainbg' />

                <h1 className="text-4xl w-fit max-md:mb-[3%] max-md:text-3xl z-20 ml-[14%]"><span className="text-[#a19797]">02</span> Meet your crew</h1>
                <div className="flex flex-col items-center">


                    <div 
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    className="z-20">
                        <CSSTransition
                            in={inProp} // renderiza o componente atual
                            timeout={500} // tempo em milissegundos da duração da animação
                            classNames="fade" // classes CSS da animação
                        >{MultiStepComponents[currentStep]}
                        </CSSTransition>
                    </div>


                    <ul className="flex justify-between gap-4 max-w-[150px] z-30 max-md:w-full m-10 md:absolute md:bottom-0">
                        <button
                            onClick={() => {
                                handleStepClick(0);
                                setSelectedButton("Commander");
                                setInProp(true);
                                setTimeout(() => {
                                    setInProp(false);
                                }, 500);
                            }}
                            className={` duration-500 ${currentStep === 0 ? 'bg-white scale-95 h-3 w-3  rounded-full shadow-lg' : 'h-3 w-3 hover:bg-gray-500 scale-105 rounded-full bg-[#4e4747] shadow-lg'}`}></button>
                        <button
                            onClick={() => {
                                handleStepClick(1);
                                setSelectedButton("Specialist");
                                setInProp(true);
                                setTimeout(() => {
                                    setInProp(false);
                                }, 500);

                            }}
                            className={`duration-500 ${currentStep === 1 ? 'bg-white scale-95 h-3 w-3  rounded-full shadow-lg' : 'h-3 w-3 hover:bg-gray-500 scale-105 rounded-full bg-[#4e4747] shadow-lg'}`}></button>
                        <button
                            onClick={() => {
                                handleStepClick(2);
                                setSelectedButton("Pilot");
                                setInProp(true);
                                setTimeout(() => {
                                    setInProp(false);
                                }, 500);

                            }}
                            className={`duration-500 ${currentStep === 2 ? 'bg-white scale-95 h-3 w-3  rounded-full shadow-lg' : 'h-3 w-3 hover:bg-gray-500 scale-105 rounded-full bg-[#4e4747] shadow-lg'}`}></button>
                        <button
                            onClick={() => {
                                handleStepClick(3);
                                setSelectedButton("Engineer");
                                setInProp(true);
                                setTimeout(() => {
                                    setInProp(false);
                                }, 500);

                            }}
                            className={` duration-500 ${currentStep === 3 ? 'bg-white scale-95 h-3 w-3  rounded-full shadow-lg' : 'h-3 w-3 hover:bg-gray-500 scale-105 rounded-full bg-[#4e4747] shadow-lg'}`}></button>
                    </ul>
                </div>
            </section>

        </>
    )
}