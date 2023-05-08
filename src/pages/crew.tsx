import Commander from "@/components/Commander-crew";
import Specialist from "@/components/Specialist-crew";
import Pilot from "@/components/Pilot-crew";
import Engineer from "@/components/Engineer-crew";



import { Multistep } from "@/hooks/multistep"
import { useState } from "react";
import { CSSTransition } from 'react-transition-group'
import { setTimeout } from "timers";




export default function Crew() {

    const {currentStep, handleStepClick} = Multistep(3);

    const [selectedButton, setSelectedButton] = useState("Commander");

    function handleButtonClick(buttonValue: any) {
      setSelectedButton(buttonValue);
    }

    const MultiStepComponents = [<Commander />, <Specialist />, <Pilot />, <Engineer /> ]

    const [inProp, setInProp] = useState(false);


    return (
        
        <>
        <section id="crew" className="selection:bg-gray-500 selection:bg-opacity-30 font-genos md:bg-deskcrew max-sm:bg-mobilecrew sm:bg-tabletcrew h-screen flex flex-col justify-end bg-cover relative section">
            <h1 className="text-4xl w-fit ml-[13%] absolute top-[20%] "><span className="text-[#a19797]">02</span> Meet your crew</h1>
            <CSSTransition
                    in={inProp} // renderiza o componente atual
                    timeout={500} // tempo em milissegundos da duração da animação
                    classNames="fade" // classes CSS da animação
            >{MultiStepComponents[currentStep]}</CSSTransition>
            <ul className="flex justify-between w-[8%] absolute bottom-[10%] left-[10%]">
                <button   
                onClick={() => {handleStepClick(0);
                    setSelectedButton("Commander");
                    setInProp(true);
                    setTimeout(() => {
                        setInProp(false);
                    }, 500);
 
                }}
            className={` ${selectedButton === "Commander" ? 'bg-white h-3 w-3 scale-105 rounded-full shadow-lg' : 'h-3 w-3 scale-105 rounded-full bg-[#4e4747] shadow-lg'}`}></button>
                <button 
                onClick={() => {handleStepClick(1);
                    setSelectedButton("Specialist");
                    setInProp(true);
                    setTimeout(() => {
                        setInProp(false);
                    }, 500);
                    
                }}
                className={`${selectedButton === "Specialist" ? 'bg-white h-3 w-3 scale-105 rounded-full shadow-lg' : 'h-3 w-3 scale-105 rounded-full bg-[#4e4747] shadow-lg'}`}></button>
                <button 
                onClick={() => {handleStepClick(2);
                    setSelectedButton("Pilot");
                    setInProp(true);
                    setTimeout(() => {
                        setInProp(false);
                    }, 500);
                    
                }}
                className={`${selectedButton === "Pilot" ? 'bg-white h-3 w-3 scale-105 rounded-full shadow-lg' : 'h-3 w-3 scale-105 rounded-full bg-[#4e4747] shadow-lg'}`}></button>
                <button 
                onClick={() => {handleStepClick(3);
                    setSelectedButton("Engineer");
                    setInProp(true);
                    setTimeout(() => {
                        setInProp(false);
                    }, 500);
                    
                }}
                className={` ${selectedButton === "Engineer" ? 'bg-white h-3 w-3 scale-105 rounded-full shadow-lg' : 'h-3 w-3 scale-105 rounded-full bg-[#4e4747] shadow-lg'}`}></button>
            </ul>

        </section>
        
        </>
    )
}