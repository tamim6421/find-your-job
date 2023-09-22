import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../../utility/localStorage";
import { MdLocationPin } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJob,setDisplayJobs] = useState([])

  const handleFilter = filter =>{
    if (filter === 'All'){
        setDisplayJobs(appliedJobs)
    }else if( filter === 'Remote'){
        const remoteJobs = appliedJobs.filter( job => job.remote_or_onsite === 'Remote')
        setDisplayJobs(remoteJobs)
    }
    else if( filter === 'Onsite'){
        const onsiteJobs = appliedJobs.filter( job => job.remote_or_onsite === 'Onsite')
        setDisplayJobs(onsiteJobs)
    }
  }

  useEffect(() => {
    const storeJobsId = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storeJobsId.includes(job.id));
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied)

    //   console.log(jobs, jobsApplied, storeJobsId);
    }
  }, [jobs]);

  console.log(jobs);
  return (
    <div>
      <h1 className="text-2xl font-semibold text-center">
        Jobs I Applied: {appliedJobs.length}
      </h1>

      <div>
                <details className="dropdown mb-10">
            <summary className="m-1 btn bg-purple-100">Filter </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-purple-100 rounded-box w-52">
                <li onClick={()=>handleFilter('All')}><a>All</a></li>
                <li onClick={()=>handleFilter('Remote')}><a>Remote </a></li>
                <li onClick={()=>handleFilter('Onsite')}><a>Onsite </a></li>
            </ul>
            </details>
      </div>

      <div>
        {displayJob.map((job) => (
          <div key={job.id}>
            <div className="card card-side bg-purple-100 m-4 shadow-xl p-5">
              <figure>
                <img src={job.logo} alt="Movie" />
              </figure>
              <div className="card-body">
                <h2 className="card-title"> Company: {job.company_name}</h2>
                <h2 className="card-title">{job.job_title}</h2>
                <div className="card-actions mt-3">
                  <div className="badge badge-outline bg-purple-400">
                    {job.remote_or_onsite}
                  </div>
                  <div className="badge badge-outline bg-purple-400">
                    {job.job_type}
                  </div>
                </div>

                <div className="flex gap-5 items-center mt-3">
                  <h1 className="flex items-center">
                    <MdLocationPin className="text-2xl text-blue-500"></MdLocationPin>
                    {job.location}{" "}
                  </h1>
                  <h1 className="flex">
                    <BiDollarCircle className="text-2xl text-blue-500"></BiDollarCircle>
                    {job.salary}{" "}
                  </h1>
                </div>
               
                
              </div>
              <div className="card-actions flex items-center ">
                  <button className="btn btn-primary">Watch</button>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
