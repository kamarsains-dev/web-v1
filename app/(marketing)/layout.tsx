import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

type Props = {
    children: React.ReactNode;
};

export default async function MarketingLayout ({
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
                <div className='flex flex-col items-center justify-center'>
                    {children}
                </div>
            </main>
        </>
    )
}
