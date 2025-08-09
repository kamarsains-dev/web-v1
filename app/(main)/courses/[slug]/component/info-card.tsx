import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image";
import { getCourseById, getUserProgress } from "@/lib/queries";
import { redirect } from "next/navigation";
import { getUnits, getCourseProgress } from "@/lib/queries";
import CircularProgress from "@/components/progress-07";

const InfoCard = async () => {
    const userProgressData = await getUserProgress();
    const courseData = await getCourseById(userProgressData?.active_courses_id);

    if (!userProgressData) {
        redirect("/courses");
    }

    const unitsData = await getUnits();
    const courseProgressData = await getCourseProgress();
    const unitId = courseProgressData.activeLesson?.unit_id;

    const currentUnit = unitsData.find((unit) => unit.id === unitId)

    if(!currentUnit) {
        return (
            <div>
                <Card>
                    <CardHeader>
                        <Image 
                            src={courseData.icon}
                            width={100}
                            height={100}
                            alt="level-up"
                            className="mb-3"
                        />
                        <CardTitle>
                            {courseData.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex w-full items-center gap-x-2">
                            <CircularProgress value={100} size={30} strokeWidth={7}/>
                            <h1 className="text-md text-gray-400">Semua selesai!</h1> 
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }

    const totalLessons = currentUnit?.lessons.length ?? 0;
    const completedLessons = currentUnit?.lessons.filter((lesson) => lesson.completed).length ?? 0;

    const lessonProgress = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;


    return(
        <div>
            <Card>
                <CardHeader>
                    <Image 
                        src={courseData.icon}
                        width={100}
                        height={100}
                        alt="level-up"
                        className="mb-3"
                    />
                    <CardTitle>
                        {courseData.title}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex w-full items-center gap-x-2">
                        <CircularProgress value={lessonProgress} size={30} strokeWidth={7}/>
                        <h1 className="text-md text-gray-400"> {completedLessons} dari {totalLessons} selesai</h1> 
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default InfoCard;
