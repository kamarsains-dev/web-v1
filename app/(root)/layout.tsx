import InfoBar from "@/components/infobar";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="">
            <InfoBar/>
            {children}
        </main>
    )
}