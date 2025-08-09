'use server'

import { createClient } from "../supabase/server";
import { getUserProgress } from "../queries";
import { revalidatePath } from "next/cache";


export const upsertChallengeProgress = async (challengeId: number) => {
    const supabase = await createClient();
    const { data: userData, error: userError } = await supabase.auth.getUser();
    const userId = userData?.user?.id;
    

    if(!userData || userError) {
        throw new Error("Unauthorized")
    }

    const currentUserProgress = await getUserProgress();
    
    if (!currentUserProgress) {
        throw new Error("User Progress Not Found")
    }

    const {data: challengeData, error: errorChallenge } = await supabase.from("challenges").select("*")
    .eq("id", challengeId)
    .maybeSingle();

    if(!challengeData || errorChallenge ) {
        console.log("Challenge not found")
        throw new Error("Challenge not found")
    }

    const lessonId = challengeData.lesson_id;
    console.log("lessonId", lessonId)

    const {data: lessonData, error: lessonError} = await supabase.from("lessons").select("*")
    .eq("id", lessonId)
    .maybeSingle();

    if (!lessonData || lessonError) {
        console.log("Lesson not found", lessonError)
        throw new Error("Lesson not found")
    }

    const { data: unitData, error: unitError } = await supabase
      .from("units")
      .select("course_id")
      .eq("id", lessonData.unit_id)
      .maybeSingle();

    if (!unitData || unitError) {
      console.log("Unit not found", unitError);
      throw new Error("Unit not found");
    }

    // 2. Ambil course berdasarkan course_id dari unit
    const { data: courseData, error: courseError } = await supabase
      .from("courses")
      .select("slug")
      .eq("id", unitData.course_id)
      .maybeSingle();

    if (!courseData || courseError) {
      console.log("Course not found", courseError);
      throw new Error("Course not found");
    }

    const slug = courseData.slug;


    const {data: existingChallengeProgress, error: errorExistingChallengeProgress} = await supabase.from("challenge_progress").select("*")
    .eq("user_id", userId)
    .eq("challenge_id", challengeId) // terakhir, diganti dari yang sebelumnya "id"
    .maybeSingle();

     if (errorExistingChallengeProgress){
        console.log("Failed to update", errorExistingChallengeProgress)
        throw new Error("Failed to update")
    }

    const isPractice = !!existingChallengeProgress;

    if (currentUserProgress.thunders === 3 && !isPractice) {
        console.log("Sudah max thunders woy")
        return {error: "thunder"}
    }

    if (isPractice) {
        const {error: updateProgressError} = await supabase.from("challenge_progress").update({completed: true})
        .eq("id", existingChallengeProgress.id)

        if (updateProgressError) {
            console.error("Error updating challenge progress:", updateProgressError);
            throw new Error("Failed to update challenge progress");
        }

        const {error: updateUserError} = await supabase.from("user_progress").update({
            points: currentUserProgress.points + 2,
        })
        .eq("user_id", userId)

        if (updateUserError) {
            console.error("Error updating user progress:", updateUserError);
            throw new Error("Failed to update user progress");
        }

        // TODO: Jangan lupa add slug nya Zan. Kalau nggak save berarti ada yang salah di sini.
        revalidatePath("/courses");
        revalidatePath(`/courses/${slug}/${lessonId}`);
        revalidatePath("/learn");
        revalidatePath("leaderboard");
        return;
    }

    await supabase
      .from("challenge_progress")
      .insert({ challenge_id: challengeId, user_id: userId, completed: true });

    await supabase.from("user_progress").update({points: currentUserProgress.points + 4}) // Update thunders kalau sudah selesai lessons
    .eq("user_id", userId)
    .maybeSingle();

    revalidatePath("/courses");
    revalidatePath(`/courses/${slug}/${lessonId}`);
    revalidatePath("/learn");
    revalidatePath("leaderboard");
    return;
}