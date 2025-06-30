"use client"

import { motion } from "motion/react"
import LightSweep from "@/public/light-sweep.svg"
import Image from "next/image"

const Sweep = () => {
    return (
        <motion.span
            initial={{
                x: -300,
            }}
            animate={{
                x: 350,
            }}
            exit={{
                x: 0,
            }}
            transition={{
                duration: 1.3,
                ease: "easeOut",
                repeat: Infinity,
                repeatDelay: 4,
            }}
            className="absolute z-1 flex items-center opacity-40"
        >
            <Image
                src={LightSweep}
                width={200}
                height={200}
                alt="light-sweep"
                className="h-full object-contain"
            />
        </motion.span>
    );
};

export default Sweep;