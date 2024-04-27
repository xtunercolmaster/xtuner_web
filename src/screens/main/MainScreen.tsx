import { Outlet, useNavigate } from 'react-router-dom';
import MenuItem, { MenuItemData } from '../../components/MenuItem';



const MainScreen = () => {

    const navigate = useNavigate();


    const menuData = [
        { id: 1, name: "Inicio", route: "home" },
        { id: 2, name: "Quienes somos", route: "aboutus" },
        { id: 3, name: "Servicios", route: "services" },
        { id: 4, name: "Aliados", route: "allies" },
        { id: 5, name: "Contactanos", route: "contactus" },
    ]

    const navigateToScreen = (route: string) => {
        navigate(route);
    }


    const Menu = ({ items }: { items: MenuItemData[] }) => {
        return (
            <nav className='absolute'>
                <div className='flex flex-row gap-6'>
                    {items.map((item: MenuItemData) => (
                        <MenuItem
                            key={item.id}
                            item={item}
                            onClickItem={navigateToScreen} />
                    ))}
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
