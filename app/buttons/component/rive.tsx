'use client'
import Rive from "@rive-app/react-canvas";

const RiveComponent = () => {
    return<Rive
        src="loading2.riv"
        stateMachines="Ftimeline"
        className="w-[500px] h-[500px]"
    />
};

export default RiveComponent;