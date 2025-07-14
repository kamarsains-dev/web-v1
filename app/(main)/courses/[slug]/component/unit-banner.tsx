import { Button } from "@/components/ui/button";

type Props = {
    title: string;
    description: string;
}

const unitBanner = ({ title, description }: Props) => {
    return (
        <div className="w-full flex justify-center items-center">
            <Button variant='quinaryBorder' className="flex flex-col gap-y-0 w-full h-24 rounded-2xl">
                <h1 className="text-xl font-bold">{title}</h1>
                <h3 className="text-lg">{description}</h3>    
            </Button>
        </div>
    )
}

export default unitBanner;