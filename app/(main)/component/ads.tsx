import Image from "next/image";
import Key from "@/public/light-key.svg"
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Ads = () => {
    return(
        <div className="bg-ads p-6 rounded-2xl w-full  md:min-w-[350px] flex flex-col justify-around border-2 gap-y-2 mt-4 md:mt-0">
            <div className="flex justify-center items-center gap-x-1">
                <Image
                    src={Key}
                    width={100}
                    height={100}
                    alt="Key"
                    className="w-16"
                />
                <div>
                    <h1 className="text-lg text-[#FFF100] font-bold">Beli Paket Super</h1>
                    <p className="text-sm text-white">Suatu hari, kamu akan sadar ini investasi terbaik.</p>
                </div>
            </div>
            <Link href='/shop' className="w-full flex justify-center items-center text-center">
                <Button sweep variant='septenary' className="w-full rounded-xl font-bold text-lg h-14">
                    <p className="my-1">Invest Now!</p>
                </Button>
            </Link> 
            
        </div>
    );
};

export default Ads;