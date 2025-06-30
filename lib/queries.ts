import { cache } from "react";
import supabase from "@/lib/db";

export const getLessons = cache(async () => {
    const {data, error} = await supabase.from("lessons").select("*").order("id", {ascending: true});

    if(error) console.log('error:', error);
    return data;
});
