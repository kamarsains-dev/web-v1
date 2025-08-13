import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import crypto from "crypto"

export async function POST(request) {
    const supabase = await createClient();
    const serverKey = process.env.MIDTRANS_SERVER_KEY;

    try {
        const payload = await request.json();
        const {transaction_status, order_id, gross_amount, signature_key} = payload;

        const hashed = crypto
            .createHash("sha512")
            .update(order_id + gross_amount + transaction_status + serverKey)
            .digest("hex");

        if (hashed !== signature_key) {
            console.error("Invalid signature key:", {
                received: signature_key,
                expected: hashed,
            });
            return NextResponse.json({error: "Invalid signature key"}, {status: 401})
        }

        if(transaction_status === 'settlement' || transaction_status === 'capture'){
            const {data: orderData, error: orderError} = await supabase
            .from("orders")
            .select("user_id, package_id")
            .eq("order_id", order_id)
            .single();

            if(!orderData || orderError) {
                console.log("Orders not found in database", orderError)
                return NextResponse.json({ error: "Order not found" }, {status: 404});
            }

            const { data: pricingPackage, error: packageError} = await supabase
            .from("pricing_packages")
            .select("duration_months")
            .eq("id", orderData.package_id)
            .single();

            if(!pricingPackage || packageError) {
                return NextResponse.json({ error: 'Package not found'}, {status: 404})
            }

            const {error:UpdateError} = await supabase
            .from("orders")
            .update({status: 'settlement'})
            .eq("order_id", order_id);

            if(UpdateError) {
                console.error("Failed to update order status", UpdateError)
            }

            const monthsToAdd = pricingPackage.duration_months;
            const currentPeriodEnd = addMonths(new Date(), monthsToAdd);

            const {error: upsertError} = await supabase
            .from("user_subscription")
            .upsert({
                user_id: orderData.user_id,
                package_id: orderData.package_id,
                current_period_end: currentPeriodEnd.toISOString(),
            })

            if(upsertError) {
                console.error("Failed to update subscription:", upsertError)
                return NextResponse.json({error: 'Failed to update subscription'}, {status: 500})
            }

            return NextResponse.json({message: 'Success'}, {status: 200})
        
        } else {
            //TODO: add status pending, expired, failure
            return NextResponse.json({message: `transaction status is ${transaction_status}` }, {status: 200})
        }
    } catch (error) {
        console.error("Processing error", error)
        return NextResponse.json({error: "Internal server error"}, {status: 500})
    }
    
}