'use client'

import { useRive, Layout, Fit } from "@rive-app/react-canvas";

const LoadingAnimation = () => {
    const {RiveComponent} = useRive({
        src: "loading.riv",
        stateMachines: "Ftimeline",
        autoplay: true,
        layout: new Layout({
            fit: Fit.Layout,
        }),
        
    });
    return<RiveComponent/>
};

export default LoadingAnimation;