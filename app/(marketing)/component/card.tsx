import { cn } from "@/lib/utils"
import Image from "next/image";
import { useCallback } from "react";
import {useKey} from 'react-use';

type Props = {
    id: number;
    imageSrc: string | null;
    text: string;
    shortcut: string;
    selected?: boolean;
    onClick: () => void;
    disabled?: boolean;
    status?: "correct" | "wrong" | "completed" | "none";
    type: "SELECT" | "ASSIST";
}

    

export const Card = ({imageSrc, text, shortcut, selected, onClick, disabled, status, type}: Props) => {

    const handleClick = useCallback(() => {
        if (disabled) return;
        
        onClick();
    },[disabled, onClick]); 

    useKey(shortcut, handleClick, {}, [handleClick])

    return (
        <div onClick={handleClick} className={cn("h-full rounded-xl border-2 hover:border-blue-400 hover:bg-blue-100 p-4 lg:p-6 cursor-pointer text-center active:border-blue-700 active:bg-blue-100 max-w-sm", 
        selected && "border-blue-700 bg-blue-100",
        selected && status === "correct" && "border-green-500 bg-green-50",
        selected && status === "wrong" && "border-amber-300 bg-amber-50",
        disabled && "pointer-event-none hover:bg-white",
        type === "ASSIST" && "lg:p-3 w-full"
        )}>
            {imageSrc && (
                <div className="relative aspect-square mb-4 max-h-[80px] lg:max-h-[150px] w-full">
                    <Image 
                        src={imageSrc}
                        fill
                        alt={text}
                    />
                </div>
            )}
            <p>{text}</p>
        </div>
    )
}