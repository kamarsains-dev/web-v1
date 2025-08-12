"use client";

import { useEffect, useState } from "react";
import Checkout from "./checkout";
import { Button } from "@/components/ui/button";

export default function CheckoutClient({ packageId }: { packageId: number }) {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getToken() {
      try {
        const res = await fetch("/api/tokenizer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ packageId }),
        });

        const data = await res.json();
        if (data.token) {
          setToken(data.token);
        } else {
          console.error("Gagal dapat token:", data);
        }
      } catch (err) {
        console.error("Error fetch token:", err);
      } finally {
        setLoading(false);
      }
    }

    getToken();
  }, [packageId]);

  if (loading) return <p>Sedang memuat pembayaran...</p>;
  if (!token) return <p>Gagal memuat token pembayaran</p>;

  return (
    <>
      <Checkout token={token} />
      <Button onClick={() => window.location.reload()}>Coba Ulang</Button>
    </>
  );
}
