"use client"
import { useRive } from "@rive-app/react-canvas"

export default function Mascot(){
    const { RiveComponent } = useRive({
        src:"/public/animations/main.riv",
        autoplay: true,
        artboard:"Artboard",
        stateMachines:"1",
        onLoadError: () => console.log("SEMUA SALAH PEMERINTAH"),
        onLoad: () => console.log("Loading Data")
    })
    return (
        <div style={{width:"600px", height: "600px"}}>
            <RiveComponent/>
        </div>
    );
}