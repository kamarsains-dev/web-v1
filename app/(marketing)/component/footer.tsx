import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Props = {
    onCheck: () => void;
    status: "correct" | "wrong" | "none" | "completed"
    disabled?: boolean;
    lessonId?: number;
};

export const Footer = ({onCheck, status}:Props) => {
    return (
        <footer className={cn("py-4 border-t w-full flex",
            status === "correct" && "border-t bg-green-100",
            status === "wrong" && "border-t bg-amber-100"
        )}>
            <div className="h-full w-full max-w-3xl mx-auto flex items-center justify-around container gap-x-11">
                {status === "correct" && (
                    <div className="text-black font-bold text-xl flex items-center">
                        🎉 Benar!
                    </div>
                )}
                {status === "wrong" && (
                    <div className="text-black font-bold text-xl flex items-center">
                        💔 Salah
                    </div>
                )}
                <Button variant={(status === "correct" ? "secondary" : "primary")} onClick={onCheck} className="w-full max-w-[350px] rounded-xl font-bold text-lg h-14">
                    {status === "none" && "Check"}
                    {status === "correct" && "Next"}
                    {status === "wrong" && "Retry"}
                    {status === "completed" && "Continue"}
                </Button>
            </div>
        </footer>
    )
}