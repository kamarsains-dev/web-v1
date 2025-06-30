import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import BlackHole from '@/public/blackhole.svg';
import Pi from '@/public/tryout.svg';
import Link from "next/link";


const TabList = () =>{
    return (
        <div>
            <Tabs defaultValue="try-out" className="lg:w-[400px]">
                <TabsList>
                    <TabsTrigger value="try-out">
                        <Image
                        src={Pi}
                        width={25}
                        height={25}
                        alt="pi"
                        />
                        Try Out
                    </TabsTrigger>
                    <TabsTrigger value="lessons">
                        <Image
                            src={BlackHole}
                            width={25}
                            height={25}
                            alt="BlackHole"
                            />
                        Lessons
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="try-out">
                    <div className="w-full p-3 lg:w-md h-[330px] lg:h-[400px] bg-[#FBFFE4] border-2 gap-y-1 border-b-4 border-[#C8DA60] rounded-2xl flex justify-center items-center flex-col">
                            <Image
                                src={Pi}
                                width={170}
                                height={170}
                                alt="pi"
                                className="w-32 lg:w-44"
                                />
                        <div className="my-3 flex justify-center items-center flex-col">
                            <h1 className="text-2xl lg:text-3xl font-bold text-[#292F00]">Try Out</h1>
                            <p className="text-md font-normal text-[#8E9300]">Serius - 135 menit</p>  
                        </div>
                        <Link href="/tryout" >
                            <Button variant={"tertiary"} className="rounded-xl text-xl font-extrabold w-60 lg:w-80 h-14 cursor-pointer" sweep>
                                Continue    
                            </Button>
                        </Link>
                    </div>    
                </TabsContent>
            <TabsContent value="lessons">
                        <div className="w-full p-3 lg:w-md h-[30px] lg:h-[400px]  bg-[#F3FAFF] gap-y-1 border-2 border-b-4 border-[#57C7FF] rounded-2xl flex justify-center items-center flex-col">
                        <Image
                                src={BlackHole}
                                width={170}
                                height={170}
                                alt="pi"
                                className="w-28 lg:w-44"
                                />
                        <div className="my-3 flex justify-center items-center flex-col">
                            <h1 className="text-2xl lg:text-3xl font-bold text-[#00242F]">Lessons</h1>
                            <p className="text-md font-normal text-[#006293]">Santai - 5 menit</p>  
                        </div>
                        <Link href="/lessons" >
                            <Button variant={"quaternary"} className="rounded-xl text-xl font-extrabold w-60 lg:w-80 h-14 cursor-pointer" sweep>
                                Continue    
                            </Button>
                        </Link>
                    </div>    
            </TabsContent>
            </Tabs>    
        </div>
    );
};

export default TabList;