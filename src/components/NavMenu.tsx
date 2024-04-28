import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";

import { logo1 } from '../assets/images';
import MenuItem, { MenuItemData } from './MenuItem';
import strings from '../constants/strings';


interface NavMenuProps { }

const NavMenu: React.FC<NavMenuProps> = ({ }) => {

    const navigate = useNavigate();
    const location = useLocation();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [menuData, setMenuData] = useState([
        { id: 1, name: strings.home, route: "home", isSelected: true },
        { id: 2, name: strings.aboutUs, route: "aboutus", isSelected: false },
        { id: 3, name: strings.services, route: "services", isSelected: false },
        { id: 4, name: strings.allies, route: "allies", isSelected: false },
        { id: 5, name: strings.contactUs, route: "contactus", isSelected: false },
    ]);

    const updateMenuSelection = (currentRoute: string) => {
        let updatedMenuData = menuData.map(item => ({
            ...item,
            isSelected: item.route === currentRoute
        }));

        const isAnySelected = updatedMenuData.some(item => item.isSelected);
        if (!isAnySelected) {
            updatedMenuData = updatedMenuData.map(item => ({
                ...item,
                isSelected: item.route === "home"
            }));
        }

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


    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };


    return (

        <nav className='absolute w-full bg-gradient-to-b from-dark-blue to-transparent'>
            <div className="flex flex-wrap justify-between items-center px-4 py-3 md:px-10 lg:px-16 xl:px-32">
                <img className='w-36 md:w-44 lg:w-52' src={logo1} alt="NF" />

                <div className='flex items-center gap-4 md:gap-6 lg:gap-20'>
                    <div className='hidden md:flex flex-row gap-2 md:gap-4 lg:gap-6'>
                        {menuData.map((item: MenuItemData) => (
                            <MenuItem
                                key={item.id}
                                item={item}
                                onClickItem={() => navigateToScreen(item.route)} />
                        ))}
                    </div>

                    <div className="flex gap-2 md:gap-3 lg:gap-4 text-base md:text-sm lg:text-base xl:text-3xl 3xl:text-4xl text-white">
                        <a href="https://www.facebook.com/" target='blank'><FaFacebook /></a>
                        <a href="https://www.instagram.com/" target='blank'><FaInstagram /></a>
                        <a href="https://twitter.com/" target='blank'><FaTwitter /></a>
                        <a href="https://www.linkedin.com/" target='blank'><FaLinkedinIn /></a>
                        <a href="https://www.youtube.com/" target='blank'><FaYoutube /></a>
                    </div>
                </div>

                <button className="md:hidden text-2xl text-white" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <IoCloseCircleOutline /> : <MdOutlineMenu />}
                </button>

            </div>
            {isMobileMenuOpen && (
                <div className='relative w-full'>
                    <div className='flex flex-col gap-4 p-4 md:hidden bg-gradient-to-b from-transparent to-dark-blue '>
                        {menuData.map((item: MenuItemData) => (
                            <MenuItem
                                key={item.id}
                                item={item}
                                onClickItem={() => {
                                    navigateToScreen(item.route);
                                    toggleMobileMenu();
                                }}
                            />
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavMenu;