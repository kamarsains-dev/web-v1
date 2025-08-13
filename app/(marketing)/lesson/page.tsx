import { getLesson, getUserProgress, getUserSubscription } from "@/lib/queries";
import { Quiz } from "../component/quiz";
import { redirect } from "next/navigation";

const LessonPage = async () => {
    const activeLesson = await getLesson(); 
    const userProgressData = await getUserProgress(); 
    const userSubscriptionData = await getUserSubscription();

    const [lesson, userProgress, userSubscription] = await Promise.all([activeLesson, userProgressData, userSubscriptionData])

    if(!lesson || !userProgress) {
        console.log("Error no lesson data", lesson)
        redirect(`/courses`) // then use slug redirect
    }

    const initialPercentage = lesson.challenges.filter((challenge) => challenge.completed)
        .length / lesson.challenges.length * 100;  
    
    const isPremium = !!userSubscription?.isActive

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
            userSubscription={isPremium}
        />
    );
};

export default LessonPage;