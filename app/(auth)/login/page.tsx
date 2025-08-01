import { login, signInWithGoogle } from '../actions'
import { Button } from '@/components/ui/button'
import GoogleLogo from '@/public/google.svg';
import Image from "next/image";

export default function LoginPage() { 
  return (
    <div className='container max-w-2xl min-h-screen flex flex-col justify-center items-center'>
        <div className="flex justify-center items-center text-3xl font-bold py-5">
          Log In
        </div>
        <div className="flex flex-col w-full items-center">
          <Button variant="default" onClick={signInWithGoogle} className="w-full h-13 rounded-xl mt-3">
              <div className="flex justify-center items-center gap-x-2 my-1">
                  <Image
                      src={GoogleLogo}
                      alt="google-icon"
                      width={23}
                      height={23}
                  />
                  
              </div>
          </Button>
          <div className='flex w-full items-center mt-4'>
            <div className="w-full border-t border border-gray-100 flex-grow"></div>
            <div className="px-3 text-gray-400 font-medium text-sm">OR</div>
            <div className="w-full border-t border border-gray-100 flex-grow"></div>  
          </div> 
          
        </div>
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
            <div className="flex justify-center items-center gap-x-2 my-1 text-[15px]">
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
    </div>
    
  )
}