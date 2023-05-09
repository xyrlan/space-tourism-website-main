import Image from "next/image"

export default function Pilot() {
    return (
        <div className="flex items-center px-[10%] gap-[10%] max-lg:gap-[3%] max-lg:px-[3%] z-10">
            
            <div className="w-[40%]">            
                <h1 className="text-[#a19797] text-4xl">Pilot</h1>
                <h2 className="text-6xl">Victor Glover</h2>

                <p className="text-lg my-[5%]">
                                  Pilot on the first operational flight of the SpaceX Crew Dragon to the 
                    International Space Station. Glover is a commander in the U.S. Navy where 
                    he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
                    station systems flight engineer. 
                </p>
            </div>

            
            <Image className="select-none hover:opacity-95 hover:brightness-100 brightness-90 duration-500" src="/images/image-victor-glover.png" width={450} height={450} alt="Victor Glover" />
        </div>
    )
}