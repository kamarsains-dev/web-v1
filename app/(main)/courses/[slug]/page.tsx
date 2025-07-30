import { getUnits, getUserProgress, getCourseProgress, getLessonPercentage } from "@/lib/queries";
import { redirect } from "next/navigation";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { FeedWrapper } from "@/components/feed-wrapper";
import InfoCard from "./component/info-card";
import { Unit } from "./component/unit";
//import Reminder from "../../component/reminder";

const Learn = async () => {
    const userProgressData = getUserProgress();
    const unitsData = getUnits();
    // const courseData = await getCourseById(userProgressData?.active_courses_id); // add getCourseById in lib/queries
    const courseProgressData = getCourseProgress();
    const lessonPercentageData = getLessonPercentage();
    const [ userProgress, units, courseProgress, lessonPercentage ] = await Promise.all([userProgressData, unitsData, courseProgressData, lessonPercentageData]);

    if (!userProgress || !userProgress.active_courses_id || !courseProgress) {
        redirect("/courses");
    }

    return(
        <div className=" max-w-[1300px] container flex flex-row-reverse justify-center mt-17 md:mt-20 pb-20">
            <StickyWrapper>
                <div className="w-[346px]">
                    <InfoCard/>
                </div>
                
            </StickyWrapper>
            <FeedWrapper>
                <div className="flex flex-col justify-center items-center w-full">
                    {units.map((unit) => (
                        <div className="w-full text-center" key={unit.id}>
                            <Unit                       
                                description={unit.description}
                                title={unit.title}
                                lessons={unit.lessons} //unit.lessons
                                activeLesson={courseProgress.activeLesson}
                                activeLessonPersentage={lessonPercentage}
                            />
                        </div>
                        
                    ))}
                </div>
                
            </FeedWrapper>
        </div>
    );
};

export default Learn;