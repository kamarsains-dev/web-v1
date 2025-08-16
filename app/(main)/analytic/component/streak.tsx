import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Zap, Target, Clock, CheckCircle } from "lucide-react";

// Dummy data
const pkData = {
  currentScore: 680,
  targetScore: 800,
  improvement: 45,
  accuracy: 87,
  avgTimePerQuestion: 2.5,
  currentStreak: 2,
  maxStreak: 13,
  lessonsCompleted: 25
};

const StreakStatsLayout = () => {
    // Calculate progress percentage
    const progressPercentage = Math.round((pkData.currentScore / pkData.targetScore) * 100);
    
    return (
        <div className="w-full max-w-md mx-auto bg-white border-2 border-purple-200 rounded-3xl p-6 space-y-6">
            {/* Header with Current Streak */}
            <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-4xl font-bold text-gray-800">{pkData.currentStreak}</span>
                    <Zap className="w-8 h-8 text-yellow-500" />
                </div>
                <p className="text-gray-600 font-medium">You re on a {pkData.currentStreak}-day streak!</p>
            </div>

            {/* Weekly Progress (like Duolingo) */}
            <div className="flex justify-center gap-1">
                {['F', 'S', 'Su', 'M', 'T'].map((day, index) => (
                    <div key={day} className="flex flex-col items-center gap-1">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                            index < 2 
                                ? 'bg-yellow-400 border-yellow-500' // completed days
                                : 'bg-gray-100 border-gray-200' // upcoming days
                        }`}>
                            {index < 2 ? (
                                <Zap className="w-4 h-4 text-yellow-600" />
                            ) : (
                                <span className="text-gray-400 text-xs font-medium">{day}</span>
                            )}
                        </div>
                        <span className="text-xs text-gray-600 font-medium">{day}</span>
                    </div>
                ))}
            </div>

            {/* Score Progress - Row 1 (Full Width) */}
            <div className="bg-purple-50 p-4 rounded-2xl">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-purple-600" />
                        <span className="text-sm font-medium text-gray-700">Skor Saat Ini</span>
                    </div>
                    <span className="text-2xl font-bold text-purple-600">{pkData.currentScore}</span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-gray-500">Target: {pkData.targetScore}</span>
                    <Badge variant="secondary" className="text-xs bg-green-100 text-green-700 border-green-200">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        +{pkData.improvement}
                    </Badge>
                </div>
                <Progress value={progressPercentage} className="h-2" />
                <p className="text-xs text-gray-500 mt-1">{progressPercentage}% dari target</p>
            </div>

            {/* Bottom Stats - Row 2 (2 Columns in one card like your layout) */}
            <div className="bg-gray-100 rounded-2xl p-4">
                <div className="grid grid-cols-3 gap-4">
                    {/* Max Streak */}
                    <div className="text-center">
                        <p className="text-2xl font-bold text-gray-800">{pkData.maxStreak}</p>
                        <p className="text-xs text-gray-500 font-medium">Max streak</p>
                    </div>
                    
                    {/* Divider */}
                    <div className="flex justify-center">
                        <hr className="border border-gray-300 h-12 my-auto" />
                    </div>
                    
                    {/* Lessons Completed */}
                    <div className="text-center">
                        <p className="text-2xl font-bold text-gray-800">{pkData.lessonsCompleted}</p>
                        <p className="text-xs text-gray-500 font-medium">Lessons complete</p>
                    </div>
                </div>
            </div>

            {/* Additional Stats (Accuracy & Time) - Row 3 */}
            <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-4 bg-blue-50 rounded-2xl border border-blue-100">
                    <div className="flex items-center justify-center gap-1 mb-1">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <p className="text-xl font-bold text-blue-600">{pkData.accuracy}%</p>
                    </div>
                    <p className="text-xs text-gray-600 font-medium">Tingkat Akurasi</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-2xl border border-orange-100">
                    <div className="flex items-center justify-center gap-1 mb-1">
                        <Clock className="w-4 h-4 text-orange-600" />
                        <p className="text-xl font-bold text-orange-600">{pkData.avgTimePerQuestion}m</p>
                    </div>
                    <p className="text-xs text-gray-600 font-medium">Rata-rata Waktu</p>
                </div>
            </div>
        </div>
    );
};

export default StreakStatsLayout;