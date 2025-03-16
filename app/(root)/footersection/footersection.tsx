import Link from "next/link";

const FooterSection = () => {
    return (
        <div className="w-full bg-black text-white justify-around">
            <div className="container py-5 lg:flex grid-rows-2 justify-between">
                <div className="mr-32">
                    <div className="my-10">
                        <h1 className="text-2xl font-bold text-white tracking-wide  ">
                            Kamar Sains
                        </h1>
                        <div className="font-mono text-xs grid text-slate-300">
                            <a>Make everyone easily understand science.</a>
                            <a className="font-thin text-sm my-1 text-slate-500">© 2025 Kamar Sains</a>    
                        </div>    
                    </div>
                    
                </div>
                <div className="my-10">
                    <h1 className="text-base">
                        Follow Us
                    </h1>
                    <ul className="text-sm font-light text-slate-300">
                        <li>
                            <Link href='https://www.instagram.com/kamar_sains/'>
                                Instagram
                            </Link>
                            
                        </li>
                        <li>
                            <Link href='https://www.tiktok.com/@kamar_sains'>
                                TikTok
                            </Link>
                            
                        </li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
                <div className="my-10">
                    <h1 className="text-base">
                        Company
                    </h1>
                    <ul className="text-sm font-light text-slate-300">
                        <li>Feedback</li>
                        <li>Media inquries</li>
                        <li>Contact us</li>
                    </ul>
                </div>    
                <div className="my-10">
                    <h1 className="text-base">
                        Resources
                    </h1>
                    <ul className="text-sm font-light text-slate-300">
                        <li>
                            <Link href='/privacy'>Privacy Policy</Link></li>
                        <li>
                            <Link href='/terms'>Terms of service</Link>
                        </li>
                    </ul>
                </div>        
            </div>
            
        </div>
    );
};

export default FooterSection;