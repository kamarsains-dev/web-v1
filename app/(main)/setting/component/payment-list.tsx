import PaymentCard from "./payment-card"
import { getPackageDetails } from "@/lib/queries"
import { format, parseISO } from "date-fns"
import { id } from "date-fns/locale"

type order = {
    order_id: string;
    package_id: number;
    status: string;
    created_at: string
    currentPeriodEnd: string;
    price: number;
    packageName: string
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

    ordersData.sort((a, b) => new Date (b.created_at).getTime() - new Date(a.created_at).getTime())

    const groupedOrders = ordersData.reduce((acc: {[key: string]: order[]}, order) => {
         const date = format(parseISO(order.created_at), 'dd MMMM yyyy', { locale: id });
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(order);
        return acc;
    }, {})

    return (
        <div className="mt-7 flex flex-col gap-y-5">
            {Object.entries(groupedOrders).map(([date, dailyOrders], dateIndex) => (
                <div key={dateIndex}>
                    <h2 className="mb-2 text-sm font-semibold text-gray-500">{date}</h2>
                    <div className="flex flex-col border-2 rounded-xl overflow-hidden">
                        {dailyOrders.map((order, orderIndex) => (
                            <PaymentCard
                                key={order.order_id}
                                order={order}
                                isLast={orderIndex === dailyOrders.length - 1}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PaymentList;