"use client";

import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
    label: string;
    iconSrc: string;
    href: string;
};

export const NavbarItem = ({label,iconSrc, href}: Props) => {
    const pathname = usePathname();
    const active = pathname == href;

    return (
        <Tooltip>
            <Link href={href}>
                <TooltipTrigger>
                    <Button 
                        variant={active ? "active" : "inactive"}
                        className={`rounded-lg ${active ? "opacity-100 font-semibold" : "opacity-50 font-normal"} cursor-pointer`}
                        >    
                            <Image 
                            src={iconSrc}
                            alt={label}
                            className="mr-0"
                            height={18}
                            width={18}
                            />     
                        </Button>   
                </TooltipTrigger>
                <TooltipContent className="hidden lg:flex">
                    <span>
                        {label}
                    </span>
                </TooltipContent>
                         
            </Link>
        </Tooltip>
    );
};