"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
  } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

const DeleteAccountDialog = () => {
    return(
        <Dialog>
            <DialogTrigger asChild>
                <Button size="lg" variant="danger" className="max-w-[200px] w-full rounded-xl  text-sm h-12 mt-3">
                    Hapus
                </Button>          
            </DialogTrigger>
            <DialogContent className="w-lg flex flex-col justify-center items-center text-center py-8 lg:py-14 lg:px-20 px-14">
                <DialogHeader>
                <DialogTitle>
                    <div className="flex justify-center items-center text-3xl font-bold pt-5 text-center">
                        Konfirmasi Penghapusan Akun
                    </div>
                </DialogTitle>
                <DialogDescription>
                    <div className="flex flex-col gap-y-4 py-4 text-center">
                        <p>Apakah kamu yakin ingin menghapus akun ini? proses tidak bisa dibatalkan.</p>
                        <div>
                            <Button variant="danger" className="w-full h-13 rounded-xl mt-3">
                                <div className="flex justify-center items-center gap-x-2 my-1">
                                    <Trash size={90} strokeWidth={2}/>
                                    <div>
                                        <p>Hapus Akun Permanen</p>    
                                    </div>
                                </div>
                            </Button>
                            <DialogClose asChild> 
                                <Button variant="default" className="w-full h-13 rounded-xl mt-3">
                                    <div className="flex justify-center items-center gap-x-2 my-1">
                                        <div>
                                            <p>Batal</p>    
                                        </div>
                                    </div>
                                </Button>
                            </DialogClose>   
                        </div>        
                    </div>
                
                </DialogDescription>
                </DialogHeader> 
                    <>
                        <div className="text-[9px] lg:text-[11px] flex flex-col gap-y-1 lg:gap-y-3 text-gray-400 mt-1">
                            <p>PERINGATAN : Seluruh progress dan paketmu yang masih aktif akan ikut terhapus. </p>
                        </div>
                    </>         
            </DialogContent>
        </Dialog>
                
                
    )
}

export default DeleteAccountDialog;