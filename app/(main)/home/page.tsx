import Content from "../component/content";
import Ads from "../component/ads";
import Reminder from "../component/reminder";
import Leaderboard from "../component/leaderboard";
import Info from "../component/info";
import UserProgress from "../component/user-progress";

export default async function Home () {
    return (
        <div>   
            <div className="container md:grid justify-center pb-20 max-w-[1200px]">
        
               
                <div className="md:flex justify-center gap-x-10 mt-18 md:mt-15">
                    <div className="md:hidden">
                        <UserProgress />
                    </div>
                    <div>
                        <Content/>
                    </div>
                    <div>
                        <Ads/>
                        <Reminder />
                        <div className="hidden md:flex">
                            <UserProgress />
                        </div>
                        <Leaderboard />
                        <Info />
                    </div> 
                </div>    
            </div>
        </div>
    );
};
