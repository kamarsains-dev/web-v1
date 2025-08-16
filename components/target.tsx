"use client"

import { Target, Book, Calculator } from "lucide-react";

const TargetScoreTracker = () => {
    // ✅ Dummy data - nanti connect ke database
    const targetData = {
        university: "Universitas Indonesia",
        major: "Teknik Informatika",
        penalaranKuantitatif: {
            current: 520,
            target: 650,
            progress: 80 // percentage
        },
        penalaranMatematika: {
            current: 480,
            target: 620,
            progress: 77 // percentage
        },
        daysLeft: 127, // hari menuju UTBK
        weeklyProgress: [
            { day: "M", completed: false, score: null },
            { day: "T", completed: true, score: 85 },
            { day: "W", completed: true, score: 92 },
            { day: "T", completed: false, score: null },
            { day: "F", completed: false, score: null },
            { day: "S", completed: false, score: null },
            { day: "S", completed: false, score: null }
        ],
        currentStreak: 3,
        maxStreak: 7
    };

    const getProgressColor = (progress: number) => {
        if (progress >= 80) return "text-green-600";
        if (progress >= 60) return "text-yellow-600";
        return "text-red-600";
    };

    const getProgressBg = (progress: number) => {
        if (progress >= 80) return "bg-green-100 border-green-300";
        if (progress >= 60) return "bg-yellow-100 border-yellow-300";
        return "bg-red-100 border-red-300";
    };

    return (
        <div className="w-full max-w-md bg-white border-2 border-purple-300 rounded-2xl p-6">
            {/* Header dengan target dan hari tersisa */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                        <Target className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-800">
                        {targetData.daysLeft}
                        <span className="text-sm font-normal text-yellow-500 ml-1">⚡</span>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-xs text-gray-500">Target</div>
                    <div className="text-sm font-bold text-gray-700">{targetData.daysLeft} hari lagi</div>
                </div>
            </div>

            {/* Target University & Major */}
            <div className="mb-4">
                <h3 className="font-semibold text-gray-800 text-sm mb-1">
                    Target: {targetData.university}
                </h3>
                <p className="text-xs text-gray-600">{targetData.major}</p>
            </div>

            {/* Progress Bars */}
            <div className="space-y-4 mb-6">
                {/* Penalaran Kuantitatif */}
                <div className={`p-4 rounded-xl border-2 ${getProgressBg(targetData.penalaranKuantitatif.progress)}`}>
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                            <Calculator className="w-4 h-4 text-gray-600" />
                            <span className="text-sm font-medium text-gray-700">PK</span>
                        </div>
                        <span className={`text-sm font-bold ${getProgressColor(targetData.penalaranKuantitatif.progress)}`}>
                            {targetData.penalaranKuantitatif.current}/{targetData.penalaranKuantitatif.target}
                        </span>
                    </div>
                    <div className="w-full bg-white rounded-full h-2 mb-2">
                        <div 
                            className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${targetData.penalaranKuantitatif.progress}%` }}
                        ></div>
                    </div>
                    <div className="text-xs text-gray-600">
                        {targetData.penalaranKuantitatif.progress}% dari target
                    </div>
                </div>

                {/* Penalaran Matematika */}
                <div className={`p-4 rounded-xl border-2 ${getProgressBg(targetData.penalaranMatematika.progress)}`}>
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                            <Book className="w-4 h-4 text-gray-600" />
                            <span className="text-sm font-medium text-gray-700">PM</span>
                        </div>
                        <span className={`text-sm font-bold ${getProgressColor(targetData.penalaranMatematika.progress)}`}>
                            {targetData.penalaranMatematika.current}/{targetData.penalaranMatematika.target}
                        </span>
                    </div>
                    <div className="w-full bg-white rounded-full h-2 mb-2">
                        <div 
                            className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${targetData.penalaranMatematika.progress}%` }}
                        ></div>
                    </div>
                    <div className="text-xs text-gray-600">
                        {targetData.penalaranMatematika.progress}% dari target
                    </div>
                </div>
            </div>

            {/* Weekly Progress Dots */}
            <div className="mb-6">
                <div className="flex justify-center gap-2 mb-3">
                    {targetData.weeklyProgress.map((day, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-200 ${
                                day.completed 
                                    ? 'bg-lime-500 border-lime-500 text-white' 
                                    : 'bg-gray-200 border-gray-300 text-gray-400'
                            }`}>
                                {day.completed && <span className="text-xs">⚡</span>}
                            </div>
                            <span className="text-xs text-gray-600 mt-1">{day.day}</span>
                        </div>
                    ))}
                </div>
                <p className="text-center text-sm text-gray-700">
                    Youre on a <span className="font-bold text-purple-600">{targetData.currentStreak}-day streak!</span>
                </p>
            </div>

            {/* Stats Row */}
            <div className="flex justify-between bg-gray-100 rounded-xl p-4">
                <div className="text-center">
                    <div className="text-xl font-bold text-gray-800">{targetData.maxStreak}</div>
                    <div className="text-xs text-gray-600">Max streak</div>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="text-center">
                    <div className="text-xl font-bold text-gray-800">
                        {Math.round((targetData.penalaranKuantitatif.progress + targetData.penalaranMatematika.progress) / 2)}%
                    </div>
                    <div className="text-xs text-gray-600">Total progress</div>
                </div>
            </div>
        </div>
    );
};

export default TargetScoreTracker;