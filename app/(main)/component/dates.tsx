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
            <DialogContent className="w-lg py-8">
                <DialogHeader>
                    <DialogTitle>
                        <div className="flex  justify-center text-xl font-bold">
                            Timeline
                        </div>
                    </DialogTitle>
                    
                </DialogHeader> 
                <DialogDescription>
                    <Data />
                </DialogDescription>
            </DialogContent>
        </Dialog>
                
                
    )
}

export default ImportantDates;