"use client"
import Dashboard from "@/app/components/dashboard/page";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session, status } = useSession();
  console.log(session)

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {status === "authenticated"  ? (
        <Dashboard session = {session.user} />
      ) : (
        <div className="flex-col flex items-center justify-center my-[40vh] gap-4">
          <h1 className="font-bold text-[25pt] text-blue-900">Welcome</h1>
          <Link className="bg-blue-300 py-1 px-3 w-[10%] rounded-[20px] text-center text-white text-[14pt]" href="/components/Login">Login</Link>
          <Link className="border py-1 px-3 w-[10%] rounded-[20px] text-center  text-[13pt] text-gray-800" href="/components/register">Sign Up</Link>
        </div>
      )}
    </div>
  );
}
