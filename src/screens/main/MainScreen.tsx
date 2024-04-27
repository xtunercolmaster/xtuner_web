import { Outlet, useNavigate } from 'react-router-dom';
import MenuItem, { MenuItemData } from '../../components/MenuItem';
import strings from '../../constants/strings';
import { logo1 } from '../../assets/images';

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';


const MainScreen = () => {

    const navigate = useNavigate();

    const menuData = [
        { id: 1, name: strings.home, route: "home" },
        { id: 2, name: strings.aboutUs, route: "aboutus" },
        { id: 3, name: strings.services, route: "services" },
        { id: 4, name: strings.allies, route: "allies" },
        { id: 5, name: strings.contactUs, route: "contactus" },
    ]

    const navigateToScreen = (route: string) => {
        navigate(route);
    }

    const Menu = ({ items }: { items: MenuItemData[] }) => {
        return (
            <nav className='absolute'>

                <div className="flex flex-row pt-[20px] px-[120px] items-center gap-20">
                    <img className='w-[180px] h-[48px]' src={logo1} alt="NF" />
                    <div className='flex flex-row gap-6'>
                        {items.map((item: MenuItemData) => (
                            <MenuItem
                                key={item.id}
                                item={item}
                                onClickItem={navigateToScreen} />
                        ))}
                    </div>
                    <div className="flex">
                        <a href="#facebook" className="mr-2"><FaFacebook /></a>
                        <a href="#instagram" className="mr-2"><FaInstagram /></a>
                        <a href="#twitter" className="mr-2"><FaTwitter /></a>
                        <a href="#linkedin" className="mr-2"><FaLinkedinIn /></a>
                        <a href="#youtube"><FaYoutube /></a>
                    </div>
                </div>



            </nav>
        );
    };


    return (

        <div className='flex h-full w-full'>

            <Menu items={menuData} />

            <Outlet />


        </div>

    );
};



export default MainScreen;
