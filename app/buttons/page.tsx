"use client"

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import WsProgress from "@/components/ws-progress";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge"
import { UseHaptic } from "@/lib/useHaptic";
import Sweep from "@/components/ui/sweep";
import RiveWrapper from "./component/rive-wrapper";
import RiveComponent from "./component/rive";
import { toast } from "sonner";

const ButtonPage = () => {
    const vibrate = UseHaptic(50)

    const handleSuccess = () => {
        toast.success("success")
    }

     const handleError = () => {
        toast.error("Error")
    }

    const handleWarning = () => {
        toast.warning("Warning")
    }


    return (
        <div className="p-4 space-y-4 flex flex-col max-w-[200px] ">
            
            
            <div className="rive-container">
                <RiveWrapper /> 
             <RiveComponent />   
            </div>
            <Button variant="default"
            onClick={vibrate}
            >
            Default
            <Sweep/>
            </Button>
            <Button onClick={handleSuccess} variant="primary"
            >Primary Sukses
            </Button>
            <Button onClick={handleError} variant="outline"
            >Outlines Error
            </Button>
            <Button variant="secondary" onClick={handleWarning}
            >
            secondary warning
            </Button>
            <Button variant="tertiary"
            >
            tertiary
            </Button>
            <Button variant="basic"
            >
            basic
            </Button>
            <Button variant="active"
            >
            active
            </Button>
            <Button variant="inactive"
            >
            inactive
            </Button>
            <Button variant="primary">
                Primary
            </Button>
            <Button variant="quinary">
                quinary
            </Button>
            <Button variant="quinaryBorder">
                quinary border
            </Button>
            <Button variant="septenary">
                Septenary
            </Button>
             <Button variant="danger">
                Septenary
            </Button>
            <div>
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList>
                    <TabsTrigger value="account">Tab 1</TabsTrigger>
                    <TabsTrigger value="password">Tab 2</TabsTrigger>
                </TabsList>
                <TabsContent value="account">Make changes to your account here.</TabsContent>
                <TabsContent value="password">Change your password here.</TabsContent>
            </Tabs>
            <WsProgress>
                
            </WsProgress>
            <Progress value={30}/>
            <div className="flex flex-col gap-y-4">
                <Badge variant="default">Badge</Badge>
                <Badge variant="secondary">Badge</Badge>
                <Badge variant="destructive">Badge</Badge>
                <Badge variant="outline">Badge</Badge>
                <Badge variant="tertiary">Badge</Badge>
                

        
            </div>

            </div>
        </div>
    );
};

export default ButtonPage;