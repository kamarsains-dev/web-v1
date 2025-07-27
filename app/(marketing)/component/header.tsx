import { InfinityIcon, X } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import key from "@/public/key.svg"
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
        <header className="lg:py-6 py-4 px-10 flex gap-x-7 items-center justify-around max-auto w-full border-b-2">
            <X onClick={handleOut} className="text-slate-500 hover:text-slate-800 transition cursor-pointer"/>
            <Progress value={percentage} className="max-w-4xl"/>
            <div className="flex items-center font-bold text-xl">
                <Image
                    src={key}
                    width={40}
                    height={40}
                    alt="thunder-icon"
                    className="mr-2 w-3"
                />
                {hasActiveSubscription ? <InfinityIcon className="h-6 w-6 stroke-3"/> : thunders}
            </div>
        </header>
    )
}
