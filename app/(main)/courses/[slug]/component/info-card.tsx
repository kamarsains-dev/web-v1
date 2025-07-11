import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image";
import { getCourseById, getUserProgress } from "@/lib/queries";
import { redirect } from "next/navigation";

const InfoCard = async () => {
    const userProgressData = await getUserProgress();
    const courseData = await getCourseById(userProgressData?.active_courses_id);

    if (!userProgressData) {
        redirect("/courses");
    }

    return(
        <div className="w-[368px]">
            <Card>
                <CardHeader>
                    <Image 
                        src={courseData.icon}
                        width={100}
                        height={100}
                        alt="level-up"
                        className="mb-3"
                    />
                    <CardTitle>
                        {courseData.title}
                    </CardTitle>
                    <CardDescription>
                        <p>Start your algebra journey here with an introduction to variables and equations.</p>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="font-semibold">16 try out</p>
                    <p className="font-semibold">Card Content</p>
                </CardContent>
            </Card>
        </div>
    );
};

export default InfoCard;
