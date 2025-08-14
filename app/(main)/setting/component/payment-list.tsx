import PaymentCard from "./payment-card"

type order = {
    order_id: string;
    package_id: string;
    status: string;
    created_at: string
    currentPeriodEnd: string;
    price: number;
}

type Props = {
    orders: order[]
}

const PaymentList = ({orders}:Props) => {
    return (
        <div className="mt-7">
            {orders.map((order) => {
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