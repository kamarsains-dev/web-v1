import { Badge } from "@/components/ui/badge";
import List from "./component/list";
import { getCourses, getUserProgress } from "@/lib/queries";

const Courses = async () => {
    const coursesData = await getCourses();
    const userProgressData = await getUserProgress();


    return(
        <div className="w-full max-w-[1200px] flex flex-col justify-center items-center text-center container pb-20 mt-13 ">
            <div className="pt-10">
                <Badge className="lg:w-24 lg:text-sm font-medium my-3" variant="tertiary">Eazy Level</Badge>
                <h1 className="text-2xl lg:text-3xl font-bold">Right Learning. Real Progress.</h1>
                <p className="text-sm lg:text-lg font-normal text-slate-500">Lessons to Unlock Your Dream Campus.</p>
            </div>
            <div className="flex gap-4 pt-4 w-full justify-center items-center">
                 <List
                    courses={coursesData}
                    activeCourseId={userProgressData?.activeCourseId}    
                />     
            </div>     
        </div>
    )
}

export default Courses;