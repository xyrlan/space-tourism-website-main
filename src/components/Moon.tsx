import Image from "next/image";




export default function Moon() {




    return (
        <div className={`selection:bg-gray-500 selection:bg-opacity-30 relative flex max-md:flex-col w-full h-full justify-center items-center xl:gap-[15%] lg:gap-[10%] md:gap-[5%] px-[2%]`} >
            <Image className="max-lg:scale-90 select-none md:hover:scale-105 duration-500 max-md:absolute max-md:-top-[350px]  max-md:scale-50 " src="/images/image-moon.png" width={380} height={380} alt="moon" />
            <div className="w-[30%] max-md:w-full max-md:px-5 max-md:text-center">
                <h4 className="text-9xl my-[4%] max-lg:my-[1%] max-md:text-7xl" >Moon</h4>
                <p className="border-gray-700 border-solid border-b h-[35%] max-lg:h-[45%]">See our planet as you’ve never seen it before. A perfect relaxing trip away to help
                    regain perspective and come back refreshed. While you’re there, take in some history
                    by visiting the Luna 2 and Apollo 11 landing sites.</p>
                <div className="flex justify-between ">
                    <div className="flex flex-col mt-[3%] max-lg:scale-90">
                        <a className="text-xl">Avg. distance</a>
                        <a className="text-4xl max-lg:text-2xl">384.000  km</a>
                    </div>
                    <div className="flex flex-col mt-[3%] text-end max-lg:scale-90">
                        <a className="text-xl">Est. travel time</a>
                        <a className="text-4xl max-lg:text-2xl">3 days</a>
                    </div>
                </div>
            </div>
        </div>

    )
}