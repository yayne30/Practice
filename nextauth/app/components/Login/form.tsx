'use client';
import { signIn } from 'next-auth/react';
import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Form: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false); 
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true); 
        setError(null); 
        const result = await signIn('akil_login', {
            email,
            password,
            redirect: false,
        });

        setLoading(false); 

        if (result?.error) {
            setError("Check your email or password");
        } else {
            router.push("/");
        }
    };

    const handleGoogleSignin = () => {
        signIn("google", { callbackUrl: "/" });
    };

    return (
        <div className='bg-white h-screen flex items-center gap-20'>
            <div className='w-[40%] bg-slate-400 ml-20'>
                <img className='h-full w-full' src='/images/girl.jpg' />
            </div>
            <div className='w-1/3 bg-white flex flex-col px-14 py-5 my-7'>
                <h1 className='text-center text-[16pt] font-extrabold mb-3'>Welcome Back,</h1>
                <div className='flex flex-col gap-4'>
                    <div className='border border-gray-300 px-16 py-2 text-[9pt] text-center flex gap-3'>
                        <img src='/images/google.png' className='w-3 h-3' />
                        <button onClick={handleGoogleSignin} disabled={loading}>Sign Up with Google</button>
                    </div>
                    <div className="flex items-center">
                        <hr className="w-[30%] border-gray-300" />
                        <p className="w-[45%] text-gray-600 text-[8pt] mx-3">Or Sign Up with Email</p>
                        <hr className="w-[30%] border-gray-300" />
                    </div>
                </div>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                <form onSubmit={handleSubmit} className='flex flex-col gap-2 mt-6'>
                    <label className='text-gray-700 font-bold text-[9pt]'>Email Address</label>
                    <input 
                        name='email' 
                        onChange={(e) => setEmail(e.target.value)} 
                        className='border border-gray-300 p-2 px-2 text-[9pt] rounded-[4pt] focus:bg-white' 
                        type='email' 
                        placeholder='Enter email address' 
                        disabled={loading} // Disable input while loading
                    />

                    <label className='text-gray-700 text-[9pt] font-bold'>Password</label>
                    <input 
                        name='password' 
                        onChange={(e) => setPassword(e.target.value)} 
                        className='border border-gray-300 p-2 px-2 text-[9pt] rounded-[4pt]' 
                        type='password' 
                        placeholder='Enter password' 
                        disabled={loading} 
                    />

                    <button 
                        className='bg-blue-900 rounded-[50px] p-2 text-[9pt] mt-4 text-white' 
                        type='submit' 
                        disabled={loading}
                    >
                        {loading ? 'Loading...' : 'Login'}
                    </button>
                </form>
                <div className='flex gap-1 text-[9pt] mt-3'>
                    <p>Don't have an account?</p>
                    <Link href ={"/components/register"} className='text-blue-900 font-bold'>Sign Up</Link>
                </div>
            </div>
        </div>
    );
}

export default Form;
