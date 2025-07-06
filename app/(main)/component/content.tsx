import { Button } from "@/components/ui/button";
import Link from "next/link";
import RiveComponent from "@/components/animations/level-animations";

const Content = () => {
    return (
        <div className="bg-[#F5F7FF] p-6 rounded-2xl lg:min-w-[540px] lg:min-h-[500px] border-[#0456D3] border-2 flex flex-col justify-around items-center text-center">
        
            <div className="flex justify-center items-center w-[350px] h-[330px]">
                <RiveComponent />
            </div>
            <div className="my-4">
                <h1 className="text-2xl font-bold">Try Out</h1>
                <p className="text-[#375CE3]">Serius - 135 menit</p>
            </div>
            <Link href='/tryout' className="w-full text-center">
                <Button variant='quinary' sweep className="w-full h-14 rounded-xl ">
                    <span className="flex justify-center items-center">
                        <a className="w-full h-full my-1 text-lg font-bold">Start</a>
                    </span>
                </Button>
            </Link>
                
        </div>   
    );
};

export default Content;