import { getCourseById, getUserProgress } from "@/lib/queries";
import { redirect } from "next/navigation";


const Learn = async () => {
    const userProgressData = await getUserProgress();
    const courseData = await getCourseById(userProgressData?.active_courses_id);

    if (!userProgressData) {
        redirect("/courses");
    }

    return(
        <div className="w-full flex flex-col justify-center items-center h-screen mt-13">
            <div>
                Active course by id : {userProgressData.active_courses_id} 
            </div>
            <div>
                Course data : {courseData ? courseData.title : "Loading..."}
            </div>
        </div>
    );
};

export default Learn;