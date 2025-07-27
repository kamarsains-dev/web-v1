"use client"

import { useState, useTransition } from "react";
import { Header } from "./header";
import { ChallengeOptions, ChallengeProgress, Challenge } from "@/lib/queries";
import { DM_Sans } from 'next/font/google';
import { Options } from "./options";
import { Footer } from "./footer";
import { upsertChallengeProgress } from "@/lib/actions/challenge-progress";
import { toast } from "sonner";
import { reduceThunders } from "@/lib/actions/user-progress";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";



type LessonChallenges = {
    challenge : Challenge;
    completed: boolean;
    type: "SELECT" | "ASSIST";
    question: string;
    order: number;
    challenge_options: ChallengeOptions[];
    challenge_progress: ChallengeProgress[];
}

type Props = {
    initialPercentage: number;
    initialThunders: number;
    initialLessonId: number;
    initialLessonChallenges: LessonChallenges[]
    userSubscription: null;
}

const inter = DM_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
})



export const Quiz = ({initialPercentage, initialThunders, initialLessonChallenges, userSubscription}: Props) => {
    const [pending, startTransition] = useTransition();
    const [thunders, setThunders] = useState(initialThunders)
    const [percentage, setPercentage] = useState(initialPercentage)
    const [challenges] = useState(initialLessonChallenges);
    const [activeIndex, setActiveIndex] = useState(() => {
        const uncompletedIndex = challenges.findIndex((challenge) => !challenge.completed);
        return uncompletedIndex === -1 ? 0 : uncompletedIndex
    })

    const [selectedOption, setSelectedOption] = useState<number>();
    const [status, setStatus] = useState<"correct" | "wrong" | "completed" | "none">("none")

    

    const challenge = challenges [activeIndex];
    const options = challenge?.challenge_options ?? [];
    const onNext = () => {
        setActiveIndex((current) => current + 1)
    };

    const handleClick = () => {
        redirect("/home")
    }

    if(!challenge) {
        return (
            <>
                <div className="w-screen h-screen flex justify-center items-center">
                    <Button onClick={handleClick}>
                        Kembali
                    </Button>
                </div>
            
            </>
        )
    }

    const onSelect = (id:number) => {
        if (status !== "none") return;

        setSelectedOption(id);
    };

    const onContinue = () => {
        if(!selectedOption) return;

        if (status === "wrong") {
            setStatus("none")
            setSelectedOption(undefined)
            return;
        }
        
        if (status === "correct") {
            onNext();
            setStatus("none")
            setSelectedOption(undefined)
            return;
        }

        const correctOption = options.find((option) => option.correct)

        if(!correctOption) {
            return;
        }

        if(correctOption.id === selectedOption) {
            startTransition(() => {
                upsertChallengeProgress(challenge.challenge.id)
                    .then((response) => {
                        if (response?.error === "thunders") {
                            console.error("Missing Thunder")
                        }

                        setStatus("correct");
                        setPercentage((prev) => prev + 100 / challenges.length);

                        if (initialPercentage === 100) {
                            setThunders((prev) => Math.min(prev + 1, 3))
                        }
                    })
                    .catch(() => toast.error("coba lagi kalau error"))
            })
        } else {
            startTransition(() => {
                reduceThunders(challenge.challenge.id)
                    .then((response) => {
                        if(response?.error === "thunders") {
                            console.error("Missing Thunders")
                            return;
                        }

                        setStatus("wrong");

                        if(!response?.error) {
                            setThunders((prev) => Math.max(prev - 1, 0))
                        }
                    })
                    .catch(() => toast.error("Coba lagi kalau error"))
            })
        } 
    }

    const title = challenge?.type === "ASSIST"
        ? "Sellect the correct meaning" : challenge?.question;

    return (
        <div className="min-h-screen w-full flex flex-col">
            <Header
                thunders={thunders}
                percentage={percentage}
                hasActiveSubscription={!!userSubscription} 
            />
            <div className={`${inter.className} flex-1 container`}>
                <div className="h-full  flex items-center justify-center">
                    <div className="lg:min-h-[350px] lg:w-[600px] max-w-3xl w-full flex flex-col gap-y-12 mt-8">
                        <h1 className="text-start font-medium">
                            {title}
                        </h1>
                        <div>
                            {challenge?.type === "ASSIST" && (
                                <div>ASSIST</div>
                            )}
                            <Options
                                options={challenge.challenge_options.map(challenge => ({
                                    id: challenge.id,
                                    challenge_id: challenge.challenge_id,
                                    text: challenge.text,
                                    correct: challenge.correct,
                                    image_src: challenge.image_src
                                }))}
                                onSelect={onSelect}
                                status={status}
                                selectedOption={selectedOption}
                                disabled={pending}
                                type={challenge.type}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer
                disabled={pending || !selectedOption}
                status={status}
                onCheck={onContinue}
            
            />
        </div>
    )
}
