
import { createBrowserRouter } from 'react-router-dom';
import Root from '../components/Root/Root';
import Home from '../components/Pages/Home/Home';
import AppliedJobs from '../components/Pages/AppliedJobs/AppliedJobs';
import Blog from '../components/Pages/Blog/Blog';
import Error from '../components/Error/Error';
import JobDetails from '../components/FeaturedJobs/JobDetails/JobDetails';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/applied',
                element:<AppliedJobs></AppliedJobs>,
                loader: () => fetch('jobs.json')
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/job/:id',
                element:<JobDetails></JobDetails>,
                loader:()=> fetch('../jobs.json')
            }
        ]
    }
])
export default router;