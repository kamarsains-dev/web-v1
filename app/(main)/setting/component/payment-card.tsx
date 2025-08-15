import { cn } from "@/lib/utils";


type order = {
    order_id: string;
    package_id: number;
    status: string;
    created_at: string
    currentPeriodEnd: string;
    price: number;
    packageName: string;
}

type Props = {
    order: order;
    isLast: boolean
    
}

const PaymentCard = ({order, isLast}:Props) => {
    
    const price = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        }).format(order.price);

    let statusColor = "";
    let statusText = "";
    if (order.status === "settlement") {
      statusColor = "bg-green-100 text-green-600";
      statusText = "Berhasil";
    } else if (order.status === "pending") {
      statusColor = "bg-yellow-100 text-yellow-600";
      statusText = "Menunggu Pembayaran";
    } else {
      statusColor = "bg-red-100 text-red-600";
      statusText = "Gagal";
    }

    const cardClass = cn(
        "bg-white  p-4",
        {
            "border-b-2": !isLast ,
        }
    )

    return (
        <div className={cardClass}>
                <div className="flex justify-between mb-2">
                    <span className={`bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-bold ${statusColor}`}>
                            {statusText}
                    </span>
                    <div className="mt-2 text-xs text-gray-500">
                        {order.currentPeriodEnd}
                    </div>    
                </div>
                
                <span className="flex justify-between font-bold text-[16px]">
                    <div>
                        <h1>{order.packageName}</h1>
                        <p className="text-[12px] font-normal text-gray-500">
                            {order.order_id}
                        </p>
                    </div>
                   <div className="flex justify-between">
                     <h1>{price}</h1>                    
                    </div>
                </span>
        </div>
    );
};

export default PaymentCard;
