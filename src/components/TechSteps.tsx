import Image from "next/image";
import MultiStepComponent from "@/domain/models/multi-step-component";


interface TechStepProps extends React.HTMLAttributes<HTMLDivElement> {
    stepComponent: MultiStepComponent
    key: number
}


export default function TechStep({stepComponent, key} : TechStepProps) {
    return (
        <div key={key} className="md:inline-flex items-center md:ml-[5%] relative gap-20 max-lg:gap-5 max-md:justify-center max-md:flex max-md:flex-col max-md:p-4">

            <Image className=" md:hidden " src={stepComponent.imgDesktop} width={450} height={182} alt="capsula" />

            <div className="w-[35%] flex flex-col max-xl:scale-90 max-lg:[50%] max-lg:w-full max-md:w-full max-md:items-center">
                <h1 className="text-2xl text-[#b3a8a8]">The terminology...</h1>
                <h5 className="text-7xl mb-[5%] max-md:text-5xl">{stepComponent.title}</h5>
                <p className="text-lg text-[#b3a8a8] max-md:text-center">{stepComponent.paragraph}</p>
            </div>
            <div className="">
                <Image className="max-xl:scale-90 max-md:hidden max-md:opacity-0" src={stepComponent.imgMobile} width={450} height={460} alt="capsule" />
            </div>
        </div>

    )
}