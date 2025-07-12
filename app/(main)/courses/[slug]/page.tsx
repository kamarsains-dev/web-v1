import { getCourseById, getUnits, getUserProgress } from "@/lib/queries";
import { redirect } from "next/navigation";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { FeedWrapper } from "@/components/feed-wrapper";
import InfoCard from "./component/info-card";


const Learn = async () => {
    const userProgressData = await getUserProgress();
    const unitsData = await getUnits();
    const courseData = await getCourseById(userProgressData?.active_courses_id);
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
                <div className="flex flex-col justify-center items-center w-full h-[800px]">
                    <p>
                        course id : {courseData.id}
                    </p>
                    <p className="mb-7">
                        course title : {courseData.title}
                    </p>
                    {units.map((unit) => (
                        <div className="text-center" key={unit.id}>
                            {JSON.stringify(unit)}
                            <h2 className="text-2xl font-bold">unit {unit.title}</h2>
                        </div>
                    ))}
                </div>
            </FeedWrapper>
        </div>
    );
};

export default Learn;