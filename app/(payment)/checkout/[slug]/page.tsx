
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import CheckoutClient from "./component/checkout-client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  params: Promise<{ slug: string }>;
}


export default async function CheckoutPage({ params }: Props) {
  const data = await params;
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

  // Split description menjadi array baris
  const features = pricingPackagesData.description
    ? pricingPackagesData.description.split("\n")
    : [];

  return (
    <div className="flex min-h-screen bg-hero-pattern">
      {/* Checkout Card */}
      <div className="w-full flex flex-col justify-center gap-y-7 items-center p-4 bg-star-pattern">
        <span className="flex  font-bold text-3xl mb-3 text-white">
          <h1>Kamar Sains</h1>
        </span>
        <Card className="w-full max-w-md">
          {/* Header */}
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex justify-between">
              <span>Total due today</span>
              <span className="text-primary">
                Rp {pricingPackagesData.price.toLocaleString("id-ID")}
              </span>
            </CardTitle>
            <CardDescription className="text-sm text-gray-500">
              View details
            </CardDescription>
          </CardHeader>

          {/* Content */}
          <CardContent className="space-y-4">
            {/* Detail Produk */}
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">{pricingPackagesData.name}</span>
              <span>
                Rp {pricingPackagesData.price.toLocaleString("id-ID")}
              </span>
            </div>

            {/* Fitur / Deskripsi */}
            <div>
              <h4 className="font-semibold mb-2">Features</h4>
              <ul className="list-disc list-inside text-sm  space-y-1">
                {features.map((description: string, index: number) => (
                  <li key={index}>{description}</li>
                ))}
              </ul>
            </div>
          </CardContent>

          {/* Footer */}
          <CardFooter className="w-full flex flex-col gap-2">
            <CheckoutClient packageId={packageId} />
          </CardFooter>
        </Card>
         <span className="max-w-[340px] text-sm text-center text-gray-300">
          <p>
            We’ll remind you before your subscription ends, so you’ll never lose access.
          </p>
        </span>
      </div>
    </div>
  );
}
