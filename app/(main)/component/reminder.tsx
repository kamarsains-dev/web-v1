import Image from "next/image";
import LevelUp from "@/public/level-up.svg"

const Reminder = () => {
    return(
        <div className="bg-[#FCFFEB] p-6 rounded-2xl w-full  md:min-w-[350px] flex flex-col justify-around border-2 border-[#DAF322] gap-y-2 mt-4">
            <div className="flex justify-center items-center gap-x-4">
                <Image
                    src={LevelUp}
                    width={100}
                    height={100}
                    alt="level-up"
                    className="w-16"
                />
                <div>
                    <h1 className="text-lg text-black font-bold">20 Hari Menuju UTBK</h1>
                    <p className="text-sm">Suatu hari, kamu akan sadar ini investasi terbaik.</p>
                </div>
            </div>
        </div>
    );
};

export default Reminder;