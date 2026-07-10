import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";

import { logo1 } from '../assets/images';
import MenuItem, { MenuItemData } from './MenuItem';
import { externalUrls, menuList } from '../constants/data';

const NavMenu = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [menuData, setMenuData] = useState(menuList);

    const updateMenuSelection = useCallback((currentRoute: string) => {
        setMenuData(prevMenuData => {
            let updatedMenuData = prevMenuData.map(item => ({
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

            return updatedMenuData;
        });
    }, []);

    useEffect(() => {
        const currentRoute = location.pathname.substring(1);
        updateMenuSelection(currentRoute);
    }, [location.pathname, updateMenuSelection]);

    const navigateToScreen = (route: string) => {
        updateMenuSelection(route);
        navigate(route);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (

        <nav className={`absolute w-full ${isMobileMenuOpen ? 'bg-dark-blue' : 'bg-gradient-to-b from-dark-blue to-transparent'} md:bg-gradient-to-b md:from-dark-blue md:to-transparent`}>
            <div className="flex flex-wrap justify-between items-center px-4 py-3 md:px-10 lg:px-16 xl:px-32">
                <img className='w-36 md:w-44 lg:w-52' src={logo1} alt="NF" />

                <div className='flex items-center gap-3 md:gap-6 lg:gap-20'>
                    <div className='hidden md:flex flex-row gap-2 md:gap-4 lg:gap-6'>
                        {menuData.map((item: MenuItemData) => (
                            <MenuItem
                                key={item.id}
                                item={item}
                                onClickItem={() => navigateToScreen(item.route)} />
                        ))}
                    </div>

                    <div className="flex gap-2 md:gap-3 lg:gap-4 text-3xl md:text-sm lg:text-base xl:text-3xl 3xl:text-4xl text-white">
                        <a href={externalUrls.facebook} target='blank'><FaFacebook /></a>
                        <a href={externalUrls.instagram} target='blank'><FaInstagram /></a>
                    </div>

                    <button className="md:hidden text-[42px] text-white" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <IoCloseCircleOutline /> : <MdOutlineMenu />}
                    </button>
                </div>

            </div>
            {isMobileMenuOpen && (
                <div className='relative w-full bg-dark-blue'>
                    <div className='flex flex-col items-center gap-6 px-4 py-6 md:hidden bg-dark-blue'>
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
