import React from "react";

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


interface CardProps {
  job: Job;
}

const Card: React.FC<CardProps> = ({ job }) => {
  

  
  return (
    <div className=" w-full h-max flex gap-[5%] py-[2%] px-10 border-[1.5px] border-gray-200 rounded-2xl">
      <div className=" w-[10%] h-[59px]  ">
      <img src={job.logoUrl}/>
      </div>
      <div className="flex-col  w-[90%]">
        <div className="font-bold pb-2 text-[12pt]">{job.title}</div>
        <div className="flex pb-2">
          <p className="text-gray-500 text-[10pt] mr-2">{job.orgName}</p>
          <div className="bg-gray-500 h-1 w-1 rounded-full mt-[10px] mr-[5px] m-0">  </div>
          <p className="text-gray-500 text-[10pt]">{job.location}</p>
        </div>
        <div  className="pb-2">
          <p className=" text-[10pt] text-justify">
            {job.description}
         
          </p>
        </div>
        <div className="flex gap-[10px]">
          <button className="bg-green-100 px-3 py-1 rounded-3xl text-[8pt] text-green-700 font-bold">In Person 1</button>
          <div className="border-[1px] border-gray-300 h-20px"></div> 
          <button className=" px-3 py-1 border-[1px] border-yellow-400 rounded-3xl text-[8pt] text-yellow-400 font-bold">Education</button>
          <button className="  py-1 border-[1px]  border-blue-900 rounded-3xl text-[8pt]  font-bold px-5">IT</button>        </div>
      </div>
    </div>
  );
};

export default Card;
