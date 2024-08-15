"use client";
import React from "react";

import { useGetOpporunityByIdQuery } from "@/app/redux/service/dummy";

interface Params {
  jobid: string;
}

export default function JobDetails({ params }: { params: Params }) {

  const {data , isError , isFetching ,isSuccess , isLoading} = useGetOpporunityByIdQuery(params.jobid)
 
  const one_job = isSuccess
    ? data.data
    : null;
  return (
    <div>
      {isFetching ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error occurred while fetching data.</p>
      ) : isSuccess ? (
        <div className="flex gap-11 text-custom-blue ">
          <div className="w-[70%] mt-16 ml-28 ">
            <div className="mb-9">
              <h1 className="font-bold text-[22px] mb-3 text-custom-blue">
                {" "}
                Description
              </h1>
              <p className="text-custom-blue text-[14px]">
                {" "}
                {one_job?.description}
              </p>
            </div>
            <div className="mb-9">
              <h1 className="font-bold text-[22px] mb-3 text-custom-blue">
                {" "}
                Responsibilities{" "}
              </h1>
              <p className="flex mb-2 text-custom-blue text-[14px]"> {one_job.responsibilities}</p>
            </div>
            <div className="mb-6">
              <h1 className="font-bold text-[22px] mb-3 text-custom-blue">
                {" "}
                Ideal Candidate we want{" "}
              </h1>
              <p> {one_job.idealCandidate}</p>
             
            </div>
            <div className="mb-9">
              <h1 className="font-bold text-[22px] mb-3 text-custom-blue ">
                {" "}
                When & where{" "}
              </h1>
              <div className="flex">
                
                 <img src="images/location.png" />
                <p className=" text-custom-blue text-[14px] mt-2 ml-3">
                  {one_job.whenAndWhere}{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="w-[20%] mt-8 mr-24">
            <div>
              <h1 className="font-bold text-[22px] mb-3 text-custom-blue">
                {" "}
                About{" "}
              </h1>
              <div className="text-[14px] flex gap-3 mb-4">
                <div>
                  
                </div>

                <div className="flex">
                  <img src="public/images/deadline.png"/>
                  <div>
                  <p> Posted on</p>
                  <p> {one_job?.datePosted}</p>
                  </div>
                </div>
              </div>
              <div className="flex text-[14px] gap-3 mb-4">
                <div>
                 
                </div>

                <div className="flex">
                <img src="public/images/deadline.png"/>
                <div>
                  <p> Deadline</p>
                  <p> {one_job?.deadline}</p>
                  </div>
                </div>
              </div>

              <div className="flex text-[14px] gap-3 mb-4">
                <div>
                 
                </div>

                <div className="flex">
                  <img src="public/images/deadline.png" />
                  <div>
                  <p> Location </p>
                  <p> {one_job?.location}</p>
                  </div>
                </div>
              </div>
              <div className="flex text-[14px] gap-3 mb-4">
                <div>

                </div>

                <div className="flex">
                  <img src="public/images/deadline.png"/>
                  <div>
                  <p> Start Date</p>
                  <p> {one_job?.startDate}</p>
                  </div>
                </div>
              </div>
              <div className="flex text-[14px] gap-3 mb-4">
                <div>
                  
                </div>

                <div className="flex">
                  <img src="public/images/deadline.png" />
                  <div>
                  <p> End Date</p>
                  <p> {one_job?.endDate}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <h1 className="font-bold text-[22px] mb-3 text-custom-blue">
                {" "}
                Categories{" "}
              </h1>
              <div className="flex gap-4">
          {one_job?.categories.map(
              (cat:string , index:number) => <p key={index} className="bg-green-100 px-3 py-2 rounded-3xl text-[8pt] text-green-700 font-bold">{cat}</p>
            )}
        
          </div>
            </div>
            <div>
              <h1 className="font-bold text-[22px] mb-3 text-custom-blue">
                {" "}
                Required Skills{" "}
              </h1>
              <div className="flex-wrap" >
            {one_job?.requiredSkills.map(
              (skill:string , index:number) => 
                <div key = {index} className="bg-gray-100 m-2 p-2 w-max h-max text-[14px] rounded-md"> 
                 {skill}
                  </div>
              
            )}
          </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
