import React, { useState } from 'react';


export interface MenuItemData {
    id: number;
    name: string;
    route: string;
    isSelected: boolean;
}

interface MenuItemProps {
    item: MenuItemData;
    onClickItem: (route: string) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, onClickItem }) => {

    // const [isSelected, setIsSelected] = useState(true);

    const handleOnClickItem = (item: MenuItemData) => {

        if (item.route) {
            onClickItem(item.route);
        }
    };

    return (
        <button className='' onClick={() => handleOnClickItem(item)}>
            <div className='flex flex-col gap-[8px]'>
                <p className="text-xl font-normal text-white">{item.name}</p>
                {item.isSelected && <div className='w-full h-[4px] bg-secondary-purple rounded' />}
            </div>
        </button>
    );
};

export default MenuItem;