import Image from "next/image"

export default function Engineer() {
    return (
        <div className="flex items-center px-[10%] gap-[10%] max-lg:gap-[3%] max-lg:px-[3%] z-10 max-md:flex-col ">

            <Image className="z-10 md:hidden select-none hover:opacity-95 hover:brightness-100 brightness-90 duration-500 mb-4" src="/images/image-anousheh-ansari.png" width={250} height={250} alt="Anousheh Ansari" />

            <div className="w-[40%] max-md:w-full max-md:text-center">

                <h1 className="text-[#a19797] text-4xl max-md:text-2xl">Flight Engineer</h1>
                <h2 className="text-6xl max-md:text-4xl">Anousheh Ansari</h2>

                <p className="text-lg my-[5%]">
                    Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.
                    Ansari was the fourth self-funded space tourist, the first self-funded woman to
                    fly to the ISS, and the first Iranian in space. 
                </p>
            </div>


            <Image className="max-md:hidden select-none hover:opacity-95 hover:brightness-100 brightness-90 duration-500" src="/images/image-anousheh-ansari.png" width={493} height={493} alt="Anousheh Ansari" />
        </div>
    )
}