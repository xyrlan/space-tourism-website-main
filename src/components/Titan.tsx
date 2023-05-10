import Image from "next/image";



export default function Titan() {
    
    return(
        <div className="selection:bg-gray-500 selection:bg-opacity-30 relative flex w-full justify-center xl:gap-[15%] lg:gap-[10%] md:gap-[5%] max-md:flex-col px-[2%] items-center h-full">
        <Image className="max-lg:scale-90 select-none md:hover:scale-105 duration-700 ease-out max-md:absolute max-md:-top-[350px] max-md:scale-50 " src="/images/image-titan.png" width={380} height={380} alt="europa"  />
        <div className="w-[30%] max-md:px-5 max-md:text-center max-md:w-full">
            <h4 className="text-9xl my-[4%] max-lg:my-[1%] max-md:text-7xl" >Titan</h4>
            <p className="border-gray-700 border-solid border-b h-[35%] max-lg:h-[45%] ">  The only moon known to have a dense atmosphere other than Earth, Titan 
  is a home away from home (just a few hundred degrees colder!). As a 
  bonus, you get striking views of the Rings of Saturn.</p>
            <div className="flex justify-between w-full max-md:mb-4"> 
                <div className="flex flex-col mt-[3%] max-lg:scale-90">
                    <a className="text-xl">Avg. distance</a>
                    <a className="text-4xl max-lg:text-2xl">1.6 bil. km</a>  
                </div>
                <div className="flex flex-col mt-[3%] text-end max-lg:scale-90">
                    <a className="text-xl">Est. travel time</a>
                    <a className="text-4xl max-lg:text-2xl">7 years</a>
                </div>
            </div>
        </div>
        </div>
    
    )
}