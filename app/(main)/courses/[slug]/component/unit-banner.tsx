import { getUserProgress, getCourseById } from "@/lib/queries";
import Image from "next/image";

type Props = {
    title: string;
    description: string;
}

const unitBanner = async ({ title, description }: Props) => {
    const userProgressData = await getUserProgress();
    const courseData = await getCourseById(userProgressData?.active_courses_id);


    return (
        <div className="w-screen flex justify-center items-center">
            <div className="flex p-10 justify-center text-left items-center w-full h-16 border-gray-200 border-b-2 gap-x-5">
                <Image 
                    src={courseData.icon}
                    width={40}
                    height={40}
                    alt="level-up"
                    className="mb-3"
                />
                <div>
                    <h1 className="text-md font-bold">{title}</h1>
                    <h3 className="text-[15px]">{description}</h3> 
                </div>
            </div>
        </div>
    )
}

export default unitBanner;