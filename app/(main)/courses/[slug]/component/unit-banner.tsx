import { Button } from "@/components/ui/button";

type Props = {
    title: string;
    description: string;
}

const unitBanner = ({ title, description }: Props) => {
    return (
        <div className="w-full flex justify-center items-center">
            <Button variant='quinaryBorder' className="flex flex-col p-10 w-full rounded-3xl h-16 border-b-6 gap-y-0">
                <h1 className="text-sm font-bold">{title}</h1>
                <h3 className="text-[15px]">{description}</h3>    
            </Button>
        </div>
    )
}

export default unitBanner;