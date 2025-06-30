import Image from "next/image";
import Padlock from "@/public/padlock.svg"

const Reviews = () => {
    return (
        <div className="flex flex-col min-h-[80vh] justify-center items-center text-2xl font-bold gap-y-4">
            <Image
                src={Padlock}
                width={80}
                height={80}
                alt="padlock"
            />
            <h1>Jadilah alumni pertama!</h1>
        </div>
    )
}

export default Reviews;