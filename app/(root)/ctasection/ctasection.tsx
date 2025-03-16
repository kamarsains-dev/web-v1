import { Button } from "@/components/ui/button";
import Image from "next/image";
import AppStore from '@/public/Appstore.svg'
import PlayStore from '@/public/Playstore.svg'

const CtaSection = () => {
    return (
        <div className="bg-hero-pattern flex mx-auto justify-center items-center text-white text-center">
            <div className="w-full bg-star-pattern">
                <div className="container lg:my-60 my-48">
                    <div>
                        <h1 className="text-5xl lg:text-6xl font-bold">Science Is a Tap Away!</h1>
                        <h3 className="text-base lg:text-xl font-light lg:mt-2 mt-6">Download Kamar Sains now and start your journey of discovery</h3>
                    </div>
                    <div className="lg:mt-7 mt-12">
                        <Button variant="secondary" className="w-64 h-14 text-lg">
                            Start Your Mission
                        </Button>
                    </div>
                    <div className="lg:flex grid gap-7 justify-center lg:mt-7 mt-8">
                        <Button variant="default" className="w-52 h-12">
                            <div className="flex justify-center items-center gap-x-2">
                                <Image
                                    src={AppStore}
                                    alt="app-store"
                                    width={27}
                                    height={27}
                                />
                                <div className="flex-1 -space-y-2 text-left">
                                    <p className="text-sm">Get it on</p>
                                    <p className="text-xl">App Store</p>    
                                </div>
                            </div>
                            
                            
                        </Button>
                        <Button variant="default" className="w-52 h-12">
                            <div className="flex justify-center items-center gap-x-2">
                                <Image
                                    src={PlayStore}
                                    alt="play-store"
                                    width={27}
                                    height={27}
                                />
                                <div className="flex-1 -space-y-2 text-left">
                                    <p className="text-sm">Get it on</p>
                                    <p className="text-xl">Play Store</p>    
                                </div>
                            </div>
                        </Button>
                    </div>    
                </div>    
            </div>
            
            
        </div>
    );  
};

export default CtaSection