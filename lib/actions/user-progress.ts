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
    const success = redirect(`/courses/${course.slug}`);

    if (success) {
        revalidatePath("/courses");
        revalidatePath(`/courses/${course.slug}`);    
    } else {
        console.log("Failed to revalidate path")
    }
    
    
    
    

}