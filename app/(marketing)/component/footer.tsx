import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Props = {
    onCheck: () => void;
    status: "correct" | "wrong" | "none" | "completed"
    disabled?: boolean;
    lessonId?: boolean;
};

export const Footer = ({onCheck, status}:Props) => {
    return (
        <footer className={cn("h-[100px] border-t-2 w-full flex",
            status === "correct" && "border-t-2 bg-green-100",
            status === "wrong" && "border-2 bg-amber-100"
        )}>
            <div className="h-full w-full max-w-[540px] mx-auto flex items-center justify-around px-6 lg:px-10">
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
                {status === "completed" && (
                    <Button variant="outline" onClick={() => window.location.href = `/courses/`}>
                        Coba lagi?
                    </Button>
                )}
                <Button variant={(status === "correct" ? "secondary" : "primary")} onClick={onCheck}>
                    {status === "none" && "Check"}
                    {status === "correct" && "Next"}
                    {status === "wrong" && "Retry"}
                </Button>
            </div>
        </footer>
    )
}