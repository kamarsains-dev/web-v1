'use client'

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { upsertUserProgress } from "@/lib/actions/user-progress";

type CardProps = {
    id: number;
    title: string;
    slug: string;
    badge: string;
    icon: string;
    isActive: boolean;
}

const CourseCard = ({ id, title, badge, icon }: CardProps) => {
    
    const handleActive = async () => {
        await upsertUserProgress(id);
    }

    return (
        <div>
            <button onClick={handleActive} className="w-full max-w-[1200px]">
                <div className="relative flex items-center justify-start gap-4  border-2 border-b-4 border-gray-200 rounded-xl px-4 py-5 w-full h-[110px] hover:border-gray-300 transition bg-white">
                    <div className="absolute top-2 right-2">
                        <Badge className="bg-green-100 text-green-600 font-semibold px-3 py-1 rounded-full text-xs">
                            {badge}
                        </Badge>
                    </div>
                    <div className="flex">
                        <Image
                            src={icon}
                            width={100}
                            height={100}
                            alt="Tryout Icon"
                            quality={100}
                            className="lg:mr-3 max-w-[80px]"
                        />
                    </div>
                    <h1 className="text-lg font-medium text-black text-left">{title}</h1>
                </div>
            </button>
        </div>
    )
}

export default CourseCard;