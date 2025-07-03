import { cache } from "react";
import supabase from "@/lib/db";


export const getUserProgress = cache(async () => {
    const { data: userData, error:authError } = await supabase.auth.getUser();
    const userId = userData?.user?.id
    if(!userId || authError) {
        return null;
    }

    const {data } = await supabase
    .from("user_progress")
    .select("*")
    .eq("user_id", userId)
    .limit(1)
    .single()

    return data;
    
})

export const getLessons = cache(async () => {
    const {data, error} = await supabase.from("lessons").select("*").order("id", {ascending: true});

    if(error) throw(error);
    return data;
});
