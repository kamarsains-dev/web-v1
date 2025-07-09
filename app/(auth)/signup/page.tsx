import { signup } from '../actions'
import { Button } from '@/components/ui/button'
import Google from '@/public/google.svg';
import Image from "next/image";
import SignUpForm from '../_component/signup-form';

export default async function SignUpPage() { 
  return (
    <div className='container max-w-2xl min-h-screen flex flex-col justify-center items-center'>
        <div className="flex justify-center items-center text-3xl font-bold py-5">
            Sign Up
        </div>
        <div className="flex flex-col w-full items-center">
          <Button variant="default" className="w-full h-13 rounded-xl mt-3">
              <div className="flex justify-center items-center gap-x-2 my-1">
                  <Image
                      src={Google}
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
          <SignUpForm />
          <Button variant="outline" formAction={signup} className="w-full h-13 rounded-xl">
            <div className="flex justify-center items-center gap-x-2 my-1 text-[15px]">
              <p>Sign Up</p>
            </div>
          </Button>
          <div className="text-[15px] text-black text-center">
              <p>Existing user? <a href="/login" className="underline font-bold">Log In</a></p>
          </div>
          <div className="text-[9px] lg:text-[11px] flex flex-col gap-y-1 lg:gap-y-3 text-gray-400 mt-1 text-center">
              <span>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" className="underline font-bold">Privacy Policy</a> and
              <a href="https://policies.google.com/terms" className="underline font-bold"> Terms of Service</a> apply.</span>
          </div>
        </form>  
    </div>
    
  )
}