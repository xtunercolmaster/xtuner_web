import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { logo1 } from '../assets/images';
import MenuItem, { MenuItemData } from './MenuItem';
import strings from '../constants/strings';


interface NavMenuProps { }

const NavMenu: React.FC<NavMenuProps> = ({ }) => {

    const navigate = useNavigate();
    const location = useLocation();

    const [menuData, setMenuData] = useState([
        { id: 1, name: strings.home, route: "home", isSelected: true },
        { id: 2, name: strings.aboutUs, route: "aboutus", isSelected: false },
        { id: 3, name: strings.services, route: "services", isSelected: false },
        { id: 4, name: strings.allies, route: "allies", isSelected: false },
        { id: 5, name: strings.contactUs, route: "contactus", isSelected: false },
    ]);

    const updateMenuSelection = (currentRoute: string) => {
        const updatedMenuData = menuData.map(item => ({
            ...item,
            isSelected: item.route === currentRoute
        }));
        setMenuData(updatedMenuData);
    };

    useEffect(() => {
        const currentRoute = location.pathname.substring(1);
        updateMenuSelection(currentRoute);
    }, [location.pathname]);

    const navigateToScreen = (route: string) => {
        updateMenuSelection(route);
        navigate(route);
    };


    return (
        <nav className='absolute'>

            <div className="flex flex-row w-screen pt-[20px] px-[120px] items-center justify-between">
                <img className='w-[180px] h-[48px]' src={logo1} alt="NF" />
                <div className='flex flex-row gap-20 items-center'>
                    <div className='flex flex-row gap-10 items-center'>
                        {menuData.map((item: MenuItemData) => (
                            <MenuItem
                                key={item.id}
                                item={item}
                                onClickItem={navigateToScreen} />
                        ))}
                    </div>
                    <div className="flex flex-row gap-6 items-center">
                        <a href="https://www.facebook.com/" className="text-white xl:text-lg 3xl:text-4xl"><FaFacebook /></a>
                        <a href="https://www.instagram.com/" className="text-white xl:text-lg 3xl:text-4xl"><FaInstagram /></a>
                        <a href="https://twitter.com/" className="text-white xl:text-lg 3xl:text-4xl"><FaTwitter /></a>
                        <a href="https://www.linkedin.com/" className="text-white xl:text-lg 3xl:text-4xl"><FaLinkedinIn /></a>
                        <a href="https://www.youtube.com/" className="text-white xl:text-lg 3xl:text-4xl"><FaYoutube /></a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavMenu;