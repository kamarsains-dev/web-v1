"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Geist } from "next/font/google";
import { toast } from "sonner";

import { Header } from "./header";
import { Options } from "./options";
import { Footer } from "./footer";
import ResultCard from "./resultcard";
import RiveComponent from "./level-animations";

import { Challenge, ChallengeOptions, ChallengeProgress } from "@/lib/queries";
import { upsertChallengeProgress } from "@/lib/actions/challenge-progress";
import { upsertThunders } from "@/lib/actions/user-progress";

type LessonChallenges = {
  challenge: Challenge;
  completed: boolean;
  type: "SELECT" | "ASSIST";
  question: string;
  order: number;
  challenge_options: ChallengeOptions[];
  challenge_progress: ChallengeProgress[];
};

type Props = {
  initialPercentage: number;
  initialThunders: number;
  initialLessonId: number;
  initialLessonChallenges: LessonChallenges[];
  userSubscription: boolean;
};

const inter = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const Quiz = ({
  initialPercentage,
  initialThunders,
  initialLessonId,
  initialLessonChallenges,
  userSubscription,
}: Props) => {
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  const [percentage, setPercentage] = useState(
    initialPercentage === 100 ? 0 : initialPercentage
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number>();
  const [status, setStatus] = useState<"correct" | "wrong" | "completed" | "none">("none");

  const [correctOptionId, setCorrectOptionId] = useState<number | undefined>()
    const [completedChallenges, setCompletedChallenges] = useState<Set<number>>(new Set());


  const questionRef = useRef<(HTMLDivElement | null)[]>([]);

  const thunders = initialThunders;
  const challenges = initialLessonChallenges;
  const lessonId = initialLessonId;

  const challenge = challenges[activeIndex];
  const options = challenge?.challenge_options ?? [];

  useEffect(() => {
    const el = questionRef.current[activeIndex];
     if (el) {
    const elementRect = el.getBoundingClientRect();
    const absoluteElementTop = window.scrollY + elementRect.top;
    const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);
    window.scrollTo({
      top: middle,
      behavior: "smooth",
    });
  }
  }, [activeIndex]);

  const onNext = () => {
    setActiveIndex((current) => current + 1);
  };

  const handleClick = () => {
    router.push("/home");
  };

  if (!challenge) {
    return (
      <>
        <div className="w-full h-screen flex justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-y-8 lg:gap-y-14">
            <div className="flex justify-center items-center w-[200px] h-[150px]">
              <RiveComponent />
            </div>
            <h1 className="text-3xl font-bold">Kerja Bagus!</h1>
            <ResultCard
              variant="total points"
              value={challenges.length * 4 + challenges.length}
            />
            <div className="flex gap-x-9 bg-gray-100 rounded-2xl px-5 py-2">
              <ResultCard variant="points" value={challenges.length * 4} />
              <hr className="border border-gray-200 h-14" />
              <ResultCard variant="bonus" value={challenges.length} />
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 right-0 z-10 bg-white">
          <Footer lessonId={lessonId} status="completed" onCheck={handleClick} />
        </div>
      </>
    );
  }

  const onSelect = (id: number) => {
    if (status !== "none" || completedChallenges.has(challenge.challenge.id)) return;
    setSelectedOption(id);
  };


  const onContinue = () => {
    if (!selectedOption) return;

    if (status === "wrong") {
      setStatus("none");
      setSelectedOption(undefined);
      return;
    }

    if (status === "correct") {
      onNext();
      setStatus("none");
      setSelectedOption(undefined);
        setCorrectOptionId(undefined);
      return;
    }

    const correctOption = options.find((option) => option.correct);
    if (!correctOption) return;

    
    if (correctOption.id === selectedOption) {
      startTransition(() => {
        upsertChallengeProgress(challenge.challenge.id)
          .then((response) => {
            if (response?.error === "thunders") {
              toast("Sudah max thundersmu woy!");
            }

            setCorrectOptionId(correctOption.id)
            setStatus("correct");
            setCompletedChallenges(prev => new Set([...prev, challenge.challenge.id]));

            setPercentage((prev) => prev + 100 / challenges.length);

            if (percentage + 100 / challenges.length >= 100) {
              upsertThunders(lessonId)
                .then((res) => {
                  if (res.success) toast.success("Selesai!");
                })
                .catch(() => toast.error("Gagal menambah thunder"));
            }


          })
          .catch(() => toast.error("Coba lagi kalau error"));
      })

    } else {
        setStatus("wrong");
    }
  };

  return (
    <div>
        <div className="fixed top-0 left-0 right-0 z-10">
            <Header
            thunders={thunders}
            percentage={percentage}
            hasActiveSubscription={!!userSubscription}
            />    
        </div>
        
        <div className="min-h-screen w-full flex flex-col ">
        
        <div className={`${inter.className} flex-1 container text-[15px] font-normal  min-h-screen flex flex-col justify-center items-center `}>
            {challenges.slice(0, activeIndex + 1).map((challenge, index) => {
            const challengeQuestion =
                challenge.type === "ASSIST" ? "Select the correct meaning" : challenge.question;

            const isCompleted = completedChallenges.has(challenge.challenge.id);


            return (
                <div
                key={challenge.challenge.id}
                ref={(el) => { questionRef.current[index] = el; }}
                className="min-h-screen lg:w-[600px] max-w-3xl w-full flex flex-col justify-center mx-auto gap-y-8 "
                >
                <h1 className="text-justify">{challengeQuestion}</h1>
                <div>
                    {challenge.type === "ASSIST" && <div>ASSIST</div>}
                    <Options
                    options={challenge.challenge_options.map((opt) => ({
                        id: opt.id,
                        challenge_id: opt.challenge_id,
                        text: opt.text,
                        correct: opt.correct,
                        image_src: opt.image_src,
                    }))}
                    onSelect={onSelect}
                    status={status}
                    selectedOption={selectedOption}
                    disabled={pending}
                    type={challenge.type}
                    correctOptionId={correctOptionId}
                    isCompleted={isCompleted}
                    />
                </div>
                </div>
            );
            })}
        </div>
        <div className="fixed bottom-0 left-0 right-0 z-10 bg-white border-t-2">
            <Footer
            disabled={pending || !selectedOption}
            status={status}
            onCheck={onContinue}
            />
        </div>
        </div>    
    </div>
    
  );
};
