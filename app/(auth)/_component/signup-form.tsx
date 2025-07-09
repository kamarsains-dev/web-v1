'use client'

import { Eye, EyeClosed } from 'lucide-react';
import { useState } from 'react';

const SignUpForm = () => {
    const [show , setShow] =  useState(false);  

    const TogglePassword = () => {
      setShow(!show)
    }

    return (
        <div className='flex flex-col gap-y-4 mt-4 w-full'>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded-xl border-2"
          />
          <div className='flex justify-end items-center'>
            <input
                id="password"
                name="password"
                type={ show ? "password" : ""}
                placeholder="Password"
                required
                className="w-full px-4 py-3 rounded-xl border-2"
            /> 
            <div onClick={TogglePassword} className='absolute px-4'>
                {show? <EyeClosed color='#949494'/> : <Eye  color='#949494'/> }
            </div>  
          </div>
                
        </div>
    )
}

export default SignUpForm;