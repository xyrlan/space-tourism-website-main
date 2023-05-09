import { Multistep } from "@/hooks/multistep"
import { useState } from "react";
import { CSSTransition } from 'react-transition-group'
import { setTimeout } from "timers";


import Vehicle from "@/components/Vehicle-tech";
import Capsule from "@/components/Capsule-tech";
import Spaceport from "@/components/Spaceport-tech";


export default function Technology() {

    const {currentStep, handleStepClick} = Multistep(2);

    const [selectedButton, setSelectedButton] = useState("vehicle");

    function handleButtonClick(buttonValue: any) {
        setSelectedButton(buttonValue);
      }

    const  MultiStepComponents = [<Vehicle />, <Capsule />, <Spaceport />]

    const [inProp, setInProp] = useState(false);

    return (

        <>
        <section id="technology" className="selection:bg-gray-500 selection:bg-opacity-30 font-genos md:bg-desktech max-sm:bg-mobiletech sm:bg-tablettech h-screen flex flex-col justify-center bg-cover relative section">
            <h1 className="text-4xl w-fit ml-[13%] absolute top-[20%] "><span className="text-[#a19797]">03</span> Space launch 101
            </h1>
            <div className="flex items-center justify-center ml-[10%] pt-28">
                <ul className="flex flex-col gap-7 max-xl:scale-90 max-lg:scale-75">
                    <button 
                    className={` duration-500 ${selectedButton === "vehicle" ? "h-20 w-20 rounded-full border-white border-solid border-2 bg-white text-black text-6xl" : "h-20 w-20 rounded-full border-white border-solid border-2 bg-transparent text-6xl"}`}
                    onClick={() => {handleStepClick(0);
                        setSelectedButton("vehicle");
                        setInProp(true);
                        setTimeout(() => {
                            setInProp(false);
                        }, 500);
                    }}> 1 </button>
                    <button 
                    className={` duration-500 ${selectedButton === "capsule" ? "h-20 w-20 rounded-full border-white border-solid border-2 bg-white text-black text-6xl" : "h-20 w-20 rounded-full border-white border-solid border-2 bg-transparent text-6xl"}`}
                    onClick={() => {handleStepClick(1);
                        setSelectedButton("capsule");
                        setInProp(true);
                        setTimeout(() => {
                            setInProp(false);
                        }, 500);
                    }}> 2 </button>
                    <button 
                    className={` duration-500 ${selectedButton === "spaceport" ? "h-20 w-20 rounded-full border-white border-solid border-2 bg-white text-black text-6xl" : "h-20 w-20 rounded-full border-white border-solid border-2 bg-transparent text-6xl"}`}
                    onClick={() => {handleStepClick(2);
                        setSelectedButton("spaceport");
                        setInProp(true);
                        setTimeout(() => {
                            setInProp(false);
                        }, 500);
                    }}> 3 </button>
                </ul>
                <CSSTransition
                    in={inProp} // renderiza o componente atual
                    timeout={500} // tempo em milissegundos da duração da animação
                    classNames="fade" // classes CSS da animação
            >{MultiStepComponents[currentStep]}</CSSTransition>
            </div>

         </section>
        </>
    )
}