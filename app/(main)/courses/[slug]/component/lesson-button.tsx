"use client";

// import { Check, Crown, Star } from "lucide-react";
// import { Button } from "@/components/ui/button"; 
// import Image from "next/image";
// import Select from "@/public/select.svg"
// import Current from "@/public/current.svg"
// import Locked from "@/public/locked.svg"
import { useParams } from "next/navigation";
import CurrentBtn from "./current-btn";
import LockBtn from "./lock-btn";
import ActiveBtn from "./rive-lesson";
import Link from "next/link";

type Props = {
    id: number;
    index: number;
    totalCount: number;
    locked?: boolean;
    current?: boolean;
    percentage: number;
    title: string;
};

export const LessonButton = ({index, locked, current, title}: Props) => { //add percentage, totalCounts
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

    const baseOffset = -110;
    const rightPosition = baseOffset + indentationLevel * 110;

    const isFirst = index === 0;
   // const isLast = index === totalCount;
    const isCompleted = !current && !locked

    const getIcon = () => {
        if(locked) {
            return (
                <div className="flex justify-center items-center w-[200px] h-[200px]">
                    <LockBtn/>        
                </div>
            )
            
        };
        if(current) {
            return (
                <div className="flex justify-center items-center w-[200px] h-[200px]">
                    <ActiveBtn/>        
                </div>
           
        )};
        if(isCompleted) {
            return (
                <div className="flex justify-center items-center w-[200px] h-[200px]">
                    <CurrentBtn/>        
                </div>
            )
        };
    }


    const href = isCompleted ? `${slug}` : `/lesson/` //`${slug}/${title.toLowerCase().replace(/\s+/g, "-")}`;

    return (
        <Link href={href} aria-disabled={locked} style={{ pointerEvents: locked ? "none" : "auto"}}>
            <div className="relative" style={{ right: `${rightPosition}px`, marginTop: isFirst && !isCompleted || isCompleted ? 20 : 0}}>
                    <div>
                        <div className="w-[128px] h-[128px] relative flex justify-center items-center">
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