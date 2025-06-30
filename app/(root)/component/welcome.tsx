"use client"

import Mascot from "@/public/mascot1.svg"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import PiIcon from "@/public/pi.svg"
import SpaceIcon from "@/public/blackhole.svg"
import Link from "next/link";

const Welcome = () => {
    return (
     <div className="flex-1 bg-hero-pattern text-center items-center justify-center">
        <div className="w-full bg-star-pattern">
            <div>
                <Image
                src={Mascot}
                width={500}
                height={500}
                alt="main-mascot"
                className="lg:max-w-xl lg:w-[800px] mx-auto"
                />
                <h1 className="font-bold text-4xl lg:text-6xl text-white">
                    Discover Your Star
                </h1>
                <p className="text-base lg:text-xl font-light pb-5 text-white container">
                    Learn and have fun science in just 15 minutes a day!
                </p>
                <Link href='/home'>
                    <Button variant="secondary" className="w-64 h-14 text-lg cursor-pointer rounded-lg" sweep>
                            <p>
                                Start Your Mission
                            </p>
                    </Button>
                </Link>
            </div>
            <div className="bg-white h-16 w-full border-y-2 border-slate-200 mt-8 flex justify-center items-center text-center gap-24 text-black font-medium">
                <div className="flex gap-x-2">
                    <Image
                    src={PiIcon}
                    width={25}
                    height={25}
                    alt="pi-icon"
                    />
                    <h3>Try Out</h3>
                </div>
                <div className="flex gap-x-2">
                    <Image
                    src={SpaceIcon}
                    height={25}
                    width={25}
                    alt="space-icon"
                    />
                    <h3>Fly High</h3>
        
                </div>
            </div>
        </div>
     </div>
    );
};

export default Welcome;