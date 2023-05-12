import { Multistep } from "@/hooks/multistep"
import { useState } from "react";
import { CSSTransition } from 'react-transition-group'
import { setTimeout } from "timers";
import MultiStepComponent from "@/domain/models/multi-step-component";


import TechStep from "@/components/TechSteps";


const multiStepComponents: MultiStepComponent[] = [
    {
        imgDesktop: '/images/image-launch-vehicle-landscape.jpg',
        imgMobile: '/images/image-launch-vehicle-portrait.jpg',
        title: 'Launch vehicle',
        paragraph: 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth&rsquo;s surface to space, usually to Earth orbit or beyond. OurWEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall,it&rsquo;s quite an awe-inspiring sight on the launch pad!'
    },
    {
        imgDesktop: '/images/image-spaceport-landscape.jpg',
        imgMobile: '/images/image-spaceport-portrait.jpg',
        title: 'Spaceport',
        paragraph: '  A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.'
    },
    {
        imgDesktop: '/images/image-space-capsule-landscape.jpg',
        imgMobile: '/images/image-space-capsule-portrait.jpg',
        title: 'Space Capsule',
        paragraph: 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth&rsquo;s atmosphere without wings. Our capsule is where you&rsquo;ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.'
    }
]


export default function Technology() {

    const { currentStep, handleStepClick, goBackwards, goForwards } = Multistep(3);

    const [selectedButton, setSelectedButton] = useState("vehicle");

    function handleButtonClick(buttonValue: any) {
        setSelectedButton(buttonValue);
    }

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
        } else if (touchDiff < -80 && currentStep < 2) {
            handleSwipe("left");
        }
        setTouchStart(0);
        setTouchEnd(0);

        console.log(touchDiff);
    }


    return (
        <>
            <section id="technology" className="selection:bg-gray-500 selection:bg-opacity-30 font-genos md:bg-desktech max-sm:bg-mobiletech sm:bg-tablettech h-screen flex flex-col md:justify-center bg-cover relative max-md:justify-end section gap-4">
                <div className='mainbg'/>
                <h1 className="text-4xl w-fit max-md:mb-[3%] max-md:text-3xl z-20 ml-[14%]">
                    <span className="text-[#a19797]">03</span> Space launch 101
                </h1>
                <div className="flex max-md:flex-col items-center justify-center md:ml-[10%] z-10">
                    <ul className="flex md:flex-col gap-7 max-xl:scale-90 max-lg:scale-75 z-20 ">
                        {
                            Array.from({length: multiStepComponents.length}).map((element, index) => 
                            <button
                            className={` duration-500 ${currentStep === index ? "h-20 w-20 rounded-full border-white border-solid border-2 bg-white text-black text-6xl" : "h-20 w-20 rounded-full border-white border-solid border-2 hover:bg-gray-600 bg-transparent text-6xl"}`}
                            onClick={() => {
                                handleStepClick(index);
                            }}> {index + 1} </button>)
                        }
                    </ul>
                    <div onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}>
                        <div key={currentStep} className="fade-in">
                            <TechStep key={currentStep} stepComponent={multiStepComponents[currentStep]}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}