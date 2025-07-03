import Image from "next/image";
import Key from "@/public/light-key.svg"
import FeatureTable from "./component/table";
import Price from "./component/price";

const Shop = () => {
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
                <Price/>    
                <div className="text-white flex justify-center items-center">
                   <FeatureTable/> 
                </div>
            </div>
        </div>
    )
}

export default Shop;