"use client"

import Lottie from "lottie-react";
import animationData from "@/public/animations/mascot-1.json"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import BiologyIcon from "@/public/biology.svg"
import SpaceIcon from "@/public/blackhole.svg"

const Welcome = () => {
    return (
     <div className="flex-1 bg-hero-pattern text-center items-center justify-center">
        <div className="w-full bg-star-pattern">
            <div>
                <Lottie className="max-w-xl mx-auto" animationData={animationData} loop={true}/>
                <h1 className="font-bold text-4xl lg:text-6xl text-white">
                    Discover Your Star
                </h1>
                <p className="text-base lg:text-xl font-light pb-5 text-white container">
                    Learn and have fun science in just 15 minutes a day!
                </p>
                <Button variant="secondary" className="w-64 h-14 text-lg">
                    Start Your Mission
                </Button>
            </div>
            <div className="bg-white h-16 w-full border-y-2 border-slate-200 mt-8 flex justify-center items-center text-center gap-24 text-gray-700">
                <div className="flex gap-x-2">
                    <Image
                    src={BiologyIcon}
                    width={25}
                    height={25}
                    alt="biology-icon"
                    />
                    <h3>Biology</h3>
                </div>
                <div className="flex gap-x-2">
                    <Image
                    src={SpaceIcon}
                    height={25}
                    width={25}
                    alt="space-icon"
                    />
                    <h3>Space</h3>
        
                </div>
            </div>
        </div>
     </div>
    );
};

export default Welcome;