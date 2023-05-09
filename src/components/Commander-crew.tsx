import Image from "next/image"

export default function Commander() {
    return (
        <div className="flex items-center px-[10%] gap-[10%] max-lg:gap-[3%] max-lg:px-[3%] z-10 max-md:flex-col ">

            <Image className="z-10 absolute top-4 md:hidden scale-50 select-none hover:opacity-95 hover:brightness-100 brightness-90 duration-500" src="/images/image-douglas-hurley.png" width={500} height={500} alt="Anousheh Ansari" />

            <div className="w-[40%] max-md:w-full max-md:text-center">
                <h1 className="text-[#a19797] text-4xl max-md:text-2xl">Commander</h1>
                <h2 className="text-6xl max-md:text-4xl">Douglas Hurley</h2>

                <p className="text-lg my-[5%] max-md:pb-[10%]">
                    Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
                    and former NASA astronaut. He launched into space for the third time as
                    commander of Crew Dragon Demo-2.
                </p>
            </div>


            <Image className="max-md:hidden select-none hover:opacity-95 hover:brightness-100 brightness-90 duration-500" src="/images/image-douglas-hurley.png" width={420} height={400} alt="douglas hurley" />
        </div>
    )
}