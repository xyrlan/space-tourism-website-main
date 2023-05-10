import Commander from "@/components/Commander-crew";
import Specialist from "@/components/Specialist-crew";
import Pilot from "@/components/Pilot-crew";
import Engineer from "@/components/Engineer-crew";



import { Multistep } from "@/hooks/multistep"
import { useState } from "react";
import { CSSTransition } from 'react-transition-group'
import { setTimeout } from "timers";




export default function Crew() {

    const { currentStep, handleStepClick } = Multistep(3);

    const [selectedButton, setSelectedButton] = useState("Commander");

    function handleButtonClick(buttonValue: any) {
        setSelectedButton(buttonValue);
    }

    const MultiStepComponents = [<Commander />, <Specialist />, <Pilot />, <Engineer />]

    const [inProp, setInProp] = useState(false);


    return (

        <>
            <section id="crew" className="selection:bg-gray-500 selection:bg-opacity-30 font-genos md:bg-deskcrew max-sm:bg-mobilecrew sm:bg-tabletcrew h-screen flex flex-col justify-end bg-cover relative section">
                <div className=' mainbg' />

                <h1 className="text-4xl w-fit max-md:mb-[3%] max-md:text-3xl z-20 ml-[14%]"><span className="text-[#a19797]">02</span> Meet your crew</h1>
                <div className="flex flex-col items-center">
                    <CSSTransition
                        in={inProp} // renderiza o componente atual
                        timeout={500} // tempo em milissegundos da duração da animação
                        classNames="fade" // classes CSS da animação
                    >{MultiStepComponents[currentStep]}
                    </CSSTransition>
                    <ul className="flex justify-between gap-4 max-w-[150px] z-10 max-md:w-full m-10 md:absolute md:bottom-0">
                        <button
                            onClick={() => {
                                handleStepClick(0);
                                setSelectedButton("Commander");
                                setInProp(true);
                                setTimeout(() => {
                                    setInProp(false);
                                }, 500);
                            }}
                            className={` duration-500 ${selectedButton === "Commander" ? 'bg-white scale-95 h-3 w-3  rounded-full shadow-lg' : 'h-3 w-3 hover:bg-gray-500 scale-105 rounded-full bg-[#4e4747] shadow-lg'}`}></button>
                        <button
                            onClick={() => {
                                handleStepClick(1);
                                setSelectedButton("Specialist");
                                setInProp(true);
                                setTimeout(() => {
                                    setInProp(false);
                                }, 500);

                            }}
                            className={`duration-500 ${selectedButton === "Specialist" ? 'bg-white scale-95 h-3 w-3  rounded-full shadow-lg' : 'h-3 w-3 hover:bg-gray-500 scale-105 rounded-full bg-[#4e4747] shadow-lg'}`}></button>
                        <button
                            onClick={() => {
                                handleStepClick(2);
                                setSelectedButton("Pilot");
                                setInProp(true);
                                setTimeout(() => {
                                    setInProp(false);
                                }, 500);

                            }}
                            className={`duration-500 ${selectedButton === "Pilot" ? 'bg-white scale-95 h-3 w-3  rounded-full shadow-lg' : 'h-3 w-3 hover:bg-gray-500 scale-105 rounded-full bg-[#4e4747] shadow-lg'}`}></button>
                        <button
                            onClick={() => {
                                handleStepClick(3);
                                setSelectedButton("Engineer");
                                setInProp(true);
                                setTimeout(() => {
                                    setInProp(false);
                                }, 500);

                            }}
                            className={` duration-500 ${selectedButton === "Engineer" ? 'bg-white scale-95 h-3 w-3  rounded-full shadow-lg' : 'h-3 w-3 hover:bg-gray-500 scale-105 rounded-full bg-[#4e4747] shadow-lg'}`}></button>
                    </ul>
                </div>
            </section>

        </>
    )
}