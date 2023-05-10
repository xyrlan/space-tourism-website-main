import Image from "next/image"
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";



export default function Navbar() {

    const [selectedButton, setSelectedButton] = useState("home");

    // function handleButtonClick(buttonValue) {
    //   setSelectedButton(buttonValue);
    // }

    const router = useRouter()
    const observer = useRef<IntersectionObserver | null>(null);


    useEffect(() => {
        const handleIntersection = (entries: any) => {
            entries.forEach((entry: any) => {
                const targetId = entry.target.getAttribute("id");
                if (entry.isIntersecting) {
                    if (targetId !== null && targetId !== undefined) {
                        setSelectedButton(targetId);
                    }
                }
            });
        };

        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };

        observer.current = new IntersectionObserver(handleIntersection, options);

        // Observe the target elements
        const targets = document.querySelectorAll(".section");
        targets.forEach((target) => {
            observer.current?.observe(target);
        });

        // Cleanup the observer
        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, []);


    const [isActive, setActive] = useState(true);

    return (
        <>
            <nav className="font-genos text-lg flex justify-between sm:pt-10 fixed z-30 w-screen select-none max-sm:py-4 max-sm:shadow-md bg-gradient-to-b from-black to-transparent max-sm:opacity-100  ">

                <Image className="sm:mx-10 sm:py-6 max-sm:h-fit max-sm:mx-4" src="/images/logo.svg" width={48} height={48} alt="Logo" />

                <Image width={50} height={12} alt="menu-icon"
                    onClick={() => {
                        setActive(!isActive ? true : false);
                        console.log(isActive);
                    }}
                    className="sm:hidden block max-sm:mx-4" id="menu-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAIZJREFUSEvtlUEOgCAMBFn6MZ+mP9OHQQ3CRSXgYSMmthcOJDvJZAtwgwaDuM7Ar5k31YdqDWFOB8s7RJZrVlW1xkiDJiC8v3G+BWYpbuVYq3OrVSdqq4HNWl1fp6yaNgDWR6ppxEaQrVNep9+91eVbpHUMIumbPY2Vi6a3F2Sqe4Zo98NU71nrKh8hOW3MAAAAAElFTkSuQmCC" />

                <div className="border border-solid border-gray-700 w-[33%] h-0 place-self-center absolute left-[10%] max-xl:w-[28%] max-lg:w-[24%] max-md:hidden" />


                <nav className={`bg-gray-500 flex items-center 2xl:w-[50%] md:w-[70%] lg:w-[65%] xl:w-[60%] sm:h-24 sm:bg-opacity-30  justify-between max-lg:px-10 sm:px-20 max-lg:pr-30 lg:pr-44 max-md:w-[70%]
                 max-sm:bg-gradient-to-t max-sm:from-black max-sm:to-transparent 
                 max-sm:absolute max-sm:w-full max-sm:py-4 max-sm:space-y-1 max-sm:top-20 max-sm:duration-300 max-sm:transition-all max-sm:ease-in ${!isActive ? 'transition max-sm:block max-sm:left-0' : 'max-sm:top-full max-sm:-left-[100%] max-sm:block '}`}>



                    <div className={`max-sm:w-fit text-[#a19797] cursor-pointer hover:text-white duration-500 sm:h-full flex items-center hover:border-[#a19797] hover:border-b-2 ${selectedButton === "home" ? 'hover:border-white border-white border-solid border-b-2 border-opacity-100 text-white' : 'border-white border-solid border-b-2 border-opacity-0 '}`}
                        onClick={() => {
                            document.getElementById("home")?.scrollIntoView()
                        }}>
                        <div className="">
                            <p className=""> <span className="text-[#a19797] max-md:hidden">00</span> <span className="">HOME</span> </p>
                        </div>
                    </div>
                    <div className={`max-sm:w-fit text-[#a19797] cursor-pointer hover:text-white  duration-500 sm:h-full flex items-center hover:border-[#a19797] hover:border-b-2 ${selectedButton === "destination" ? 'hover:border-white border-white border-solid border-b-2 border-opacity-100 text-white' : 'border-white border-solid border-b-2 border-opacity-0 '}`} onClick={() => {
                        document.getElementById("destination")?.scrollIntoView()
                    }}>
                        <div className="">
                            <p className=""> <span className="text-[#a19797] max-md:hidden">01</span> <span className="">DESTINATION</span></p>
                        </div>
                    </div>
                    <div className={`max-sm:w-fit text-[#a19797] cursor-pointer hover:text-white  duration-500 sm:h-full flex items-center hover:border-[#a19797] hover:border-b-2 ${selectedButton === "crew" ? 'hover:border-white border-white border-solid border-b-2 border-opacity-100 text-white' : 'border-white border-solid border-b-2 border-opacity-0 '}`} onClick={() => {
                        document.getElementById("crew")?.scrollIntoView()
                    }}>
                        <div className="">
                            <p className=""> <span className="text-[#a19797] max-md:hidden">02</span> <span className="">CREW</span></p>
                        </div>
                    </div>
                    <div className={`max-sm:w-fit text-[#a19797] cursor-pointer hover:text-white  duration-500 sm:h-full flex items-center hover:border-[#a19797] hover:border-b-2 ${selectedButton === "technology" ? 'hover:border-white border-white border-solid border-b-2 border-opacity-100 text-white' : 'border-white border-solid border-b-2 border-opacity-0 '}`}
                        onClick={() => {
                            document.getElementById("technology")?.scrollIntoView()
                        }}>
                        <div className="">
                            <p className=""> <span className="text-[#a19797] max-md:hidden">03</span> <span className="   ">TECHNOLOGY</span></p>
                        </div>
                    </div>

                </nav>
            </nav>
        </>
    )
}