import Image from "next/image";





export default function Capsule() {
    return (
        <div className="md:inline-flex items-center md:ml-[5%] relative gap-20 max-lg:gap-5 max-md:justify-center max-md:flex max-md:flex-col max-md:p-4">

            <Image className="max-xl:scale-90 md:hidden " src="/images/image-space-capsule-landscape.jpg" width={450} height={400} alt="capsula" />

            <div className="w-[35%] flex flex-col max-xl:scale-90 max-lg:[50%] max-lg:w-full max-md:w-full max-md:items-center">
                <h1 className="text-2xl text-[#b3a8a8]">The terminology...</h1>
                <h5 className="text-7xl mb-[5%] max-md:text-5xl">Space capsule</h5>
                <p className="text-lg text-[#b3a8a8] max-md:text-center">A space capsule is an often-crewed spacecraft that uses a blunt-body reentry
                    capsule to reenter the Earth's atmosphere without wings. Our capsule is where
                    you'll spend your time during the flight. It includes a space gym, cinema,
                    and plenty of other activities to keep you entertained.</p>
            </div>
            <div className="">
                <Image className="max-xl:scale-90 max-md:hidden" src="/images/image-space-capsule-portrait.jpg" width={450} height={400} alt="capsule" />
            </div>
        </div>

    )
}