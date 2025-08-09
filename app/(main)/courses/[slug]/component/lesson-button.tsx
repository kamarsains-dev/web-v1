"use client";

// import { Check, Crown, Star } from "lucide-react";
// import { Button } from "@/components/ui/button"; 
// import Image from "next/image";
// import Select from "@/public/select.svg"
import Image from "next/image";
import CurrentBtn from "@/public/current-btn.svg"
import LockedBtn from "@/public/lock-btn.svg"
import { useParams } from "next/navigation";
import ActiveBtn from "./rive-lesson";
import Link from "next/link";
import { toast } from "sonner";

type Props = {
    id: number;
    index: number;
    totalCount: number;
    locked?: boolean;
    current?: boolean;
    percentage: number;
    title: string;
    userThunders: number;
};

export const LessonButton = ({id, index, locked, current, title, userThunders}: Props) => { //add percentage, totalCounts
    const {slug} = useParams();

    const cycleLength = 5;
    const cycleIndex = index % cycleLength;

    let indentationLevel = 0;

    if (cycleIndex <= 2) {
        indentationLevel = cycleIndex;
    } else if (cycleIndex <= 3) {
        indentationLevel = 4 - cycleIndex;
    } else if (cycleIndex <= 5) {
        indentationLevel = 4 - cycleIndex;
    } else {
        indentationLevel = cycleIndex - cycleLength;
    }

    const baseOffset = -105;
    const rightPosition = baseOffset + indentationLevel * 105;

    const isFirst = index === 0;
   // const isLast = index === totalCount;
    const isCompleted = !current && !locked

    const isDisabled = userThunders >= 3;

    const handleClick = (res: React.MouseEvent) => {
        if(isDisabled) {
            res.preventDefault();
            toast.error("Thundersmu sudah max, tunggu 24 jam untuk gas ambis lagi!")
        }
    }

    const getIcon = () => {
        if(locked) {
            return (
                    <Image 
                        src={LockedBtn}
                        alt=""
                        width={300}
                        height={300}
                        quality={100}
                    />        
            )
        };
        if(current) {
            return (
                <div className="flex justify-center items-center w-[130px] h-[200px]">
                    <ActiveBtn/>        
                </div>
           
        )};
        if(isCompleted) {
            return (
                    <Image 
                        src={CurrentBtn}
                        alt=""
                        width={300}
                        height={300}
                        quality={100}
                    />            
            )
        };
    }

    const href = isCompleted ? `/lesson/practice/${id}` : `/lesson` //`${slug}/${title.toLowerCase().replace(/\s+/g, "-")}`;

    return (
        <Link onClick={handleClick} href={isDisabled ? "#" : href} aria-disabled={locked} style={{ pointerEvents: locked ? "none" : "auto"}}>
            <div className="relative" style={{ right: `${rightPosition}px`, marginTop: isFirst && !isCompleted || isCompleted ? 20 : 0}}>
                    <div>
                        <div className="w-[118px] h-[118px] relative flex justify-center items-center">
                            <div className="flex flex-col justify-center items-center ">
                                {getIcon()}
                                <h1 className="-mt-2 text-sm font-medium">{title}</h1>
                            </div>
                        </div>
                    </div>
            </div>
        </Link>
    )
}