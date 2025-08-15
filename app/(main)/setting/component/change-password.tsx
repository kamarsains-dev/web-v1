'use client'

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { changePassword } from "@/app/(auth)/actions";
import DeleteAccountDialog from "@/components/delete-account-dialog";

const ChangePassword = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true);

        if(newPassword !== confirmPassword) {
            toast.error("Password baru sama password konfirmasinya beda heh");
            setLoading(false)
            return;
        }

        const formData = new FormData(e.currentTarget)
        const result = await changePassword(formData)

        if (result?.success) {
            toast.success(result.success);
            setNewPassword("")
            setConfirmPassword("")

            setTimeout(() => {
                router.push("/login")
            }, 2000);
        } else if (result?.error) {
            console.log(result.error)
            toast.error(result.error)
        }

        setLoading(false)
    }

    return (
        <div className="mt-5">
            <div>
                <h1 className="text-xl font-bold">Change Password</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 w-full my-5">
                    <div>
                        <h3 className="my-2">Password Baru</h3>
                        <input
                            id="new-password"
                            name="new-password"
                            type="password"
                            placeholder="Password Baru"
                            required
                            value={newPassword}
                            className="w-full px-4 py-3 rounded-xl border-2"
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <h3 className="my-2">Konfirmasi Password</h3>
                        <input
                            id="confirm-password"
                            name="confirm-password"
                            type="password"
                            placeholder="Konfirmasi Password"
                            required
                            value={confirmPassword}
                            className="w-full px-4 py-3 rounded-xl border-2"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />    
                    </div>
                    <Button type="submit" disabled={loading} variant='primary' className="max-w-[200px] w-full rounded-xl  text-sm h-12 mt-3">
                        {loading ? "Mengubah..." : "Simpan"}
                    </Button>
                </form>
            </div>
            <div className="w-full border-t border border-red-500 flex-grow my-10"></div>
            <div>
                <h1 className="text-xl font-bold text-red-500">Danger Zone</h1>
                <p className="text-sm md:text-[15px] my-2 text-red-500">If you need to take a break or want to permanently delete your account, you can manage these options here.</p>    
                <DeleteAccountDialog />
            </div> 
        </div>

        
    );
};

export default ChangePassword;