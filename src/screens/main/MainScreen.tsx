import { Outlet, useNavigate } from 'react-router-dom';
import NavMenu from '../../components/NavMenu';

const MainScreen = () => {
    return (
        <div className='flex h-full w-full'>
            <NavMenu />
            <Outlet />
        </div>

    );
};



export default MainScreen;
