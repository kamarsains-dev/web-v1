'use client'

import supabase from '@/lib/db';
import type { IPrice } from '@/types/price'
import { useEffect, useState } from 'react';

const Price = () => {
    const [price, setPrice] = useState<IPrice[]>([]);

    useEffect(() => {
        const fetchPrice = async () => {
            const {data, error} = await supabase.from('pricing_packages').select('*').order('id');

            if(error) console.log('error:', error);
            else setPrice(data);
        };

        fetchPrice();
    }, [supabase]);

    console.log(price);

    return (
        <div className="container flex flex-col text-center">
            <div className="text-white flex flex-col justify-center items-center pb-10 gap-y-2">
                <h1 className="text-4xl lg:text-5xl font-bold">Small Cost. <a className="text-[#F6FF00]">Big Impact.</a></h1>
                <p className="lg:text-xl font-normal">Suatu hari, kamu akan sadar ini investasi terbaik.</p>
            </div>  
            <div className=" flex flex-col lg:flex-row gap-x-10 gap-y-4 justify-center items-center">
                {price.map((price:IPrice) => (
                    <div key={price.id} className="w-full max-w-md bg-price rounded-3xl lg:rounded-4xl  flex flex-col justify-between items-center border-b-8 border-[#095735] my-6 lg:my-2">
                        <div className="w-full p-1.5">
                            <h2 className="text-2xl font-bold text-[#A33636] my-2">{price.name}</h2>
                            <div className="w-full bg-hero-pattern rounded-2xl lg:rounded-3xl p-5">
                                <h1 className="text-5xl font-bold text-[#F6FF00] my-4">Rp. {price.price.toLocaleString('id-ID')}</h1>                       
                                <span className="text-center text-white">
                                    <ol className=' pl-5 text-white space-y-1'>
                                        {price.description.split('\n').map((item, index) => (
                                            <li key={index}>
                                                {item}          
                                            </li>    
                                        ))}
                                        
                                    </ol>
                                </span>
                            </div>    
                        </div>
                    </div>
                    ))}
            </div>  
            <p className="text-white py-7 mb-7">Belajar, konsisten, dan latihan adalah kombinasi sempurna untuk wujudkan impian. 
            <a className="font-bold"> Syarat dan ketentuan berlaku.</a></p>   
        </div>
    )
}

export default Price;