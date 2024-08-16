"use client"
import React from 'react'
import { useGetAllOpportunititesQuery } from "@/app/redux/service/dummy"
import Link from 'next/link';
import Card from '@/app/components/job_card/card';
const Products = () => {
  
    const {data:responseData, isError, isFetching, isLoading, isSuccess} = useGetAllOpportunititesQuery({})
   
  return (

    <div>
    {isFetching ? (
      <div className="flex items-center justify-center min-h-screen">
                <p className="text-center text-3xl font-bold">Loading...</p>

        </div>
    ) : isError ? (
      <div className="flex items-center justify-center min-h-screen">
      <p className="text-center text-3xl font-bold">Loading...</p>

</div>
    ) : isSuccess ? (

        <div className="py-10 pl-52 pr-72 h-[100%] text-custom-blue">
        <div className="flex justify-between mb-8">
          <div>
            <h1 className="font-bold text-[22pt]">Opportunities</h1>
            <p className="text-[10pt] text-gray-400">Showing 73 results</p>
          </div>
          <div className="pt-5 flex">
            <p className="text-[10pt] text-gray-400 inline  mt-3">Sort by:</p>
            <select className="text-[10pt]">
              <option>Most relevant</option>
            </select>
          </div>
        </div>
       
        
        <div>
            {responseData.data.map((job:any) => (
          <div className="mb-11">
          <Link key={job.id} href={`pages/dashboard/${job.id}`} >
            <Card job = {job} />
          </Link>
          </div>
        ))}
           {responseData.data.map((t:any) => t.title)}
          
        </div>
        </div>
    ) : null}
</div>
  )
}

export default Products