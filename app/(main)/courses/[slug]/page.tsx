import { getUnits, getUserProgress } from "@/lib/queries";
import { redirect } from "next/navigation";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { FeedWrapper } from "@/components/feed-wrapper";
import InfoCard from "./component/info-card";
import { Unit } from "./component/unit";


const Learn = async () => {
    const userProgressData = await getUserProgress();
    const unitsData = await getUnits();
    // const courseData = await getCourseById(userProgressData?.active_courses_id); // add getCourseById in lib/queries
    const [ userProgress, units ] = await Promise.all([userProgressData, unitsData]);

    if (!userProgress || !userProgress.active_courses_id) {
        redirect("/courses");
    }

    return(
        <div className=" max-w-[1300px] container flex flex-row-reverse justify-center mt-20 pb-20">
            <StickyWrapper>
                <InfoCard/>
            </StickyWrapper>
            <FeedWrapper>
                <div className="flex flex-col justify-center items-center w-full">
                    {units.map((unit) => (
                        <div className="w-full text-center" key={unit.id}>
                            <Unit                       
                                description={unit.description}
                                title={unit.title}
                                lessons={unit.lessons} //unit.lessons
                                activeLesson={null}
                                activeLessonPersentage={0}
                            />
                        </div>
                        
                    ))}
                </div>
            </FeedWrapper>
        </div>
    );
};

export default Learn;