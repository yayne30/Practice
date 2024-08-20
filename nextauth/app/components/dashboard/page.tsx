import { signOut } from 'next-auth/react'
import React from 'react'


const Dashboard = ({ session }: { session: any }) =>  {


    return (
    <div className='flex flex-col justify-center items-center my-[40vh] gap-3'>

      <h1> Welcome back </h1>

      <button className="bg-blue-500 hover:bg-blue-700 px-4 rounded-[20px] py-2 text-white" onClick={() => signOut({callbackUrl:'/'})}> Sign Out</button>

    </div>
  )
}

export default Dashboard