import Image from "next/image";




export default function Moon() {




    return(
    <div className={`selection:bg-gray-500 selection:bg-opacity-30 durantion-500 delay-200 transition-all ease-in-out relative flex w-full justify-center xl:gap-[15%] lg:gap-[10%] md:gap-[5%] `} >
    <Image className=" select-none hover:scale-105 duration-700 ease-out" src="/images/image-moon.png" width={380} height={380} alt="moon"  />
    <div className="flex-col w-[30%]">
        <h4 className="text-9xl my-[4%]" >Moon</h4>
        <p className="border-gray-700 border-solid border-b h-[35%]">See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
        regain perspective and come back refreshed. While you’re there, take in some history 
        by visiting the Luna 2 and Apollo 11 landing sites.</p>
        <div className="flex justify-between "> 
            <div className="flex flex-col mt-[3%]">
                <a className="text-xl">Avg. distance</a>
                <a className="text-4xl">384.000  km</a>  
            </div>
            <div className="flex flex-col mt-[3%]">
                <a className="text-xl">Est. travel time</a>
                <a className="text-4xl">3 days</a>
            </div>
        </div>
    </div>
    </div>

    )
}