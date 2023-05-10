import Image from "next/image"

export default function Specialist() {
    return (
        <div className="flex items-center px-[10%] gap-[10%] max-lg:gap-[3%] max-lg:px-[3%] z-10 max-md:flex-col">

            <Image className="z-10 md:hidden select-none hover:opacity-95 hover:brightness-100 brightness-90 duration-500 mb-4" src="/images/image-mark-shuttleworth.png" width={180} height={180} alt="mark" />

            <div className="w-[40%] max-md:w-full max-md:text-center">
                <h1 className="text-[#a19797] text-4xl max-md:text-2xl">Mission Specialist</h1>
                <h2 className="text-6xl max-md:text-4xl">Mark Shuttleworth</h2>

                <p className="text-lg my-[5%] ">
                    Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind
                    the Linux-based Ubuntu operating system. Shuttleworth became the first South
                    African to travel to space as a space tourist.
                </p>
            </div>


            <Image className="max-md:hidden select-none hover:opacity-95 hover:brightness-100 brightness-90 duration-500" src="/images/image-mark-shuttleworth.png" width={350} height={350} alt="Mark Shuttle" />
        </div>
    )
}