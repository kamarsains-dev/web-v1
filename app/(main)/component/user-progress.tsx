import Image from "next/image";
import Thunder from "@/public/thunder.svg";
import { Progress } from "@/components/ui/progress";
import { MoveDiagonal } from "lucide-react";

const UserProgress = () => {
    return (
        <div className="bg-[#FFF7ED] px-6 py-4 rounded-2xl w-full  md:min-w-[350px] flex flex-col justify-around border-2 border-[#FFB56B] gap-y-2 mt-4 mb-4 md:mb-0">
            <div className="flex justify-center items-center gap-x-4">
                <Image
                    src={Thunder}
                    width={100}
                    height={100}
                    alt="thunder"
                    className="w-10"
                    quality={100}
                />
                <div className="w-full">
                    <div className="flex justify-between items-center">
                        <h1 className="text-lg text-black font-bold">Target Skor</h1>
                        <MoveDiagonal size={20} color="#59402B" />    
                    </div>
                    

                    <Progress value={40}/>
                </div>
            </div>
        </div>
    );
};

export default UserProgress;