import { MdLocationPin } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    company_name,
    educational_requirements,
    job_title,
    job_type,
    location,
    remote_or_onsite,
    salary,
  } = job;
//   console.log(job);

  return (
    <div>
      <div className="card p-4 bg-purple-100 shadow-xl space-y-4">
        <figure>
          <img
            src={logo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {job_title}
            
          </h2>
          <h2 className="card-title">
          Company name:   {company_name}
            
          </h2>
          <p> <span className="text-semibold text-xl">Educational Requirements: </span> {educational_requirements} </p>
          <div className="card-actions mt-3">
            <div className="badge badge-outline">{remote_or_onsite}</div>
            <div className="badge badge-outline">{job_type}</div>
          </div>
          <div className="flex gap-5 items-center mt-3">
            <h1 className="flex items-center"><MdLocationPin className="text-2xl text-blue-500"></MdLocationPin>{location} </h1>
            <h1 className="flex"><BiDollarCircle className="text-2xl text-blue-500"></BiDollarCircle>{salary} </h1>
          </div>
          <div>
            <Link to ={`/job/${id}`}> 
            <button className="btn bg-purple-500 hover:bg-purple-700 text-white">View Details</button>
            </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
