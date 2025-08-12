import Image from "next/image";
import Key from "@/public/light-key.svg"
import FeatureTable from "./component/table";
import PricePackages from "./component/price-packages";
import { createClient } from '@/lib/supabase/server';

const Shop = async () => {
     const supabase = await createClient();

    const {data: pricingPackagesData, error} = await supabase
    .from("pricing_packages")
    .select("*")
    .order("id", {ascending: true})

    if(error || !pricingPackagesData) {
        console.log("Error fetching pricing packages", error)
        return (
            <div className='text-white'>
                Terjadi kesalahan saat memuat data harga. Coba lagi nanti.
            </div>
        )
    }
    return (
        <div className=" bg-hero-pattern mt-13">
            <div className="w-full bg-star-pattern flex flex-col justify-center items-center gap-y-4 py-12">
                <Image
                src={Key}
                width={100}
                height={100}
                alt="key"
                className="w-64 lg:w-80"
                />
                <PricePackages pricingPackagesData={pricingPackagesData}/>    
                <div className="text-white flex justify-center items-center">
                   <FeatureTable/> 
                </div>
            </div>
        </div>
    )
}

export default Shop;