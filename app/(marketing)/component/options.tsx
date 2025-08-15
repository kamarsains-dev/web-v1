import { ChallengeOptions } from "@/lib/queries"
import { cn } from "@/lib/utils";
import { Card } from "./card";


type Props = {
    options: ChallengeOptions [];
    onSelect: (id: number) => void;
    status: "correct" | "wrong" | "completed" | "none";
    selectedOption?: number;
    disabled?: boolean;
    type: "SELECT" | "ASSIST";
    correctOptionId: number | undefined;
    isCompleted?: boolean;
};

export const Options = ({options, onSelect, status, selectedOption, type, disabled, correctOptionId, isCompleted=false}: Props) => {
    

    return (
        <div className={cn(
            "grid grid-rows-3 grid-flow-col gap-2",
            type === "ASSIST" && "",
            type === "SELECT" && ""
        )}>
            {options.map((option, i) =>  {
                const isCorrect = option.correct && (correctOptionId === option.id || isCompleted)

                return (
                    <Card 
                            key={option.id}
                            id={option.id}
                            text={option.text}
                            imageSrc={option.image_src}
                            shortcut={`${i + 1}`}
                            selected={selectedOption === option.id}
                            onClick={() => onSelect(option.id)}
                            status={status}
                            disabled={disabled}
                            type={type}
                            isCorrect={isCorrect}
                            isCompleted={isCompleted}
                        />

                        
                    )   
            })}  
        </div>
    )
}