import Midtrans from "midtrans-client";
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request) {
  try {
    const { packageId } = await request.json();
    const supabase = await createClient();
    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (!user || userError) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { data: pricingPackage, error } = await supabase
      .from("pricing_packages")
      .select("name, price")
      .eq("id", packageId)
      .single();

    if (error || !pricingPackage) {
      return NextResponse.json({ error: "Paket tidak ditemukan" }, { status: 404 });
    }
    
    const orderId = `KS-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

    const { error: insertError} = await supabase.from("orders")
      .insert({
        user_id: user.id,
        user_name: user.user_metadata?.name || user.email,
        order_id: orderId,
        package_id: packageId,
        status: 'pending',
        provider: 'midtrans'
      })

    if (insertError) {
      console.error("Failed to insert orders:", insertError);
      return NextResponse.json({ error: "Gagal memproses pesanan" }, { status: 500 });
    }


    const snap = new Midtrans.Snap({
      isProduction: false,
      serverKey: process.env.MIDTRANS_SERVER_KEY,
      clientKey: process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY,
    });


    const parameter = {
      item_details: [{
        name: pricingPackage.name,
        price: pricingPackage.price,
        quantity: 1,
      }],
      transaction_details: {
        order_id: orderId,
        gross_amount: pricingPackage.price,
      },
      customer_details: {
        first_name: user.user_metadata?.full_name || user.email,
        email: user.email,
      },
      callbacks: {
        notification_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/webhook`
      }
    };

    const token = await snap.createTransactionToken(parameter);
    return NextResponse.json({ token, orderId });
  } catch (err) {
    console.error("Gagal memproses pembayaran", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
