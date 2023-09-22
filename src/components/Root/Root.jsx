
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Pages/Header/Header';

const Root = () => {
    return (
        <div className=''>
            <div className='max-w-[1200px] mx-auto'>
            <Header></Header>
            <div className='min-h-screen'>
                <Outlet></Outlet>
            </div>
            </div>
            
      
            <Footer></Footer>
        </div>
    );
};

export default Root;