import Image from "next/image"
import Padlock from "@/public/padlock.svg"

const Leaderboard = () => {
    return (
        <div className="bg-white p-6 rounded-2xl w-full  md:min-w-[350px] flex flex-col justify-around border-2 gap-y-2 mt-4">
            <div className="flex justify-center items-center gap-x-4">
                <Image
                    src={Padlock}
                    width={100}
                    height={100}
                    alt="level-up"
                    className="w-10"
                />
                <div>
                    <h1 className="text-lg text-black font-bold">Papan Peringkat</h1>
                    <p className="text-sm">Capai target skormu sebelum UTBK datang.</p>
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;