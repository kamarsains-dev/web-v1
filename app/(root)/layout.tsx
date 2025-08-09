import { Header } from "@/components/header";
import InfoBar from "@/components/infobar";
import { redirect } from "next/navigation";
import { getUserSession } from "../(auth)/actions";

export default async function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    const response = await getUserSession();
    if(response?.user){
        redirect("/home");
    }

    return (
        <main>
            <InfoBar/>
            <Header/>
            {children}
        </main>
    )
}