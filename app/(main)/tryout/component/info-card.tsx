import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image";
import Key from "@/public/level-up.svg"

const InfoCard = () => {
    return(
        <div className="w-[368px]">
            <Card>
                <CardHeader>
                    <Image 
                        src={Key}
                        width={100}
                        height={100}
                        alt="level-up"
                        className="mb-3"
                    />
                    <CardTitle>
                        Try Out 1
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
