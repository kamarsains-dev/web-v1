import PriceButton from './price-btn'

type Props = {
    pricingPackagesData: Packages[]
}

type Packages = {
    id: number;
    name: string;
    price: number;
    description: string;
}

const PricePackages = ({pricingPackagesData}: Props) => {
    return (
        <div className="container flex flex-col text-center">
            <div className="text-white flex flex-col justify-center items-center pb-10 gap-y-2">
                <h1 className="text-4xl lg:text-5xl font-bold text-white">Small Cost. <a className="text-[#F6FF00]">Big Impact.</a></h1>
                <p className="lg:text-xl font-normal">Suatu hari, kamu akan sadar ini investasi terbaik.</p>
            </div>  
            <div className='grid md:flex gap-4 justify-center items-center'>
                {pricingPackagesData.map((data) => (
                    <PriceButton 
                        key={data.id}
                        id={data.id}
                        name={data.name}
                        price={data.price}
                        description={data.description}
                    />   
                ))}
            </div>
            
            <p className="text-white py-7 mb-7">Belajar, konsisten, dan latihan adalah kombinasi sempurna untuk wujudkan impian. 
            <a className="font-bold"> Syarat dan ketentuan berlaku.</a></p>   
        </div>
    )
    
}

export default PricePackages;