import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";   
import { createClient } from "@/lib/supabase/server";
import SignOut from "@/app/(auth)/_component/signout";
import Link from "next/link";
import Image from "next/image";

export default async function UserAvatar() {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        return null;
    }
    const getEmail = (email?: string) => {
        return [email];
    }

    const getInitial = (email?: string) => {
        return email?.charAt(0).toUpperCase() ?? "";
    };

    const userMetadata = data.user.user_metadata;

    const userAvatar = userMetadata?.avatar_url;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
                <div className="flex items-center gap-2">
                    <div>
                        {userAvatar ? (
                            <Image 
                                src={userAvatar as string}
                                width={44}
                                height={44}
                                alt="Profile Picture"
                                className="w-11 h-11 rounded-full border-2"
                            />
                        ) : (
                            <div className="w-11 h-11 rounded-full border-2  flex items-center justify-center text-lg font-bold text-gray-500">
                                {getInitial(data?.user?.email)}    
                            </div>
                        )} 
                    </div>
                </div>   
            </DropdownMenuTrigger>
            <DropdownMenuContent>
            <DropdownMenuLabel>{getEmail(data?.user.email)}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href='/setting' className="w-full h-full flex">
                        Setting
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem><SignOut/></DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};