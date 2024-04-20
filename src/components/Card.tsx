import React from 'react';

interface CardProps {
    title: string;
    content: string;
    imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, content, imageUrl }) => {
    return (
        <div className="w-full text-white-800 p-4 flex flex-col items-center px-2">
            <div className="w-[60%] max-w-[100%] mx-auto">
                <img src={imageUrl} alt="Content" className="rounded-t-lg h-60 w-full object-cover" />
            </div>
            <div className="p-4 text-center">
                <h3 className="font-bold text-2xl mb-2">{title}</h3>
                <p className="text-white-600 text-sm">
                    {content}
                </p>
            </div>
        </div>

    );
};

export default Card;
