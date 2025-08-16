"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer} from 'recharts'
import { Target, TrendingUp, Brain, Calculator, Award, Zap, Calendar } from 'lucide-react'

const UserAnalytics = () => {
    // ✅ Dummy data untuk analytics
    const userData = {
        currentStreak: 7,
        maxStreak: 12,
        totalSessions: 45,
        averageAccuracy: 78,
        totalQuestions: 850,
        correctAnswers: 663,
        weeklyGoal: 5,
        completedThisWeek: 4
    }

    // Data untuk PM (Penalaran Matematika)
    const pmData = {
        currentScore: 720,
        targetScore: 800,
        improvement: +15,
        accuracy: 72,
        avgTimePerQuestion: 2.5,
        topicBreakdown: [
            { topic: 'Aljabar', score: 85, total: 100 },
            { topic: 'Geometri', score: 78, total: 100 },
            { topic: 'Trigonometri', score: 65, total: 100 },
            { topic: 'Statistika', score: 82, total: 100 },
            { topic: 'Peluang', score: 70, total: 100 }
        ]
    }

    // Data untuk PK (Penalaran Kuantitatif) 
    const pkData = {
        currentScore: 680,
        targetScore: 750,
        improvement: +22,
        accuracy: 68,
        avgTimePerQuestion: 3.2,
        topicBreakdown: [
            { topic: 'Aritmatika', score: 80, total: 100 },
            { topic: 'Perbandingan', score: 75, total: 100 },
            { topic: 'Grafik & Tabel', score: 70, total: 100 },
            { topic: 'Logika Kuantitatif', score: 60, total: 100 },
            { topic: 'Analisis Data', score: 85, total: 100 }
        ]
    }

    // Progress chart data (7 hari terakhir)
    const progressData = [
        { day: 'Sen', pm: 680, pk: 620 },
        { day: 'Sel', pm: 695, pk: 635 },
        { day: 'Rab', pm: 705, pk: 650 },
        { day: 'Kam', pm: 710, pk: 660 },
        { day: 'Jum', pm: 715, pk: 665 },
        { day: 'Sab', pm: 720, pk: 680 },
        { day: 'Min', pm: 720, pk: 680 }
    ]

    // Target PTN data
    const targetOptions = [
        { 
            id: 1, 
            university: 'UI', 
            major: 'Kedokteran', 
            pmTarget: 850, 
            pkTarget: 820,
            difficulty: 'Sangat Sulit',
            color: 'bg-red-500'
        },
        { 
            id: 2, 
            university: 'ITB', 
            major: 'Teknik Informatika', 
            pmTarget: 800, 
            pkTarget: 780,
            difficulty: 'Sulit',
            color: 'bg-orange-500'
        },
        { 
            id: 3, 
            university: 'UGM', 
            major: 'Akuntansi', 
            pmTarget: 720, 
            pkTarget: 700,
            difficulty: 'Sedang',
            color: 'bg-yellow-500'
        },
        { 
            id: 4, 
            university: 'UNAIR', 
            major: 'Psikologi', 
            pmTarget: 680, 
            pkTarget: 660,
            difficulty: 'Mudah',
            color: 'bg-green-500'
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50 p-6 mt-15">
            <div className="max-w-[1000px] mx-auto space-y-6">
                
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
                        <p className="text-gray-600 mt-1">Track your UTBK preparation progress</p>
                    </div>
                    <Badge className="px-4 py-2 text-sm" variant="secondary">
                        <Zap className="w-4 h-4 mr-2" />
                        {userData.currentStreak} day streak!
                    </Badge>
                </div>

                {/* Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card className="border-l-4 border-l-blue-500">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600">Total Sesi</p>
                                    <p className="text-2xl font-bold">{userData.totalSessions}</p>
                                </div>
                                <Calendar className="w-8 h-8 text-blue-500" />
                            </div>
                        </CardContent>
                    </Card>
                    
                    <Card className="border-l-4 border-l-green-500">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600">Akurasi Rata-rata</p>
                                    <p className="text-2xl font-bold">{userData.averageAccuracy}%</p>
                                </div>
                                <Target className="w-8 h-8 text-green-500" />
                            </div>
                        </CardContent>
                    </Card>
                    
                    <Card className="border-l-4 border-l-purple-500">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600">Total Soal</p>
                                    <p className="text-2xl font-bold">{userData.totalQuestions}</p>
                                </div>
                                <Brain className="w-8 h-8 text-purple-500" />
                            </div>
                        </CardContent>
                    </Card>
                    
                    <Card className="border-l-4 border-l-orange-500">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600">Jawaban Benar</p>
                                    <p className="text-2xl font-bold">{userData.correctAnswers}</p>
                                </div>
                                <Award className="w-8 h-8 text-orange-500" />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    
                    {/* Penalaran Matematika */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Calculator className="w-5 h-5 text-blue-600" />
                                Penalaran Matematika
                            </CardTitle>
                            <CardDescription>Current performance and breakdown</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Score Progress */}
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium">Skor Saat Ini</span>
                                    <span className="text-2xl font-bold text-blue-600">{pmData.currentScore}</span>
                                </div>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-sm text-gray-600">Target: {pmData.targetScore}</span>
                                    <Badge variant="secondary" className="text-xs">
                                        <TrendingUp className="w-3 h-3 mr-1" />
                                        +{pmData.improvement}
                                    </Badge>
                                </div>
                                <Progress value={(pmData.currentScore / pmData.targetScore) * 100} className="h-2" />
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-3 bg-gray-50 rounded-lg">
                                    <p className="text-2xl font-bold text-blue-600">{pmData.accuracy}%</p>
                                    <p className="text-xs text-gray-600">Tingkat Akurasi</p>
                                </div>
                                <div className="text-center p-3 bg-gray-50 rounded-lg">
                                    <p className="text-2xl font-bold text-blue-600">{pmData.avgTimePerQuestion}m</p>
                                    <p className="text-xs text-gray-600">Rata-rata Waktu</p>
                                </div>
                            </div>

                            {/* Topic Breakdown */}
                            <div>
                                <h4 className="font-medium mb-3">Breakdown per Topik</h4>
                                <div className="space-y-2">
                                    {pmData.topicBreakdown.map((topic) => (
                                        <div key={topic.topic} className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">{topic.topic}</span>
                                            <div className="flex items-center gap-2">
                                                <Progress value={topic.score} className="w-20 h-2" />
                                                <span className="text-sm font-medium">{topic.score}%</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Penalaran Kuantitatif */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Brain className="w-5 h-5 text-purple-600" />
                                Penalaran Kuantitatif
                            </CardTitle>
                            <CardDescription>Current performance and breakdown</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Score Progress */}
                            <div className="bg-purple-50 p-4 rounded-lg">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium">Skor Saat Ini</span>
                                    <span className="text-2xl font-bold text-purple-600">{pkData.currentScore}</span>
                                </div>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-sm text-gray-600">Target: {pkData.targetScore}</span>
                                    <Badge variant="secondary" className="text-xs">
                                        <TrendingUp className="w-3 h-3 mr-1" />
                                        +{pkData.improvement}
                                    </Badge>
                                </div>
                                <Progress value={(pkData.currentScore / pkData.targetScore) * 100} className="h-2" />
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-3 bg-gray-50 rounded-lg">
                                    <p className="text-2xl font-bold text-purple-600">{pkData.accuracy}%</p>
                                    <p className="text-xs text-gray-600">Tingkat Akurasi</p>
                                </div>
                                <div className="text-center p-3 bg-gray-50 rounded-lg">
                                    <p className="text-2xl font-bold text-purple-600">{pkData.avgTimePerQuestion}m</p>
                                    <p className="text-xs text-gray-600">Rata-rata Waktu</p>
                                </div>
                            </div>

                            {/* Topic Breakdown */}
                            <div>
                                <h4 className="font-medium mb-3">Breakdown per Topik</h4>
                                <div className="space-y-2">
                                    {pkData.topicBreakdown.map((topic) => (
                                        <div key={topic.topic} className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600">{topic.topic}</span>
                                            <div className="flex items-center gap-2">
                                                <Progress value={topic.score} className="w-20 h-2" />
                                                <span className="text-sm font-medium">{topic.score}%</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Progress Chart */}
                <Card>
                    <CardHeader>
                        <CardTitle>Progress 7 Hari Terakhir</CardTitle>
                        <CardDescription>Tracking your daily improvement</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={progressData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="day" />
                                <YAxis domain={[600, 800]} />
                                <Line type="monotone" dataKey="pm" stroke="#2563eb" strokeWidth={3} name="PM" />
                                <Line type="monotone" dataKey="pk" stroke="#7c3aed" strokeWidth={3} name="PK" />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Target PTN Selection */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Target className="w-5 h-5" />
                            Pilih Target PTN & Prodi
                        </CardTitle>
                        <CardDescription>Set your university and major goals with required scores</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {targetOptions.map((target) => (
                                <Card key={target.id} className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-blue-300">
                                    <CardContent className="p-4">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className={`w-8 h-8 rounded-full ${target.color} flex items-center justify-center text-white font-bold text-sm`}>
                                                {target.university.charAt(0)}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-sm">{target.university}</h3>
                                                <p className="text-xs text-gray-600">{target.major}</p>
                                            </div>
                                        </div>
                                        
                                        <Badge variant="outline" className={`mb-3 text-xs ${
                                            target.difficulty === 'Sangat Sulit' ? 'border-red-500 text-red-700' :
                                            target.difficulty === 'Sulit' ? 'border-orange-500 text-orange-700' :
                                            target.difficulty === 'Sedang' ? 'border-yellow-500 text-yellow-700' :
                                            'border-green-500 text-green-700'
                                        }`}>
                                            {target.difficulty}
                                        </Badge>
                                        
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <span className="text-xs text-gray-600">PM Target:</span>
                                                <span className="text-sm font-bold">{target.pmTarget}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-xs text-gray-600">PK Target:</span>
                                                <span className="text-sm font-bold">{target.pkTarget}</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default UserAnalytics;