import { LessonButton } from "./lesson-button";
import UnitBanner from "./unit-banner";


type Lesson = {
    id: number;
    completed: boolean;
    title: string;
}

type Props = {    
    title: string;
    description: string;
    activeLesson: Lesson | undefined;
    activeLessonPersentage: number;
    lessons : Lesson[];
};

export const Unit = ({ title, description, activeLesson, activeLessonPersentage, lessons}: Props ) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex w-full justify-center items-center lg:hidden">
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

                        />
                    )
                })}
            </div>
        </div>
    )
}