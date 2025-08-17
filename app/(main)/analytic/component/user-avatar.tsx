// import { createClient } from '@/lib/supabase/server'
// import { redirect } from "next/navigation";
// import { toast } from "sonner";

export default function UserAvatar () {
    /*const supabase = await createClient();

    const {data: userData, error: userError} = await supabase.auth.getUser();
    
    if(!userData || userError) {
        toast.error("Kamu belum login")
        redirect('/login')
    }

    const userId = userData?.user
    const userName = userId.user_metadata.name
    */

    return (
        <div className="flex items-center justify-between gap-x-3">
            <div className="w-14 h-14 rounded-full border-2  flex items-center justify-center text-xl font-bold bg-blue-500 text-white p-6">
                J    
            </div>
            <div className="flex flex-col text-left w-full">
                
                <h1 className="text-xl font-bold">John Doe</h1>
                <p className="text-sm lg:text-[16px] font-normal text-slate-500">SMAN 1 Sragen</p>
            </div>
        </div>
    )
}