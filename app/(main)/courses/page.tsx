import List from "./component/list";
import { getCourses, getUserProgress } from "@/lib/queries";

const Courses = async () => {
    const coursesData = await getCourses();
    const userProgressData = await getUserProgress();


    return(
        <div className="w-full max-w-[1200px] flex flex-col justify-center items-center text-center container pb-20 mt-16">
            <div className="pt-10 flex flex-col text-left w-full">
                <h1 className="text-2xl font-bold">Logic Mastery</h1>
                <p className="text-sm lg:text-[16px] font-normal text-slate-500">Lessons to Unlock Your Dream Campus.</p>
            </div>
            <div className="flex gap-4 pt-8 w-full justify-center items-center">
                 <List
                    courses={coursesData}
                    activeCourseId={userProgressData?.activeCourseId}    
                />     
            </div>     
        </div>
    )
}

export default Courses;