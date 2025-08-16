import Image from "next/image";
import Clock from "@/public/clock.png"
import ImportantDates from "./dates";

const Reminder = () => {
    function getCountdownDays(targetDateStr: string): number {
        const today = new Date();
        const targetDay = new Date(targetDateStr)

        const diffTime = targetDay.getTime() - today.getTime()

        const diffDay = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        
        return diffDay; 
    }
    const coundtdown = getCountdownDays("2025-12-28")

    return(
        <div className="bg-[#F8F4FF] p-6 rounded-2xl w-full  md:min-w-[350px] flex flex-col justify-around border-2 border-[#BD8FF3] gap-y-2 mt-4">
            <div className="flex justify-center items-center gap-x-4">
                <Image
                    src={Clock}
                    width={100}
                    height={100}
                    alt="level-up"
                    quality={100}
                    className="w-16"
                />
                <div>
                    <span className="flex justify-between items-center">
                        <h1 className="text-lg text-black font-bold">{coundtdown} Hari Menuju UTBK</h1>
                        <ImportantDates />
                    </span>
                    <p className="text-sm">Capai target skormu sebelum UTBK datang.</p>
                </div>
            </div>
        </div>
    );
};

export default Reminder;