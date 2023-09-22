import { useEffect, useState } from "react";
import Job from "./Job/Job";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])
    const [dataLength, setDataLength] = useState(4)
    useEffect( ()=>{
        fetch('jobs.json')
        .then(res=> res.json())
        .then(data => setJobs(data))
    } ,[])
    // console.log(jobs)
    return (
        <div>
             <div className="text-center my-20">
                <h2 className="text-4xl font-semibold">Featured Jobs</h2>
                <p className="text-gray-500 mt-2 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatum? </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {
                jobs.slice(0, dataLength).map( job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length ? 'hidden': 'my-10 flex justify-center'}>
                <button
                onClick={ ()=>setDataLength(jobs.length)}
                 className="btn">Show All Jobs </button>
            </div>
        </div>
    );
};

export default FeaturedJobs;