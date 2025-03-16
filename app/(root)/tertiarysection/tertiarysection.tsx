import Image from "next/image";
import Star from "@/public/star.svg"

const TertiarySection = () => {
    return (
        <div className="bg-gradient-to-l from-yellow-50 to-white border-b-2 border-slate-200">
            <div className="container mx-auto lg:flex flex-row justify-between items-center gap-x-40 lg:py-36 py-14  ">
                <div className="max-w-xl">
                        <h1 className="text-4xl lg:text-6xl font-bold mb-5 max-w-xs lg:max-w-xl">Science made simple. Learning made exciting.</h1>
                        <p className="text-base lg:text-xl font-normal text-gray-600">Understand concepts, don’t just memorize them.</p>
                    </div>
                    <div className="py-12 lg:py-0">
                        <Image
                        src={Star}
                        width={400}
                        height={400}
                        alt="star"
                        />
                    </div>     
            </div>
            
        </div>
    );
};

export default TertiarySection;