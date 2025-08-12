"use client"

// import supabase from "@/lib/db";
// import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
    id: number;
    name: string;
    price: number;
    description: string;
}

const PriceButton = ({id, name, price, description}: Props) => {
    const router = useRouter()
    
    const handleCheckout = () => {
        router.push(`/checkout/${id}`)
    }

    /*
    const [price, setPrice] = useState<IPrice[]>([])
    
    useEffect(() => {
        const fetchPrice = async () => {
            const {data, error} = await supabase.from("pricing_packages")
            .select("*")
            .order("id")

            if(error) {
                console.log("Tidak ada paket yang tersedia", error)
            } else { 
                setPrice(data)
            }
        };

        fetchPrice();
    }, [supabase]);

    console.log(price)
    */
    return (
        <div onClick={handleCheckout} className="cursor-pointer">
            <div className="w-full max-w-md bg-gradient-purple rounded-3xl lg:rounded-4xl  flex flex-col justify-between items-center border-b-8 border-[#2C0061] my-6 lg:my-2">
                <div className="w-full p-1.5">
                    <h2 className="text-[28px] font-bold text-[#17005C] my-2">{name}</h2>
                    <div className="w-full bg-hero-pattern rounded-2xl lg:rounded-3xl p-5">
                        <h1 className="text-5xl font-bold text-[#F6FF00] my-4">Rp. {price.toLocaleString('id-ID')}</h1>                       
                        <span className="text-center text-white">
                            <ol className=' pl-5 text-white space-y-1'>
                                {description}
                            </ol>
                        </span>
                    </div>    
                </div>
            </div>
        </div>  
    )
}

export default PriceButton;