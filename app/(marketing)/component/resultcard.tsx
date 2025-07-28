
type Props = {
    variant: "points" | "thunders";
    value: number;
}

const ResultCard = ({variant, value}:Props) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div>
                <p className="uppercase text-gray-400 lg:text-[16px] text-sm">{variant}</p>  
            </div>
            <div>
                <p className="lg:text-5xl text-4xl font-black">{value}</p>
            </div>
        </div>
    )
}

export default ResultCard