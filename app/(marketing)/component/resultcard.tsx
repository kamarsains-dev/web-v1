import CountUp from 'react-countup';

type Props = {
    variant: "total points" | "points" | "bonus";
    value: number;
}

const ResultCard = ({variant, value}:Props) => {
    if(variant === "total points") {
        return (
            <div className="flex flex-col justify-center items-center">
                <div>
                    <p className="capitalize text-gray-500 text-sm">{variant}</p>  
                </div>
                <div>
                    <p className="text-[41px] font-black">
                        <CountUp 
                        end={value}
                        duration={3}
                        delay={1}
                        />
                    </p>
                </div>
            </div> 
        )
    }

    if(variant === "points") {
        return (
            <div className="flex flex-col justify-center items-center">
                <div>
                    <p className="capitalize text-gray-500 text-sm">{variant}</p>  
                </div>
                <div>
                    <p className="text-2xl font-black">
                        <CountUp 
                        end={value}
                        duration={2}
                        />
                    </p>
                </div>
            </div> 
        )
    }

    if(variant === "bonus") {
        return (
            <div className="flex flex-col justify-center items-center">
                <div>
                    <p className="capitalize text-gray-500 text-sm">{variant}</p>  
                </div>
                <div>
                    <p className="text-2xl font-black">
                        <CountUp 
                        end={value}
                        duration={2}
                        />
                    </p>
                </div>
            </div> 
        )
    }
}

export default ResultCard