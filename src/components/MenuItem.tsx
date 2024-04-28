import React from 'react';


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

    const handleOnClickItem = (item: MenuItemData) => {

        if (item.route) {
            onClickItem(item.route);
        }
    };

    return (
        <button className='' onClick={() => handleOnClickItem(item)}>
            <div className='flex flex-col gap-[8px]'>
                <p className={`text-xl text-left text-white ${item.isSelected ? 'font-bold' : 'font-normal'}`}>{item.name}</p>
                {item.isSelected && <div className='hidden md:flex w-full md:h-[4px] bg-secondary-purple rounded' />}
            </div>
        </button>
    );
};

export default MenuItem;