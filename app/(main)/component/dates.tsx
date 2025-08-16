"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import { MoveDiagonal } from "lucide-react";
import Data from "./dates-data";
// import CardLeaderboard from "@/components/leaderboard-card";

const ImportantDates = () => {    
    return(
        <Dialog>
            <DialogTrigger asChild>
                <MoveDiagonal size={20} color="#626262"/>    
            </DialogTrigger>
            <DialogContent className="w-lg flex flex-col  py-8 lg:py-14 lg:px-20 px-14">
                <DialogHeader>
                    <DialogTitle>
                        <div className="flex  text-xl font-bold pt-5">
                            Important Dates
                        </div>
                    </DialogTitle>
                    <DialogDescription>
                        <Data />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
                
                
    )
}

export default ImportantDates;