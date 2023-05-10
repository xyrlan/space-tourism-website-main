import Image from "next/image";





export default function Vehicle() {
    return (
        <div className="md:inline-flex items-center md:ml-[5%] relative gap-20 max-lg:gap-5 max-md:justify-center max-md:flex max-md:flex-col max-md:p-4">

            <Image className="max-xl:scale-90 md:hidden " src="/images/image-launch-vehicle-landscape.jpg" width={450} height={400} alt="vehicle" />

            <div className="w-[35%] flex flex-col max-xl:scale-90 max-lg:[50%] max-lg:w-full max-md:w-full max-md:items-center">
                <h1 className="text-2xl text-[#b3a8a8]">The terminology...</h1>
                <h5 className="text-7xl mb-[5%] max-md:text-5xl">Launch vehicle</h5>
                <p className="text-lg text-[#b3a8a8] max-md:text-center">  A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a
                    payload from Earth's surface to space, usually to Earth orbit or beyond. Our
                    WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall,
                    it's quite an awe-inspiring sight on the launch pad!</p>
            </div>
            <div className="max-md:hidden">
                <Image className="max-xl:scale-90 " src="/images/image-launch-vehicle-portrait.jpg" width={450} height={400} alt="vehicle" />
            </div>
        </div>

    )
}