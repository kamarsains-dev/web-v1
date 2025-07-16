import { cache } from "react";
import { createClient } from "./supabase/server";

export const getUserProgress = cache(async () => {
    const supabase = await createClient();
    const { data: userData, error : userError } = await supabase.auth.getUser();
    const userId = userData.user?.id;
    if(!userId || userError) {
        return null;
    }

    const { data, error } = await supabase
    .from("user_progress")
    .select("*")
    .eq("user_id", userId)
    .limit(1)
    .single()
 
    if (error) {
        return null;
    }

    return data;
    
})

export const getCourses = cache(async () => {
    const supabase = await createClient()
    const {data, error} = await supabase.from("courses").select("*").order("id", {ascending: true});

    if(error) throw(error);
    return data;
});

export const getCourseById = cache(async (courseId: number) => {
    const supabase = await createClient();

    if (!courseId) return null;

    const { data, error } = await supabase
    .from("courses")
    .select("*")
    .eq("id", courseId)
    .single();

    if (error) throw(error);

    return data;
});

type ChallengeProgress = {
  completed: boolean;
  user_id: string;
};

type Challenge = {
  id: number;
  lesson_id: number;
  question: string;
  challenge_progress: ChallengeProgress[];
};

type Lesson = {
  id: number;
  unit_id: number;
  title: string;
  challenges: Challenge[];
  completed: boolean;
};

type Unit = {
  id: number;
  title: string;
  description: string;
  course_id: number;
  lessons: Lesson[];
};
  

export const getUnits = cache(async() => {
    const supabase = await createClient();
    const userProgress = await getUserProgress();
    const { data: userData, error: userError } = await supabase.auth.getUser();
    const userId = userData.user?.id;

    if( !userData || userError || !userProgress.active_courses_id) {
        console.log("error", userError);
    }

    const { data, error } = await supabase
    .from( "units")
    .select("*, lessons(*, challenges(*, challenge_progress(*)))")
    .eq("course_id", userProgress.active_courses_id)

    if (!data || error) {
        console.error("No units found for the active course", error);
        return [];
    }
    console.log("units data", data);

    const normalizedData = data.map((unit: Unit) => {
        const lessonsWithCompletedStatus = unit.lessons?.map((lesson) =>{
            if (lesson.challenges.length === 0) {
                return{ ...lesson, completed: false}
            }
            const allCompletedChallenges = lesson.challenges.every((challenge) => {
                const userProgressData = challenge.challenge_progress?.filter((progress) => progress.user_id === userId) ?? [];
                
                return (
                    userProgressData.length > 0 && 
                    userProgressData.every((progress) => progress.completed)
                );
            });

            return { 
            ...lesson, completed: allCompletedChallenges
            };
        });
        
        return {
            ...unit,
            lessons: lessonsWithCompletedStatus
        };    
    });
    return normalizedData;
});

export const getCourseProgress = cache (async() => {
    const supabase = await createClient();
    const { data: userData, error: userError } = await supabase.auth.getUser();
    const userId = userData.user?.id;
    const userProgress = await getUserProgress(); 

    if(!userId || userError || !userProgress.active_courses_id) {
        console.log("Error to get userId or user progress", userError)
    }

    const { data, error } = await supabase
    .from("units")
    .select("*, lessons(*, challenges(*, challenge_progress(*)))")
    .order("order", {ascending: true})

    if (!data || error) {
        console.log("No units progress found", error)
    }

    const firstUncompletedLesson = data?.flatMap((unit: Unit) => unit.lessons)
    .find ((lesson)=> {
        return lesson.challenges.some((challenge) => {
            const userProgressData = challenge.challenge_progress?.filter((progress) => progress.user_id === userId) ?? [] 

            return (
              userProgressData.length === 0 ||
              userProgressData.some((progress) => progress.completed === false)
            );
        });
    });
    
    return {
        activeLesson : firstUncompletedLesson,
        activeLessonId : firstUncompletedLesson?.id,
    };
});

export const getLesson = cache(async (id?:number) => {
    const supabase = await createClient();
    const { data: userData, error: userError } = await supabase.auth.getUser();
    const userId = userData.user?.id;   

    if(!userId || userError) {
        return null;
    }

    const courseProgress = await getCourseProgress();
    
    const lessonId = id || courseProgress?.activeLessonId
    
    if (!lessonId) {
        return null;
    }

    const {data, error} = await supabase.from("lessons")
    .select("*, challenges(*, challenge_options(*, challenge_progress(*)))")
    .order("order", {ascending: true})
    .eq("challenge_progress", userId)
    
    if(!data || error) {
        return null
    }
    
    const normalizedChallenges = data.map((challenge: Challenge) => {
        const completed = challenge.challenge_progress 
            && challenge.challenge_progress.length > 0
            && challenge.challenge_progress.every((progress) => progress.completed);

        return {...challenge, completed};
    });
    
    return {...data, challenges: normalizedChallenges}
});

export const getLessonPercentage = cache(async () => {
    const courseProgress = await getCourseProgress();
    
    if(!courseProgress.activeLessonId) {
        return 0;
    }
    
    const lesson = await getLesson(courseProgress.activeLessonId);
    
    if (!lesson) {
        return 0;
    }
    
    const completedChallenges = lesson.challenges.filter((challange) => challange.completed);
    const persentage = Math.round(
        (completedChallenges.length / lesson.challenges.length) * 100,
    );
    
    return persentage;
})
