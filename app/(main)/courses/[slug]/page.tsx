import { getCourseById, getUserProgress } from "@/lib/queries";
import { redirect } from "next/navigation";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { FeedWrapper } from "@/components/feed-wrapper";
import InfoCard from "./component/info-card";


const Learn = async () => {
    const userProgressData = await getUserProgress();
    const courseData = await getCourseById(userProgressData?.active_courses_id);

    if (!userProgressData) {
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
                    <p>
                        course title : {courseData.title}
                    </p>
                </div>
            </FeedWrapper>
        </div>
    );
};

export default Learn;