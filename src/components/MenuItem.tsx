import React from 'react';


export interface MenuItemData {
    id: number;
    name: string;
    route: string;
}

interface MenuItemProps {
    item: MenuItemData;
    onClickItem: (route: string) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, onClickItem }) => {


    const handleOnClickItem = (item: MenuItemData) => {

        if (item.route) {
            onClickItem(item.route);
        }
    };

    return (
        <div>
            <button className='w-full flex flex-row justify-between items-center' onClick={() => handleOnClickItem(item)}>
                <p className="text-xl font-normal text-white">{item.name}</p>
            </button>
        </div>
    );
};

export default MenuItem;