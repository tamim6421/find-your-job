import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplications } from "../../../utility/localStorage";



const JobDetails = () => {
    
  const jobs = useLoaderData();
  const {id} = useParams();
  const idInt = parseInt(id);
  const job = jobs.find(job => job.id === idInt);

  console.log(job, idInt);

  const handleApplyJob = () =>{
    saveJobApplications(idInt)
    toast ("apply successful")
  }



  return (
    <div>
      <div className="flex justify-center mt-20">
        <h1 className="text-3xl font-semibold"> Jobs Details</h1>
      </div>
      <hr className="border border-purple-700" />

      <div className=" w-[75%] mx-auto min-h-screen items-center grid gap-4 md:grid-cols-4">
        <div className="border md:col-span-3">
          <div className="py-2 shadow-lg bg-purple-100 p-5 space-y-3">
            <h1> Compony : {job.company_name} </h1>
            <h1 className="font-semibold">Job Title : {job.job_title} </h1>
            <h1>
              <span className="text-2xl font-semibold">
                Job Description :
              </span>
              {job.job_description}
            </h1>
            <p>
              <span className="text-2xl font-semibold">
                Job Responsibility
              </span>
              {job.job_responsibility}
            </p>
            <p> Educational Requirements:</p>
            <p> {job.educational_requirements} </p>
            <p> Experiences :</p>
            <p> {job.experiences} </p>
          </div>
        </div>

        <div className="border md:col-span-1 p-3 space-y-3 bg-purple-200 shadow-lg">
            <h2 className="font-bold border-b-2 border-purple-700">Details</h2>
            <p>Salary :  {job.salary}</p>
            <p>Job Title: {job.job_title} </p>
            <h1 className="font-bold border-b-2 border-purple-600"> Contract Information </h1>
           <p> Address : {job.contact_information.address} </p>
           <p> Email : {job.contact_information.email} </p>
           <p> Phone : {job.contact_information.phone} </p>
           <div>

            <button  
            onClick={handleApplyJob}
            className="btn bg-purple-500 hover:bg-purple-700 text-white">
                Apply Now
            </button>
            <Link to ='/'>
            <button className=" btn bg-purple-500 hover:bg-purple-700 text-white"> Back </button>
            </Link>
           

           </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
