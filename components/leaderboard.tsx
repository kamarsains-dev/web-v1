import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import FirstPlace from "@/public/first.svg"
import SecondPlace from "@/public/second.svg"
import ThirdPlace from "@/public/third.svg"


const Leaderboard = () => {
    return(
        <div className="w-full bg-white border-2 border-gray-200 rounded-2xl flex flex-col justify-center items-center mt-5 lg:mt-6 gap-2 ">
            <Badge className="w-40 text-md font-medium my-7" variant="tertiary">Level Nasional</Badge>
            <div className="flex justify-around px-6 gap-x-3 sm:gap-8 items-end">
                <div className="flex flex-col justify-center items-center">
                    <Image
                        src={ThirdPlace}
                        width={100}
                        alt="third_places"
                        className="relative w-full max-w-[70px] lg:max-w-[100px]"
                    />
                    <div className="flex flex-col lg:flex-row gap-2 py-3 justify-center items-center">
                        <div className="w-9 h-9 rounded-full bg-green-400 flex justify-center items-center text-white">
                            H
                        </div>
                        <div className="text-center lg:text-start">
                            <h1 className="font-bold text-md">Hamizan</h1>
                            <p className="text-xs text-gray-600 font-normal">SMAN 1 Sragen</p>    
                        </div>
                    </div>
                    <div className="max-w-32 h-12 lg:h-16 max-h-16 flex justify-end bg-[#AD5C17] rounded-t-md">
                        <div className="ml-3 bg-[#FF9028] flex rounded-t-md justify-center">
                            <div className="w-full min-w-17 sm:min-w-24 lg:min-w-28 p-2">
                                <div className=" w-full bg-[#FFC169] rounded-sm flex justify-center items-center text-[#CC6200] font-bold">
                                    720
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Image
                        src={FirstPlace}
                        width={100}
                        alt="first_place"
                        className="relative w-full max-w-[70px] lg:max-w-[100px]"
                    />
                    <div className="flex flex-col lg:flex-row gap-2 py-3 justify-center items-center">
                        <div className="w-9 h-9 rounded-full bg-purple-500 flex justify-center items-center text-white">
                            F
                        </div>
                        <div className="text-center lg:text-start">
                            <h1 className="font-bold text-md">Faiz</h1>
                            <p className="text-xs text-gray-600 font-normal">SMAN 1 Sragen</p>    
                        </div>
                    </div>
                    <div className="max-w-32 h-20 lg:h-32 max-h-32 flex justify-end bg-[#D88500] rounded-t-md">
                        <div className="ml-3 bg-[#FEE003] flex rounded-t-md justify-center">
                            <div className="w-full min-w-17 sm:min-w-24 lg:min-w-28 p-2">
                                <div className=" w-full bg-[#FFFF4A] rounded-sm flex justify-center items-center text-[#D88500] font-bold">
                                    720
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Image
                        src={SecondPlace}
                        width={100}
                        alt="second_place"
                        className="relative w-full max-w-[70px] lg:max-w-[100px]"
                    />
                    <div className="flex flex-col lg:flex-row gap-2 py-3 justify-center items-center">
                        <div className="w-9 h-9 rounded-full bg-blue-500 flex justify-center items-center text-white">
                            R
                        </div>
                        <div className="text-center lg:text-start">
                            <h1 className="font-bold text-md">Rizal</h1>
                            <p className="text-xs text-gray-600 font-normal">SMAN 1 Sragen</p>    
                        </div>
                    </div>
                    <div className="max-w-32 h-16 lg:h-24 max-h-24 flex justify-end bg-[#ADADAD] rounded-t-md">
                        <div className="ml-3 bg-[#E8E8E8] flex rounded-t-md justify-center">
                            <div className="w-full min-w-17 sm:min-w-24 lg:min-w-28 p-2">
                                <div className=" w-full bg-[#FDFDFD] rounded-sm flex justify-center items-center text-[#A3A3A3] font-bold">
                                    720
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;