import { Badge } from "@/components/ui/badge";

// Dummy data untuk card leaderboard (top 10 only)
const topUsers = [
    { id: 1, name: "Faiz", xp: 850, avatar: "F", color: "bg-yellow-500", rank: 1 },
    { id: 2, name: "Rizal", xp: 780, avatar: "R", color: "bg-gray-400", rank: 2 },
    { id: 3, name: "Hamizan", xp: 720, avatar: "H", color: "bg-orange-500", rank: 3 },
    { id: 4, name: "Fetch M", xp: 215, avatar: "F", color: "bg-blue-500", rank: 4 },
    { id: 5, name: "Hamizan D", xp: 210, avatar: "H", color: "bg-green-500", rank: 5, isCurrentUser: true },
    { id: 6, name: "鬼ヶ原 悠", xp: 180, avatar: "鬼", color: "bg-red-500", rank: 6 },
    { id: 7, name: "Tyler W", xp: 180, avatar: "T", color: "bg-red-500", rank: 7 },
    { id: 8, name: "Gaurav L", xp: 160, avatar: "G", color: "bg-yellow-500", rank: 8 },
    { id: 9, name: "Sarah K", xp: 155, avatar: "S", color: "bg-purple-500", rank: 9 },
    { id: 10, name: "Ahmad F", xp: 145, avatar: "A", color: "bg-indigo-500", rank: 10 }
];

const CardLeaderboard = () => {
    return(
        <div className="w-full bg-white border-2 border-gray-200 rounded-2xl p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-800">Leaderboard</h2>
                <Badge variant="tertiary" className="text-xs">
                    Level Nasional
                </Badge>
            </div>
            
            {/* Top 10 List - Compact Version */}
            <div className="space-y-2 max-h-[300px] overflow-y-auto">
                {topUsers.map((user) => (
                    <div 
                        key={user.id} 
                        className={`flex items-center justify-between p-2.5 rounded-lg transition-colors duration-150 ${
                            user.isCurrentUser 
                                ? 'bg-green-100 border border-green-300' 
                                : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                    >
                        <div className="flex items-center gap-2.5">
                            {/* Ranking */}
                            <div className="w-6 h-6 flex items-center justify-center">
                                {user.rank <= 3 ? (
                                    <span className={`text-xs font-bold ${
                                        user.rank === 1 ? 'text-yellow-500' :
                                        user.rank === 2 ? 'text-gray-400' :
                                        'text-orange-500'
                                    }`}>
                                        {user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : '🥉'}
                                    </span>
                                ) : (
                                    <span className={`text-xs font-bold ${
                                        user.isCurrentUser ? 'text-green-600' : 'text-gray-600'
                                    }`}>
                                        {user.rank}
                                    </span>
                                )}
                            </div>
                            
                            {/* Avatar */}
                            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-medium ${user.color}`}>
                                {user.avatar}
                            </div>
                            
                            {/* Name */}
                            <div className={`font-medium text-sm ${
                                user.isCurrentUser ? 'text-green-800' : 'text-gray-800'
                            }`}>
                                {user.name}
                            </div>
                        </div>
                        
                        {/* XP Score */}
                        <div className={`text-xs font-bold ${
                            user.isCurrentUser ? 'text-green-600' : 'text-gray-700'
                        }`}>
                            {user.xp} XP
                        </div>
                    </div>
                ))}
            </div>
            
            {/* View More Button */}
            <button className="w-full mt-4 p-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-lg transition-colors duration-150">
                Lihat Selengkapnya →
            </button>
        </div>
    );
};

export default CardLeaderboard;