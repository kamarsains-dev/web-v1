'use client'
import Rive, { Layout, Fit, Alignment} from "@rive-app/react-canvas";

const LevelButton = () => {
    return<Rive
        src="/level-btn.riv"
        stateMachines="Main State"
        layout={new Layout({
            fit: Fit.Contain,
            alignment: Alignment.Center,
          })}
          className="w-[200px] h-[200px] absolute"
    />
};

export default LevelButton;