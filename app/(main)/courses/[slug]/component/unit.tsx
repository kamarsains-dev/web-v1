import { LessonButton } from "./lesson-button";
import UnitBanner from "./unit-banner";
import { Lesson, getUserProgress } from "@/lib/queries";

type Props = {    
    title: string;
    description: string;
    activeLesson: Lesson | undefined;
    activeLessonPersentage: number;
    lessons : Lesson[];
};

export const Unit = async ({ title, description, activeLesson, activeLessonPersentage, lessons}: Props ) => {
    const userProgressData = await getUserProgress();

    const userThunders = userProgressData.thunders
    
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex w-full justify-center items-center md:hidden">
                <UnitBanner 
                    title={title}
                    description={description}
                />    
            </div>
            
            <div className="flex flex-col items-center relative">
                {lessons.map((lesson, index) => {
                    const isCurrent = lesson.id === activeLesson?.id;
                    const isLocked = !lesson.completed && !isCurrent;

                    return (
                        <LessonButton
                            key={lesson.id}
                            id={lesson.id}
                            title={lesson.title}
                            index={index}
                            totalCount={lessons.length - 1}
                            current={isCurrent}
                            locked={isLocked}
                            percentage={activeLessonPersentage}
                            userThunders={userThunders}

                        />
                    )
                })}
            </div>
        </div>
    )
}