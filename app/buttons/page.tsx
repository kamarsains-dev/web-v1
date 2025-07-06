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

const ButtonPage = () => {
    const vibrate = UseHaptic(50)

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
            <Button variant="primary"
            >Primary
            </Button>
            <Button variant="outline"
            >Outlines
            </Button>
            <Button variant="secondary"
            >
            secondary
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
                Primary
            </Button>
            <Button variant="septenary">
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