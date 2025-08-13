"use server"

// import { absoluteUrl } from "../utils"
// import { getUserSubscription } from "../queries"
import { createClient } from "../supabase/server";

// const returnUrl = absoluteUrl("/shop");

export const createMidtransUrl = async () => {
    const supabase = await createClient();

    const {data: userData, error: errorData} = await supabase.auth.getUser();
    const userId = userData.user?.id

    if(!userId || errorData) {
        console.log("Unauthorized", errorData)
        throw new Error("Unauthorized")
    }
 /*
    const userSubscription = await getUserSubscription();

   
    if(userSubscription && userSubscription.user_id) {
        try {
            const {data, error} = await supabase.from("user_subscription")
            .insert({})
        }
    } */

}