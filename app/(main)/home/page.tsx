import { Progress } from "@/components/ui/progress";
import Content from "../component/content";
import Ads from "../component/ads";
import Reminder from "../component/reminder";
import Leaderboard from "../component/leaderboard";
import Info from "../component/info";

export default async function Home () {
    return (
        <div>   
            <div className="container md:grid justify-center pb-20 max-w-[1200px]">
            <Progress value={50}/>
               
                <div className="md:flex justify-center gap-x-10 mt-5">
                    <div>
                        <Content/>
                    </div>
                    <div>
                        <Ads/>
                        <Reminder />
                        <Leaderboard />
                        <Info />
                    </div> 
                </div>    
            </div>
        </div>
    );
};
