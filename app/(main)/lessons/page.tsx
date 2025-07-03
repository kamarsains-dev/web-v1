import { Badge } from "@/components/ui/badge";
import MaterialButtons from "./component/material-button";
import { getLessons, getUserProgress } from "@/lib/queries";

const Lessons = async () => {
    const lessons = await getLessons();
    const userProgress = await getUserProgress();

    return(
        <div className="w-full max-w-[1200px] flex-col justify-center items-center text-center container pb-20 mt-13">
            <div className="pt-10">
                <Badge className="lg:w-24 lg:text-sm font-medium my-3" variant="tertiary">Eazy Level</Badge>
                <h1 className="text-2xl lg:text-3xl font-bold">Right Learning. Real Progress.</h1>
                <p className="text-sm lg:text-lg font-normal text-slate-500">Lessons to Unlock Your Dream Campus.</p>
            </div>
            <div className="lg:grid grid-cols-2 gap-4 pt-4">
                {lessons?.map((lessons) => (
                    <MaterialButtons
                        key={lessons.id}
                        title={lessons.title}
                        href={`/lessons/${lessons.slug}`}
                        icon={lessons.icon}
                        badge={lessons.badge}
                    
                    />    
                ))}
                
            </div>
            
        </div>
    )
}

export default Lessons;