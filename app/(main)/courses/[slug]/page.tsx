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
        <div className="container flex flex-row-reverse gap-[48px] px-6 justify-center mt-20">
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
                                lessons={[
                                    {
                                        id: 1,
                                        completed: true
                                    },
                                    {
                                        id: 2,
                                        completed: false
                                    },
                                    {
                                        id: 3,
                                        completed: false
                                    },
                                    {
                                        id: 4,
                                        completed: false
                                    },
                                    {
                                        id: 5,
                                        completed: false
                                    },
                                    {
                                        id: 6,
                                        completed: false
                                    },
                                    {
                                        id: 7,
                                        completed: false
                                    },
                                    {
                                        id: 8,
                                        completed: false
                                    },
                                    {
                                        id: 3,
                                        completed: false
                                    },
                                    {
                                        id: 4,
                                        completed: false
                                    },
                                    {
                                        id: 5,
                                        completed: false
                                    },
                                    {
                                        id: 6,
                                        completed: false
                                    },
                                    {
                                        id: 7,
                                        completed: false
                                    },
                                    {
                                        id: 8,
                                        completed: false
                                    }
                                    
                                ]} //unit.lessons
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