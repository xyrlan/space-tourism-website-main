import Image from "next/image"

export default function Engineer() {
    return (
        <div className="flex items-center px-[10%] gap-[10%] max-lg:gap-[3%] max-lg:px-[3%]">
            
            <div className="w-[40%]">            
                <h1 className="text-[#a19797] text-4xl">Flight Engineer</h1>
                <h2 className="text-6xl">Anousheh Ansari</h2>

                <p className="text-lg my-[5%]">
                                Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
                  Ansari was the fourth self-funded space tourist, the first self-funded woman to 
                  fly to the ISS, and the first Iranian in space. 
                </p>
            </div>

            
            <Image className="select-none hover:opacity-95 hover:brightness-100 brightness-90 duration-500" src="/images/image-anousheh-ansari.png" width={500} height={500} alt="Anousheh Ansari" />
        </div>
    )
}