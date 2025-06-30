import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

type Props = {
    title: string;
    href: string;
    icon: string;
    badge?: string;

}

const MaterialButtons = ({ title, href, icon, badge}: Props) => {
    return (
        <div className="mt-4 lg:mt-0">
            <Link href={href}>
                <div className="relative flex items-center justify-start gap-4 bg-white border-2 border-b-4 border-gray-200 rounded-xl px-4 py-5 w-full h-[100px] hover:border-gray-300 transition">
                    <div className="absolute top-2 right-2">
                        <Badge className="bg-green-100 text-green-600 font-semibold px-3 py-1 rounded-full text-xs">
                            {badge}
                        </Badge>
                    </div>
                    <div className="flex-shrink-0">
                        <Image
                            src={icon}
                            width={60}
                            height={60}
                            alt="Tryout Icon"
                            className="lg:mr-3 max-w-14"
                        />
                    </div>
                <h1 className="text-md font-medium text-gray-800 text-left">{title}</h1>
                </div>
            </Link>
        </div>
    )
}

export default MaterialButtons;