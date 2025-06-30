import Image from "next/image";
import Solar from "@/public/solar.svg"

const FirstSection = () => {
    return (
        <div className="bg-gradient-to-l from-purple-50 to-white border-b-2 border-slate-200">
            <div className="container mx-auto lg:flex flex-row justify-center items-center gap-x-40 lg:py-12 py-14  ">
                <div className="max-w-xl">
                        <h1 className="text-4xl lg:text-6xl font-bold mb-5 max-w-xs lg:max-w-xl">Lost in Questions? We’ve Got the Direction!</h1>
                        <p className="text-base lg:text-xl font-normal ">Belajar dengan try out interaktif, tantangan seru, dan sistem yang bantu kamu nemuin jalan masuk ke PTN impianmu.</p>
                    </div>
                    <div className="">
                        <Image
                        src={Solar}
                        width={700}
                        height={700}
                        alt="solar"
                        />
                    </div>     
            </div>
            
        </div>
    );
};

export default FirstSection;