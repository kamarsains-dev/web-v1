'use client'

import { signOut } from "@/app/(auth)/actions"

export default function SignOut() {
    const handleSignOut = async () => {
        await signOut();
    }

    return (
        <div onClick={handleSignOut} className="flex w-full h-full cursor-pointer">
           <a  className="text-red-600  text-sm font-medium">Log Out</a>
        </div>
    )
}  