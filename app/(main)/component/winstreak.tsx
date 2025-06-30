import thunder from "@/public/thunder.svg"
import WsProgress from "@/components/ws-progress";
import Image from "next/image";

const Winstreak = () => {
    return (
        <div className="w-full lg:w-md h-[90px] lg:h-[100px] bg-winstreak-bar border-b-4 border-[#052388] rounded-2xl flex justify-center items-center gap-x-3">
            <Image 
            src={thunder}
            alt="Thunder"
            width={100}
            className="w-12 lg:w-14"
            >
            </Image>
            <div className="grid gap-y-1">
                <div className="flex gap-2 font-bold text-[16px] lg:text-xl">
                    <h1 className="text-white">Teruskan</h1>
                    <h1 className="text-yellow-300">Winstreakmu!</h1>    
                </div>
                <WsProgress/>
            </div>
            
        </div>
    )
}

export default Winstreak;