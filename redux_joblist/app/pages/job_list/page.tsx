"use client"
import React from 'react'
import { useGetAllOpportunititesQuery } from "@/app/redux/service/dummy"
import Link from 'next/link';
import Card from '@/app/components/job_card/card';
const Products = () => {
    interface Job {
        id: string,
        title:string,
        description:string;
        responsibilities:string,
        requirements:string,
        idealCandidate:string,
        categories:string[],
        opType:string,
        startDate:string,
        endDate:string,
        deadling:string,
        location:string[],
        requiredSkills:string[],
        whenAndWhere: string,
        orgID: string,
        datePosted:string,
        status:string,
        applicantsCount:number,
        viewsCount:number,
        orgName:string,
        logoUrl:string,
        isBookmarked:string,
        isRolling:boolean,
        questions:string,
        perksAndBenefits:string,
        createdAt:string,
        updatedAt:string,
        orgPrimaryPhone:string,
        orgEmail:string,
        average_rating:number,
        total_reviews:number
   
       }
    const {data:responseData, isError, isFetching, isLoading, isSuccess} = useGetAllOpportunititesQuery({})
   
  return (

    <div>
    {isFetching ? (
        <p>Loading...</p>
    ) : isError ? (
        <p>Error occurred while fetching data.</p>
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
           {responseData.data.map((t:Job) => t.title)}
          
        </div>
        </div>
    ) : null}
</div>
  )
}

export default Products