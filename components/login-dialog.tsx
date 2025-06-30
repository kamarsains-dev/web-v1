"use client"
import { login } from "@/app/(auth)/actions";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import Google from '@/public/google.svg';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const LoginDialog = () => {
    const [isEmailLogin,  setIsEmailLogin] = useState(false);
    const resetDialog = () => setIsEmailLogin(false);
    
    
    return(
        <Dialog onOpenChange={(open) => { if  (!open) resetDialog()}}>
            <DialogTrigger asChild>
                <Button size="lg" variant="outline" className="text-base font-bold w-24 h-10 rounded-lg">
                    Log In
                </Button>          
            </DialogTrigger>
            <DialogContent className="w-lg flex flex-col justify-center items-center text-center py-8 lg:py-14 lg:px-20 px-14">
                <DialogHeader>
                <DialogTitle>
                    <div className="flex justify-center items-center text-3xl font-bold pt-5">
                        {isEmailLogin ? "Log In" : "Glad You're Back!"}
                    </div>
                </DialogTitle>
                <DialogDescription>
                {isEmailLogin ? (
              <form className="flex flex-col gap-y-4 mt-4 w-full">
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 rounded-xl border-2"
                />
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    className="w-full px-4 py-3 rounded-xl border-2"
                />
                <Button variant="outline" formAction={login} className="w-full h-13 rounded-xl">
                    <div className="flex justify-center items-center gap-x-2 my-1">
                        <p>Login</p>
                    </div>
                </Button>
                <div className="text-[15px] text-black text-center">
                    <p>New user? <a href="/signup" className="underline font-bold">Sign Up</a></p>
                </div>
                <div className="text-[9px] lg:text-[11px] flex flex-col gap-y-1 lg:gap-y-3 text-gray-400 mt-1 text-center">
                    <span>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" className="underline font-bold">Privacy Policy</a> and
                    <a href="https://policies.google.com/terms" className="underline font-bold"> Terms of Service</a> apply.</span>
                </div>
              </form>
            ) : (
                <div>
                        <Button variant="outline" className="w-full h-13 rounded-xl mt-3">
                            <div className="flex justify-center items-center gap-x-2 my-1">
                                <Image
                                    src={Google}
                                    alt="google-icon"
                                    width={23}
                                    height={23}
                                />
                                <div>
                                    <p>Login with Google</p>    
                                </div>
                            </div>
                        </Button>    
                        <Button variant="default" className="w-full h-13 rounded-xl mt-3"   onClick={() => setIsEmailLogin(true)}>
                            <div className="flex justify-center items-center gap-x-2 my-1">
                                <div>
                                    <p>Login With E-Mail</p>    
                                </div>
                            </div>
                        </Button>
                    </div>
            )}
                    
                </DialogDescription>
                </DialogHeader> 

                {!isEmailLogin && (
                    <>
                        <div className="text-[15px]">
                            <p>New user? <a href="/signup" className="underline font-bold">Sign up</a></p>
                        </div>
                        <div className="text-[9px] lg:text-[11px] flex flex-col gap-y-1 lg:gap-y-3 text-gray-400 mt-1">
                            <p>By signing in to Kamar Sains, you agree to our <a href="/terms" className="underline font-bold">Terms and Privacy Policy.</a></p>
                        </div>
                    </>
                )}
                    
            </DialogContent>
        </Dialog>
                
                
    )
}

export default LoginDialog;