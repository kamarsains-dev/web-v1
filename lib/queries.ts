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
})
