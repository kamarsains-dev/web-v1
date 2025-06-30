'use client'

import { useRive } from "@rive-app/react-canvas";

const RiveWrapper = () => {
    const {RiveComponent} = useRive({
        src: "loading.riv",
        stateMachines: "Ftimeline",
        autoplay: true,
        
        
    });
    return<RiveComponent/>
};

export default RiveWrapper;