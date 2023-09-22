import user from '../../assets/user.png'
const Banner = () => {
  return (
    <div>
      <div className="hero min-h-min bg-purple-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={user}
            className="max-w-sm  rounded-lg"
          />
          <div className=' w-2/4 '>
            <h1 className="text-5xl font-bold">One Step Closer <br /> To Your Dream Job</h1>
            <p className="py-6">
            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
