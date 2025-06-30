import Image from "next/image";
import Key from "@/public/light-key-2.svg"

const SecondSection = () => {
    return (
        <div className="bg-gradient-to-r from-sky-50 to-white border-b-2 border-slate-200">
            <div className="container mx-auto hidden lg:flex flex-row space-x-reverse justify-center items-center gap-x-40 lg:py-12 py-14  ">
                <div className="py-12 lg:py-0">
                    <Image
                    src={Key}
                    width={800}
                    height={800}
                    alt="mascot"
                    className="relative"
                    />
                </div>
                <div className="max-w-xl">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-5 max-w-xs lg:max-w-xl">Discover the Gateway to Your Dream Campus!</h1>
                    <p className="text-base lg:text-xl font-normal ">Unlock pintu kampus tujuan dan eksplorasi potensi dirimu lewat setiap soal yang kamu taklukkan.</p>
                </div>  
            </div>
            <div className="container mx-auto lg:hidden flex-row space-x-reverse justify-between items-center gap-x-40 lg:py-12 py-14  ">
                
                <div className="max-w-xl">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-5 max-w-xs lg:max-w-xl">Discover the Gateway to Your Dream Campus!</h1>
                    <p className="text-base lg:text-xl font-normal ">Unlock pintu kampus tujuan dan eksplorasi potensi dirimu lewat setiap soal yang kamu taklukkan.</p>
                </div>  
                <div className="">
                    <Image
                    src={Key}
                    width={800}
                    height={800}
                    alt="mascot"
                    className="relative"
                    />
                </div>
            </div>            
        </div>
    );
};

export default SecondSection;