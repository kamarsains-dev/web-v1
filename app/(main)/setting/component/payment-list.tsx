import PaymentCard from "./payment-card"
import { getPackageDetails } from "@/lib/queries"

type order = {
    order_id: string;
    package_id: number;
    status: string;
    created_at: string
    currentPeriodEnd: string;
    price: number;
}

type Props = {
    orders: order[]
}

const PaymentList = async({orders}:Props) => {
    if(!orders || orders.length === 0) {
        return (
            <div className="mt-7">
                <p>Kamu belum memiliki paket apapun</p>
            </div>
        )
    }

    const packageDetailsPromises = orders.map(order => getPackageDetails(order.package_id));
    const packageDetails = await Promise.all(packageDetailsPromises);

    const ordersData = orders.map((order, index) => ({
        ...order,
        packageName: packageDetails[index]?.name,
        price: packageDetails[index]?.price,
    }));

    return (
        <div className="mt-7">
            {ordersData.map((order) => {
                return (
                <PaymentCard
                    key={order.order_id}
                    order={order}
                />       
                )
            })}
            
        </div>
    )
}

export default PaymentList;