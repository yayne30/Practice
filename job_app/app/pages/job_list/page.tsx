import React from "react";
import Card from "../../components/job_card/card";
import Link from "next/link";
import {jobs} from '@/public/data'

const JobList = async () => {
  interface job {
    id: number;
    title: string;
    description: string;
    responsibilities: string[];
    ideal_candidate: {
      age: string;
      gender: string;
    };
    traits: string[];
    when_where: string;
    about: {
      posted_on: string;
      deadline: string;
      location: string;
      start_date: string;
      end_date: string;
      categories: string[];
      required_skills: string[];
    };
    type:string
    company: string;
    image: string;
  }
  

  // const res = await fetch(
  //   "https://drive.google.com/uc?export=download&id=1QAObCWl5f0Ytc3bUHRREdNVBd4P-dO07"
  // );
  // const jobs: { job_postings: job[] } = await res.json();
  // const aa: job[] = jobs.job_postings;
  

  return (
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
      {jobs.map((job) => (
          <div className="mb-11" key={job.id}>
          <Link key={job.id} href={`pages/dashboard/${job.id}`} >
            <Card job = {job} />
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
