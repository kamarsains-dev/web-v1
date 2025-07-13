"use client";

// import { Check, Crown, Star } from "lucide-react";
import Link from "next/link";
// import { Button } from "@/components/ui/button"; 
import Image from "next/image";
import Current from "@/public/current.svg"
import Locked from "@/public/locked.svg"

type Props = {
    id: number;
    index: number;
    totalCount: number;
    locked?: boolean;
    current?: boolean;
    percentage: number;
};

export const LessonButton = ({id, index, locked, current}: Props) => { //add percentage, totalCounts
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

    const baseOffset = -120;
    const rightPosition = baseOffset + indentationLevel * 120;

    const isFirst = index === 0;
   // const isLast = index === totalCount;
    const isCompleted = !current && !locked

   // const Icon = isCompleted ? Check : isLast ? Crown : Star;

    const href = isCompleted ? `/${id}` : "/lesson";

    return (
        <Link href={href} aria-disabled={locked} style={{ pointerEvents: locked ? "none" : "auto"}}>
            <div className="relative" style={{ right: `${rightPosition}px`, marginTop: isFirst && !isCompleted ? 20 : 40}}>
                {current ? (
                    <div className="w-[128px] h-[128px] relative flex justify-center items-center">
                        <div>
                            <Image 
                                src={Current}
                                alt=""
                                width={300}
                                height={300}
                            />
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="w-[128px] h-[128px] relative flex justify-center items-center">
                            <div>
                                <Image 
                                    src={Locked}
                                    alt=""
                                    width={300}
                                    height={300}
                                />
                            </div>
                        </div>
                    </div>
                ) }
            </div>
        </Link>
    )
}