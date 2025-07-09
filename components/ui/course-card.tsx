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
            <button onClick={handleActive}>
                <div className="relative flex items-center justify-start gap-4 bg-white border-2 border-b-4 border-gray-200 rounded-xl px-4 py-5 w-full max-w-3xl h-[100px] hover:border-gray-300 transition">
                    <div className="absolute top-2 right-2">
                        <Badge className="bg-green-100 text-green-600 font-semibold px-3 py-1 rounded-full text-xs">
                            {badge}
                        </Badge>
                    </div>
                    <div className="flex-shrink-0">
                        <Image
                            src={icon}
                            width={60}
                            height={60}
                            alt="Tryout Icon"
                            className="lg:mr-3 max-w-14"
                        />
                    </div>
                    <h1 className="text-md font-medium text-gray-800 text-left">{title}</h1>
                </div>
            </button>
        </div>
    )
}

export default CourseCard;