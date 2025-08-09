'use client'
import Rive, { Layout, Fit, Alignment} from "@rive-app/react-canvas";

const RiveComponent = () => {
    return<Rive
        src="level-animation.riv"
        stateMachines="Main State"
        layout={new Layout({
            fit: Fit.Contain,
            alignment: Alignment.Center,
          })}
          className="w-[200px] h-[200px] absolute"
    />
};

export default RiveComponent;