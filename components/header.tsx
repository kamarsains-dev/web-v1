import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
    return (
        <header className="h-14 w-full border-b-2 border-slate-200 px-4">
            <div className="lg:max-w-screen-xl mx-auto flex items-center justify-between h-full">
                <div className=" flex items-center gap-x-3">
                    <Link href=''>
                        <Image
                        src="/logo.svg"
                        height={35}
                        width={35}
                        alt="Logo"
                        className="lg:hidden"
                        />
                    </Link>
                    
                    <h1 className="text-2xl font-bold text-gray-900 tracking-wide hidden lg:block">
                        <Link href='/'>
                            Kamar Sains
                        </Link>
                    </h1>
                </div>
                <Button size="lg" variant="outline" className="text-base font-bold w-24 h-10">
                    Log In
                </Button>        
            </div>
        </header>
    );
};