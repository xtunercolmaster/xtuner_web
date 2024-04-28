import { Outlet } from 'react-router-dom';
import NavMenu from '../../components/NavMenu';
import Footer from '../../components/Footer';

const MainScreen = () => {
    return (
        <div className='flex flex-col'>
            <NavMenu />
            <Outlet />
            <Footer />
        </div>

    );
};

export default MainScreen;
