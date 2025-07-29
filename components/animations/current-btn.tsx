'use client'
import Rive, { Layout, Fit, Alignment} from "@rive-app/react-canvas";

const CurrentBtn = () => {
    return<Rive
        src="/current-btn.riv"
        stateMachines="State Machine 1"
        layout={new Layout({
            fit: Fit.Contain,
            alignment: Alignment.Center,
          })}
          className="w-[200px] h-[200px] absolute"
    />
};

export default CurrentBtn;