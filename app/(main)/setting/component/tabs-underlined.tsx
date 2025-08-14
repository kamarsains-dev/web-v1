import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createClient } from "@/lib/supabase/server";
import PaymentList from "./payment-list";
import ChangePassword from "./change-password";
import { getOrders } from "@/lib/queries";

export default async function TabsUnderlinedDemo() {
    const supabase = await createClient();
   

    const { data: userData, error: userError } = await supabase.auth.getUser();
    
    const userId = userData?.user

    if (userError || !userId) {
        return null;
    }
    
    const ordersData = await getOrders(userId.id);  

    const getEmail = (email?: string) => {
        return email;
    }
    const getUserName = (name?: string) => {
        return name
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
              <form className="flex flex-col gap-y-4 w-full my-5">
                    <div>
                        <h3 className="my-2">Nama Lengkap</h3>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            disabled
                            placeholder={getUserName(userId.user_metadata?.full_name)}
                            className="w-full px-4 py-3 rounded-xl border-2"
                        />
                    </div>
                    <div>
                        <h3 className="my-2">Nama Akun</h3>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            disabled
                            placeholder={getUserName(userId.user_metadata?.name)}
                            className="w-full px-4 py-3 rounded-xl border-2"
                        />
                    </div>
                <Button variant='primary' className="max-w-[200px] w-full rounded-xl  text-sm h-12 mt-3">Simpan</Button>
                </form>
            </div>
            <div className="w-full border-t border border-gray-200 flex-grow my-10"></div>
            <div>
              <h1 className="text-xl font-bold">Alamat Email</h1>
              <form className="flex flex-col gap-y-4 w-full my-5">
                    <div>
                        <h3 className="my-2">Email</h3>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            disabled
                            placeholder={getEmail(userId.email)}
                            className="w-full px-4 py-3 rounded-xl border-2 cursor-not-allowed"
                        />
                    </div>
                <Button variant='primary' className="max-w-[200px] w-full rounded-xl  text-sm h-12 mt-3">Simpan</Button>
                </form>
            </div>
            <div className="w-full border-t border border-gray-200 flex-grow my-10"></div>
            <div className="">
                <h1 className="text-xl font-bold">Sekolah</h1>
                <form className="flex flex-col gap-y-4 mt-4 w-full">
                    <div>
                        <h3 className="my-2">Provinsi</h3>
                        <input
                            id="provinsi"
                            name="provinsi"
                            type="text"
                            placeholder="Provinsi"
                            required
                            className="w-full px-4 py-3 rounded-xl border-2"
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
                            className="w-full px-4 py-3 rounded-xl border-2"
                        />    
                    </div>
                    <div>
                        <h3 className="my-2">Sekolah</h3>
                        <input
                            id="sekolah"
                            name="sekolah"
                            type="text"
                            placeholder="sekolah"
                            required
                            className="w-full px-4 py-3 rounded-xl border-2"
                        />    
                    </div>
                    <div>
                        <h3 className="my-2">Kelas</h3>
                        <input
                            id="kelas"
                            name="kelas"
                            type="text"
                            placeholder="Kelas"
                            required
                            className="w-full px-4 py-3 rounded-xl border-2"
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
            <ChangePassword />
        </TabsContent>
        <TabsContent value="payment">
            <div className="mt-5">
                <span>
                    <h1 className="text-xl font-bold">Payment History</h1>
                </span>
                <PaymentList 
                    orders={ordersData}
                />
            </div>
        </TabsContent>    
    </Tabs>
  );
}
