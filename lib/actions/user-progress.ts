"use server"
import { revalidatePath } from "next/cache";
import { getCourseById, getUserProgress } from "../queries";
import { redirect } from "next/navigation";
import { createClient } from "../supabase/server";

export const upsertUserProgress = async (courseId:number) => {
    const supabase = await createClient();
    const { data: {user}, error } = await supabase.auth.getUser();
    if (!user || error) {
        console.log("user not found or error", error);
    }

    const course = await getCourseById(courseId);

    if (!course) {
        throw new Error("Course not found")
    }

    const existingUserProgress = await getUserProgress();

    if (existingUserProgress) {
        const { error: updateError } = await supabase.from("user_progress").update({
            active_courses_id: courseId,
            user_name: user?.email || "user",
            //userImageSrc: user.user_metadata?.avatar_url || "",
            
        })
        .eq("user_id", user?.id)
        
        if (updateError) {
            console.log("failed to update", updateError)
        }
    } else {
        const { data, error: insertError } = await supabase.from("user_progress").insert({
            user_id: user?.id,
            active_courses_id: courseId,
            user_name: user?.email || "user",
            //userImageSrc: user.user_metadata?.avatar_url || "",
        });
        if (insertError) {
            console.log("Failed to insert", insertError)
        };
        if (data) {
            console.log("user data succsess", data)
        }
    };
    
    revalidatePath("/courses");
    revalidatePath(`/courses/${course.slug}`);
    redirect(`/courses/${course.slug}`);
}

export const upsertThunders = async (courseId: number) => {
    const supabase = await createClient();
    const {data: {user}, error } = await supabase.auth.getUser();

    if (!user || error) {
        console.log('Unauthorized', error)
    }
    
    const course = await getCourseById(courseId);

    const currentUserProgress = await getUserProgress();

    const upThunders = Math.min(currentUserProgress.thunders + 1, 3);

    await supabase.from('user_progress').update({
        thunders: upThunders,
        last_thunder_at: new Date(),
    })
    .eq("user_id", user?.id)

    return {success: true, thunders: upThunders}

    revalidatePath("learn");
    revalidatePath(`/courses/${course.slug}`);
    redirect(`/courses/${course.slug}`); // ganti kalau sudah aman semua ke slugnya 
}

export const resetThunders = async (userId: string) => {
    const supabase = await createClient();
    const {data, error} = await supabase.from("user_progress").update({
        thunders: 0,
        last_thunder_at: new Date().toISOString()
    })
    .eq("user_id", userId)

    if(!data && error) {
        console.log("Gagal mereset", error)
    }
}

export const reduceThunders = async (challengeId: number) => {
    const supabase = await createClient();
    const { data: {user}, error } = await supabase.auth.getUser();

    if (!user || error) {
        console.log("Unauthorized", error)
    }

    const currentUserProgress = await getUserProgress();

    const {data: challenge} = await supabase.from("challenges").select("id, lesson_id")
    .eq("id", challengeId)
    .maybeSingle();

    if(!challenge) {
        throw new Error("Challenge not found")
    }

    const lessonId = challenge.lesson_id

    

    const { data: existingChallengeProgress} = await supabase.from("challenge_progress").select("*")
    .eq("user_id", user?.id)
    .eq("challenge_id", challengeId)

    const isPractice = !!existingChallengeProgress;

    if(isPractice) {
        return { error: "Practice"};
    }

    if(!currentUserProgress) {
        throw new Error("User Progress Not found");
    }


    if(currentUserProgress.thunders === 0) {
        console.log("nggak ada thunders woy");
        return { error: "thunders"}
    }

    const {data: userProgressUpdate } = await supabase.from("user_progress").update({
        thunders: Math.max(currentUserProgress.thunders - 1, 0)})
        .eq("user_id", user?.id);

    if(!userProgressUpdate) {
        console.log("Failed to update user progress", userProgressUpdate)
        throw new Error("Failed to update user progress")
    }

    revalidatePath("shop");
    revalidatePath("/learn")
    revalidatePath("/courses");
    revalidatePath("leaderboard");
    revalidatePath(`/courses/${lessonId}`)
}