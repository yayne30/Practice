import Image from "next/image";
import Card from './components/job_card/card'
import JobList from "./pages/job_list/page";

export default function Home() {
  return (
    <main >
    {/* <Card /> */}
    <JobList />
    </main>
  );
}
