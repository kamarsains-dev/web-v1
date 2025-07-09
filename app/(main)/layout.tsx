import UserHeader from "./component/user-header";
import MobileNav from "./component/mobile-nav";
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

type Props = {
    children: React.ReactNode;
};

export default async function MainLayout ({
    children,
}: Props) {
    const supabase =  await createClient()

    const { data: {user} } = await supabase.auth.getUser()
    if (!user){
        console.log({user})
        redirect('/login')
    }

    return (
        <>
            <main>
                <UserHeader/>
                <div>
                    {children}
                </div>
                <MobileNav/>
            </main>
        </>
    )
}
