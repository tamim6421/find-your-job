import { Link, useRouteError } from "react-router-dom";


const Error = () => {
    const error = useRouteError()
    return (
        <div className="flex justify-center h-screen content-center items-center">
            <div>
            <h1 className="font-bold text-2xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to='/' >
      <button className="btn my-10">back to home</button>
      </Link>
            </div>
      
        </div>
    );
};

export default Error;