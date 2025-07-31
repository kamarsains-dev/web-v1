import { getUnits, getCourseProgress } from "@/lib/queries";
import CircularProgress from "@/components/progress-07";


type Props = {
    title: string;
    description: string;
}

const unitBanner = async ({ title, description }: Props) => {
    const unitsData = await getUnits();
    const courseProgressData = await getCourseProgress();
    const unitId = courseProgressData.activeLesson?.unit_id;

    const currentUnit = unitsData.find((unit) => unit.id === unitId)
    const totalLessons = currentUnit?.lessons.length ?? 0;
    const completedLessons = currentUnit?.lessons.filter((lesson) => lesson.completed).length ?? 0;

    const lessonProgress = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

    return (
        <div className="w-screen flex justify-center items-center">
            <div className="flex px-3 justify-center text-left items-center w-full border-gray-200 border-b-2 gap-x-5">  
                <div className="w-full my-4 mx-5 flex flex-col gap-y-1">
                    <div className="flex gap-x-3 w-full items-center">
                        <div className="bg-[#375CE3] max-w-14 w-full h-full flex justify-center items-center rounded-md">
                            <h1 className="text-[12px] text-white font-bold uppercase p-0.5">{title}</h1>
                        </div>
                        <div className="">
                            <h1 className="text-lg font-bold">{description}</h1> 
                        </div>
                    </div>
                    <div className="flex w-full items-center gap-x-2">
                        <CircularProgress value={lessonProgress} size={25} strokeWidth={6}/>
                        <h1 className="text-sm font-light text-gray-400"> {completedLessons} dari {totalLessons} selesai</h1> 
                    </div>
                </div>   
                
            </div>
        </div>
    )
}

export default unitBanner;