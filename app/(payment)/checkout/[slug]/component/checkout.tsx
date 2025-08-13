"use client"

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

interface Props {
    token: string;
}

interface MidtransSnap {
    pay: (token: string, callbacks: MidtransCallback) => void
}

interface MidtransResult {
    transaction_status: string;
    order_id: string;
    gross_amount: string;
}

interface MidtransCallback {
    onSuccess?: (result: MidtransResult) => void;
    onPending?: (result: MidtransResult) => void;
    onError?: (result: MidtransResult) => void;
    onClose?: () => void;
}
declare const snap: MidtransSnap;

export default function Checkout({token}:Props) {
    useEffect(()=> {
        const script = document.createElement('script');
        const clientKey = process.env.NEXT_PUBLIC_MIDTRANS_CLIENT!;
        script.src = `https://app.sandbox.midtrans.com/snap/snap.js`
        script.setAttribute('data-client-key', clientKey);
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
            document.body.removeChild(script)
        }
    }, []);

    const handlePay = () => {
        if(typeof snap !== "undefined" && snap && token) {
            snap.pay(token, {
                onSuccess: function(result) {
                    console.log('Payment Success:', result)
                    // redirect ke halaman success
                },
                onPending: function(result) {
                    console.log('Payment pending', result)
                    // redirect ke halaman pending
                },
                onError: function(result) {
                    console.log("Payment error:", result)
                },
                onClose: function() {
                    console.log("Payment popup closed");
                }
            })
        }
    }

    return (
        <div className="w-full">
            <Button onClick={handlePay} sweep variant='septenary' className="w-full rounded-xl font-bold text-lg h-14">
                Bayar Sekarang
            </Button>
        </div>
    )

}