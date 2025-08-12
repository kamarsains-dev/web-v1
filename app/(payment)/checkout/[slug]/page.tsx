import Image from "next/image";
import Blackhole from "@/public/blackhole.svg";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import CheckoutClient from "./component/checkout-client";

interface Props {
  params: { slug: string };
}

export default async function CheckoutPage({ params }: Props) {
    const data = await params
  const supabase = await createClient();
  const packageId = Number(data.slug);

  if (!packageId || isNaN(packageId)) {
    redirect("/shop");
  }

  const { data: pricingPackagesData, error } = await supabase
    .from("pricing_packages")
    .select("*")
    .eq("id", packageId)
    .single();

  if (error || !pricingPackagesData) {
    redirect("/shop");
  }

  return (
    <div className="md:flex">
      <div className="max-w-5xl w-full h-screen hidden md:flex justify-center items-center bg-black text-white">
        <Image src={Blackhole} width={200} height={200} alt="blackhole" />
      </div>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <h1>CheckOut paket: {pricingPackagesData.name}</h1>
        <p>Harga: Rp{pricingPackagesData.price}</p>
        <CheckoutClient packageId={packageId} />
      </div>
    </div>
  );
}
