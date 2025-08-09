import { getLesson, getUserProgress } from "@/lib/queries";
import { Quiz } from "../../../component/quiz";
import { redirect } from "next/navigation";

type Props = {
    params: {
        lessonId: number;
    };
}

const LessonIdPage = async ({params}: Props) => {
    const {lessonId} = await params;
    const activeLesson = await getLesson(lessonId); 
    const userProgressData = await getUserProgress(); 

    const [lesson, userProgress] = await Promise.all([activeLesson, userProgressData])

    if(!lesson || !userProgress) {
        console.log("Error no lesson data", lesson)
        redirect(`/courses`) // then use slug redirect
    }

    const initialPercentage = lesson.challenges.filter((challenge) => challenge.completed)
        .length / lesson.challenges.length * 100;  
    

    return (
        <Quiz
            initialLessonId={lesson.id}
            initialLessonChallenges={lesson.challenges.map(challenge => ({
                challenge: challenge,
                question: challenge.question,
                completed: challenge.completed,
                type: challenge.type,
                order: challenge.order,
                challenge_options: challenge.challenge_options,
                challenge_progress: challenge.challenge_progress
            }))}
            initialThunders={userProgress.thunders}
            initialPercentage={initialPercentage}
            userSubscription={null}
        />
    );
};

export default LessonIdPage;