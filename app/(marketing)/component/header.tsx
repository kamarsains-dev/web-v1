import { InfinityIcon, X } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import Thunders from "@/public/thunder-icon.svg"
import { redirect } from "next/navigation";

type Props = {
    thunders: number;
    percentage: number;
    hasActiveSubscription: boolean;
};

const handleOut = () => {
    redirect("/courses")
}

export const Header = ({thunders, percentage, hasActiveSubscription}: Props) => {
    return (
        <header className="py-4 px-10 flex gap-x-5 md:gap-x-7 items-center justify-around max-auto w-full border-b-2 bg-white">
            <X size={26} onClick={handleOut} className="text-slate-500 hover:text-slate-800 transition cursor-pointer"/>
            <Progress value={percentage} className="w-full max-w-4xl"/>
            <div className="flex items-center font-bold text-xl w-full max-w-14">
                <Image
                    src={Thunders}
                    width={21}
                    height={21}
                    alt="thunders"
                    className="mr-2"
                />
                {hasActiveSubscription ? <InfinityIcon className="w-6 stroke-3" /> : thunders}
            </div>
        </header>
    )
}
