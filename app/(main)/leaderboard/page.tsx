import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import FirstPlace from "@/public/first.svg"
import SecondPlace from "@/public/second.svg"
import ThirdPlace from "@/public/third.svg"

// Dummy data untuk leaderboard
const leaderboardData = [
    { id: 4, name: "Fetch M", school: "SMAN 1 Jakarta", xp: 215, avatar: "F", color: "bg-blue-500" },
    { id: 5, name: "Hamizan D", school: "SMAN 1 Sragen", xp: 210, avatar: "H", color: "bg-green-500", isCurrentUser: true },
    { id: 6, name: "鬼ヶ原 悠", school: "SMA Negeri 3 Bandung", xp: 180, avatar: "鬼", color: "bg-red-500" },
    { id: 7, name: "Tyler W", school: "SMAN 1 Surabaya", xp: 180, avatar: "T", color: "bg-red-500" },
    { id: 8, name: "Gaurav L", school: "SMAN 2 Medan", xp: 160, avatar: "G", color: "bg-yellow-500" },
    { id: 9, name: "Sarah K", school: "SMAN 5 Yogyakarta", xp: 155, avatar: "S", color: "bg-purple-500" },
    { id: 10, name: "Ahmad F", school: "SMAN 1 Malang", xp: 145, avatar: "A", color: "bg-indigo-500" },
    { id: 11, name: "Maya R", school: "SMAN 3 Semarang", xp: 140, avatar: "M", color: "bg-pink-500" },
    { id: 12, name: "David L", school: "SMAN 2 Palembang", xp: 135, avatar: "D", color: "bg-teal-500" },
    { id: 13, name: "Lisa W", school: "SMAN 4 Denpasar", xp: 130, avatar: "L", color: "bg-orange-500" },
    { id: 14, name: "Ryan P", school: "SMAN 1 Makassar", xp: 125, avatar: "R", color: "bg-cyan-500" },
    { id: 15, name: "Nina S", school: "SMAN 2 Padang", xp: 120, avatar: "N", color: "bg-lime-500" },
    { id: 16, name: "Kevin T", school: "SMAN 3 Batam", xp: 115, avatar: "K", color: "bg-emerald-500" },
    { id: 17, name: "Rina M", school: "SMAN 1 Balikpapan", xp: 110, avatar: "R", color: "bg-violet-500" },
    { id: 18, name: "Budi S", school: "SMAN 2 Pekanbaru", xp: 105, avatar: "B", color: "bg-slate-500" },
    { id: 19, name: "Sari D", school: "SMAN 1 Jambi", xp: 100, avatar: "S", color: "bg-rose-500" },
    { id: 20, name: "Andi W", school: "SMAN 3 Banjarmasin", xp: 95, avatar: "A", color: "bg-amber-500" }
];

const Leaderboard = () => {
    return(
        <div className="max-w-[900px] w-full bg-white border-2 border-gray-200 rounded-2xl flex flex-col justify-center items-center mt-5 lg:mt-6 gap-2">
            <Badge className="w-40 text-md font-medium my-7" variant="tertiary">Level Nasional</Badge>
            
            {/* ✅ Top 3 Podium - existing code */}
            <div className="flex justify-around px-6 gap-x-3 sm:gap-8 items-end mb-6">
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
                                <div className="w-full bg-[#FFC169] rounded-sm flex justify-center items-center text-[#CC6200] font-bold">
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
                                <div className="w-full bg-[#FFFF4A] rounded-sm flex justify-center items-center text-[#D88500] font-bold">
                                    850
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
                                <div className="w-full bg-[#FDFDFD] rounded-sm flex justify-center items-center text-[#A3A3A3] font-bold">
                                    780
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>

            {/* ✅ Rank 4-20 List */}
            <div className="w-full px-6 pb-6 space-y-2 max-h-[400px] overflow-y-auto">
                {leaderboardData.map((user, index) => (
                    <div 
                        key={user.id} 
                        className={`flex items-center justify-between p-3 rounded-xl transition-colors duration-150 ${
                            user.isCurrentUser 
                                ? 'bg-green-100 border border-green-300' 
                                : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                    >
                        <div className="flex items-center gap-3">
                            {/* Ranking Number */}
                            <div className="w-8 h-8 flex items-center justify-center">
                                <span className={`text-sm font-bold ${
                                    user.isCurrentUser ? 'text-green-600' : 'text-gray-600'
                                }`}>
                                    {index + 4}
                                </span>
                            </div>
                            
                            {/* Avatar Circle */}
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium ${user.color}`}>
                                {user.avatar}
                            </div>
                            
                            {/* User Info */}
                            <div>
                                <div className={`font-medium text-sm ${
                                    user.isCurrentUser ? 'text-green-800' : 'text-gray-800'
                                }`}>
                                    {user.name}
                                </div>
                                <div className="text-xs text-gray-500">
                                    {user.school}
                                </div>
                            </div>
                        </div>
                        
                        {/* XP Score */}
                        <div className="text-right">
                            <div className={`text-sm font-bold ${
                                user.isCurrentUser ? 'text-green-600' : 'text-gray-700'
                            }`}>
                                {user.xp} XP
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Leaderboard;