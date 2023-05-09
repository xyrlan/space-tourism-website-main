import Image from "next/image";



export default function Titan() {
    
    return(
        <div className="selection:bg-gray-500 selection:bg-opacity-30 relative flex w-full justify-center xl:gap-[15%] lg:gap-[10%] md:gap-[5%]">
        <Image className="max-lg:scale-90 select-none hover:scale-105 duration-700 ease-out" src="/images/image-titan.png" width={380} height={380} alt="europa"  />
        <div className="flex-col w-[30%]">
            <h4 className="text-9xl my-[4%]" >Titan</h4>
            <p className="border-gray-700 border-solid border-b h-[35%] max-lg:h-[45%]">  The only moon known to have a dense atmosphere other than Earth, Titan 
  is a home away from home (just a few hundred degrees colder!). As a 
  bonus, you get striking views of the Rings of Saturn.</p>
            <div className="flex justify-between "> 
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