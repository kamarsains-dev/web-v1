import { Button } from "@/components/ui/button";

const ChangePassword = () => {
    return (
        <div className="mt-5">
            <div>
                <h1 className="text-xl font-bold">Change Password</h1>
                <form className="flex flex-col gap-y-4 w-full my-5">
                    <div>
                        <h3 className="my-2">Your Password</h3>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            required
                            className="w-full px-4 py-3 rounded-xl border-2"
                        />
                    </div>
                    <div>
                        <h3 className="my-2">New Password</h3>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            required
                            className="w-full px-4 py-3 rounded-xl border-2"
                        />    
                    </div>
                    <Button variant='primary' className="max-w-[200px] w-full rounded-xl  text-sm h-12 mt-3">Confirm</Button>
                </form>
            </div>
            <div className="w-full border-t border border-red-500 flex-grow my-10"></div>
            <div>
                <h1 className="text-xl font-bold text-red-500">Danger Zone</h1>
                <p className="text-sm md:text-[15px] my-2 text-red-500">If you need to take a break or want to permanently delete your account, you can manage these options here.</p>    
                <Button variant='outline' className="max-w-[200px] w-full rounded-xl bg-white hover:bg-red-100 border-red-500 font-bold text-red-500 text-sm h-12 mt-3">Hapus</Button>
            </div>  
        </div>
    );
};

export default ChangePassword;