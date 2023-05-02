import Image from "next/image"
import Link from "next/link"


export default function Navbar() {
    return(
        <>
        <nav className="flex justify-between pt-10 relative">
            <Image className="mx-10 py-6" src="/images/logo.svg" width={48} height={48} alt="Logo" />
            <div className="border border-solid border-gray-700 w-[33%] h-0 place-self-center absolute left-[10%] " />



            <div className="bg-gray-500 flex items-center w-[60%] h-24 bg-opacity-30 justify-between px-40">
                <Link href="/"><p> 00 <span className="text-black">HOME</span> </p></Link>
                <Link href="/"><p> 01 <span className="text-black">DESTINATION</span>  </p></Link>
                <Link href="/"><p> 02 <span className="text-black">CREW</span></p></Link>
                <Link href="/"><p> 03 <span className="text-black">TECHNOLOGY</span></p></Link>
            </div>
        </nav>
        </>
    )
}