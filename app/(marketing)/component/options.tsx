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
};

export const Options = ({options, onSelect, status, selectedOption, type, disabled}: Props) => {
    return (
        <div className={cn(
            "grid gap-2",
            type === "ASSIST" && "grid-cols-1",
            type === "SELECT" && "grid-cols-2"
        )}>
            {options.map((option, i) => (
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
                />
            ))}
        </div>
    )
}