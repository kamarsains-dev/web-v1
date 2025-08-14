
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Nav from "@/components/ui/nav";
import Key from "@/public/key.svg";
import Thunder from "@/public/thunder-icon.svg"
import UserAvatar from "@/components/user-avatar";
import { getUserProgress, getUserSubscription } from "@/lib/queries";

const UserHeader = async () => {
    const userProgressData = await getUserProgress();
    const userSubscriptionData = await getUserSubscription();

    const isPremium = userSubscriptionData?.isActive

    return (
        <div className="h-14 w-full border-b-2 bg-white px-4 fixed top-0 z-20">
            <div className="lg:max-w-screen-xl mx-auto flex items-center justify-between h-full">
                <div className=" flex items-center gap-x-3">
                    <Link href='/home'>
                        <Image
                        src="/logo.svg"
                        height={35}
                        width={35}
                        alt="Logo"
                        className="lg:hidden"
                        />
                    </Link>
                    
                    <h1 className="text-2xl font-bold text-gray-900 tracking-wide hidden lg:block">
                        <Link href='/home'>
                            Kamar Sains
                        </Link>
                    </h1>
                </div>
                <div className="hidden lg:flex">
                    <Nav/>   
                </div>    
                <div className="flex justify-center items-center gap-x-2">
                    <Button variant="button" className="rounded-full text-xl font-bold">
                        <Image
                            src={Thunder}
                            width={21}
                            height={21}
                            alt="key"
                        />
                        <p>{isPremium ? "∞" : userProgressData?.thunders ?? 0}</p>
                    </Button>
                     <Button variant="button" className="rounded-full text-xl font-bold">
                        <Image
                            src={Key}
                            width={21}
                            height={21}
                            alt="key"
                        />
                        <p>{userProgressData?.keys ?? 0}</p>
                    </Button>
                    <UserAvatar />   
                </div>
            </div>
            
        </div>
    )
}

export default UserHeader;