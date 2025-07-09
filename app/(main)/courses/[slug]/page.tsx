import { getUserProgress } from "@/lib/queries";
import { redirect } from "next/navigation";


const Learn = async () => {
    const userProgressData = await getUserProgress();

    const [ userProgress ] = await Promise.all([userProgressData]);

    
    return(
        <div className="w-full flex justify-center items-center h-screen mt-13">
            teest 
        </div>
    );
};

export default Learn;