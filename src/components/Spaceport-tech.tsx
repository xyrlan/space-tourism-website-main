import Image from "next/image";





export default function Spaceport() {
    return (
        <div className="md:inline-flex items-center md:ml-[5%] relative gap-20 max-lg:gap-5 max-md:justify-center max-md:flex max-md:flex-col max-md:p-4">

            <Image className="max-xl:scale-90 md:hidden " src="/images/image-spaceport-landscape.jpg" width={450} height={400} alt="spaceport" />

            <div className="w-[35%] flex flex-col max-xl:scale-90 max-lg:[50%] max-lg:w-full max-md:w-full max-md:items-center">
                <h1 className="text-2xl text-[#b3a8a8]">The terminology...</h1>
                <h5 className="text-7xl mb-[5%] max-md:text-5xl">Spaceport</h5>
                <p className="text-lg text-[#b3a8a8] max-md:text-center">  A spaceport or cosmodrome is a site for launching (or receiving) spacecraft,
                    by analogy to the seaport for ships or airport for aircraft. Based in the
                    famous Cape Canaveral, our spaceport is ideally situated to take advantage
                    of the Earth’s rotation for launch.</p>
            </div>
            <div className="">
                <Image className="max-xl:scale-90 max-md:hidden" src="/images/image-spaceport-portrait.jpg" width={450} height={400} alt="Spaceport" />
            </div>
        </div>

    )
}