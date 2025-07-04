import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createClient } from "@/lib/supabase/server";

export default async function TabsUnderlinedDemo() {

    const supabase = await createClient();

    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
        return null;
    }
    const getEmail = (email?: string) => {
        return email;
    }


  return (
    <Tabs defaultValue="profile">
      <TabsList className="w-full p-0 bg-background justify-start border-b rounded-none">
        
          <TabsTrigger
          value="profile"
          className="rounded-none bg-background h-full data-[state=inactive]:font-normal data-[state=active]:font-bold data-[state=inactive]:opacity-60 data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-b-primary"
          >              
              Profile
          </TabsTrigger>
          <TabsTrigger
          value="preferences"
          className="rounded-none bg-background h-full data-[state=inactive]:font-normal data-[state=active]:font-bold data-[state=inactive]:opacity-60 data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-b-primary"
          >
              Preferences
          </TabsTrigger>
          <TabsTrigger
          value="security"
          className="rounded-none bg-background h-full data-[state=inactive]:font-normal data-[state=active]:font-bold data-[state=inactive]:opacity-60 data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-b-primary"
          >
              Security
          </TabsTrigger>
          <TabsTrigger
          value="payment"
          className="rounded-none bg-background h-full data-[state=inactive]:font-normal data-[state=active]:font-bold data-[state=inactive]:opacity-60 data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-b-primary"
          >
              Payment
          </TabsTrigger>
      </TabsList> 
        <TabsContent value="profile">
          <div className="mt-5">
            <div>
              <h1 className="text-xl font-bold">Personal</h1>
              <div className="w-full border-t border border-gray-200 flex-grow my-5"></div>

              <form className="flex flex-col gap-y-4 w-full">
                    <div>
                        <h3 className="my-2">Email</h3>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            disabled
                            placeholder={getEmail(data?.user.email)}
                            className="w-full px-4 py-2 rounded-lg border cursor-not-allowed"
                        />
                    </div>
                    <div>
                        <h3 className="my-2">Password</h3>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            required
                            className="w-full px-4 py-2 rounded-lg border"
                        />    
                    </div>
                    <div>
                        <h3 className="my-2">Kelas</h3>
                        <input
                            id="kelas"
                            name="kelas"
                            type="kelas"
                            placeholder="Kelas"
                            required
                            className="w-full px-4 py-2 rounded-lg border"
                        />    
                    </div>
                <Button variant='primary' className="max-w-[200px] w-full rounded-xl  text-sm h-12 mt-3">Simpan</Button>
                </form>
            </div>
            <div className="mt-15">
                <h1 className="text-xl font-bold">Sekolah</h1>
                <div className="w-full border-t border border-gray-200 flex-grow my-5"></div>
                <form className="flex flex-col gap-y-4 mt-4 w-full">
                    <div>
                        <h3 className="my-2">Provinsi</h3>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            required
                            className="w-full px-4 py-2 rounded-lg border"
                        />
                    </div>
                    <div>
                        <h3 className="my-2">Kabupaten</h3>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            required
                            className="w-full px-4 py-2 rounded-lg border"
                        />    
                    </div>
                    <div>
                        <h3 className="my-2">Sekolah</h3>
                        <input
                            id="kelas"
                            name="kelas"
                            type="kelas"
                            placeholder="Kelas"
                            required
                            className="w-full px-4 py-2 rounded-lg border"
                        />    
                    </div>
                    <Button variant='primary' className="max-w-[200px] w-full rounded-xl  text-sm h-12 mt-3">Simpan</Button>
                    </form>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="preferences">
          <div>
            Preferences  
          </div>
        </TabsContent>
        <TabsContent value="security">
            <div className="mt-5">
                <div>
                <h1 className="text-xl font-bold">Change Password</h1>
                <div className="w-full border-t border border-gray-200 flex-grow my-5"></div>

                <form className="flex flex-col gap-y-4 w-full">
                        <div>
                            <h3 className="my-2">Your Password</h3>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email"
                                required
                                className="w-full px-4 py-2 rounded-lg border"
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
                                className="w-full px-4 py-2 rounded-lg border"
                            />    
                        </div>
                    <Button variant='primary' className="max-w-[200px] w-full rounded-xl  text-sm h-12 mt-3">Confirm</Button>
                    </form>
                </div>
                <div className="mt-15">
                    <h1 className="text-xl font-bold text-red-500">Danger Zone</h1>
                    <div className="w-full border-t border border-red-500 flex-grow my-5 "></div>
                    <p className="text-sm md:text-[15px] my-2 text-red-500">If you need to take a break or want to permanently delete your account, you can manage these options here.</p>    
                    <Button variant='outline' className="max-w-[200px] w-full rounded-xl bg-white hover:bg-red-100 border-red-500 font-bold text-red-500 text-sm h-12 mt-3">Hapus</Button>
                </div>  
            </div>
        </TabsContent>
        <TabsContent value="payment">
            <div className="mt-5">
                <div>
                    <h1 className="text-xl font-bold">Payment History</h1>
                    <div className="w-full border-t border border-gray-200 flex-grow my-5"></div>
                </div>
            </div>
        </TabsContent>    
    </Tabs>
  );
}
