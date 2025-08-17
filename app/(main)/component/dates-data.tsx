"use client"

// import { Calendar, Clock, CheckCircle } from "lucide-react";

const Reminder = () => {
    // ✅ Data berdasarkan jadwal resmi 2025 (untuk proyeksi 2026)
    const importantDates = [
        {
            id: 1,
            title: "SNBP 2026 Dibuka",
            date: "14 Januari 2026",
            status: "upcoming",
            color: "#3B82F6" // blue
        },
        {
            id: 2, 
            title: "SNBP 2026 Ditutup",
            date: "21 Februari 2026",
            status: "upcoming",
            color: "#F59E0B" // orange
        },
        {
            id: 3,
            title: "Pengumuman SNBP 2026", 
            date: "25 Maret 2026",
            status: "upcoming",
            color: "#10B981" // green
        },
        {
            id: 4,
            title: "UTBK-SNBT 2026 Dibuka",
            date: "12 Maret 2026",
            status: "upcoming",
            color: "#8B5CF6" // purple
        },
        {
            id: 5,
            title: "UTBK-SNBT 2026 Ditutup", 
            date: "28 Maret 2026",
            status: "upcoming", 
            color: "#EF4444" // red
        },
        {
            id: 6,
            title: "Pengumuman UTBK 2026",
            date: "20 Mei 2026",
            status: "upcoming",
            color: "#059669" // emerald
        }
    ];

    /*const getStatusIcon = (status: string) => { 
        switch(status) {
            case "completed": return <CheckCircle className="w-4 h-4 text-green-600" />
            case "ongoing": return <Clock className="w-4 h-4 text-orange-500" />
            default: return <Calendar className="w-4 h-4 text-gray-500" />
        }
    }; */

    const getDaysUntil = (dateStr: string) => {
        const today = new Date();
        const targetDate = new Date(dateStr);
        const diffTime = targetDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays < 0) return "Lewat";
        if (diffDays === 0) return "Hari ini";
        if (diffDays === 1) return "Besok";
        return `${diffDays} hari`;
    };

    return (
        <div className="space-y-2 max-h-[400px] overflow-y-auto overflow-hidden">
            {importantDates.map((item, index) => (
                <div 
                    key={item.id}
                    className="flex items-center justify-between p-3 rounded-xl transition-colors duration-150"
                >
                    <div className="flex items-center gap-3">
                        {/* ✅ Circle dengan warna seperti leaderboard */}
                        <div 
                            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium"
                            style={{ backgroundColor: item.color }}
                        >
                            {index + 1}
                        </div>
                        
                        {/* ✅ Title dan date */}
                        <div>
                            <div className="font-medium text-gray-800 text-sm">
                                {item.title}
                            </div>
                            <div className="text-xs text-gray-500">
                                {item.date}
                            </div>
                        </div>
                    </div>
                    
                    {/* ✅ Days countdown */}
                    <div className="text-right">
                        <div className="text-sm font-medium text-gray-700">
                            {getDaysUntil(item.date)}
                        </div>
                        <div className="text-xs text-gray-500">
                            tersisa
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Reminder;