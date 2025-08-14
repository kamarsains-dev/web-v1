import { format } from "date-fns";
import { id } from "date-fns/locale";


type Props = {
    order: {
        order_id: string;
        package_id: string;
        status: string;
        created_at: string
        currentPeriodEnd: string;
        price: number;     
    }
    
}

const PaymentCard = ({order}:Props) => {
    
    const transactionDate = format(new Date(order.created_at), "d MMMM yyyy", { locale: id })
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


    return (
        <div className="my-7">
            <span className="flex mb-2">
                <h1 className="text-sm  font-medium">{transactionDate}</h1>
            </span>

            <div className="w-full border-2 rounded-xl p-4">
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
                        <h1>{order.package_id}</h1>
                        <p className="text-[12px] font-normal text-gray-500">
                            {order.order_id}
                        </p>
                    </div>
                   <div className="flex justify-between">
                     <h1>Rp{price}</h1>                    
                    </div>
                </span>
            </div>
        </div>
    );
};

export default PaymentCard;
