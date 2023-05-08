import Commander from "@/components/Commander-crew";
import Specialist from "@/components/Specialist-crew";



import { Multistep } from "@/hooks/multistep"
import { useState } from "react";


export default function Crew() {

    const {currentStep, handleStepClick} = Multistep(3);

    const [selectedButton, setSelectedButton] = useState("Commander");

    function handleButtonClick(buttonValue: any) {
      setSelectedButton(buttonValue);
    }

    const MultiStepComponents = [<Commander />, <Specialist /> ]

    return (
        <>
        <section id="crew" className="font-genos md:bg-deskcrew max-sm:bg-mobilecrew sm:bg-tabletcrew h-screen flex flex-col justify-end bg-cover relative section">
            <h1 className="text-4xl w-fit ml-[13%] absolute top-[20%]"><span className="text-[#a19797]">02</span> Meet your crew</h1>
            <div>{MultiStepComponents[currentStep]}</div>
            <ul className="flex justify-between w-[8%] absolute bottom-[10%] left-[10%]">
                <button 
                onClick={() => {handleStepClick(0)}}
                className="h-3 w-3 scale-105 rounded-full bg-[#a19797] shadow-lg"></button>
                <button 
                onClick={() => {handleStepClick(1)}}
                className="h-3 w-3 scale-105 rounded-full bg-[#a19797] shadow-lg"></button>
                <button 
                onClick={() => {handleStepClick(2)}}
                className="h-3 w-3 scale-105 rounded-full bg-[#a19797] shadow-lg"></button>
                <button 
                onClick={() => {handleStepClick(3)}}
                className="h-3 w-3 scale-105 rounded-full bg-[#a19797] shadow-lg"></button>
            </ul>

        </section>
        
        </>
    )
}