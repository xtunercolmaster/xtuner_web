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
                <img src={imageUrl} alt="Content" className="rounded-lg h-60 w-full object-cover" />
            </div>
            <div className="p-4 text-center">
                <h3 className="font-bold text-2xl 3xl:text-3xl mb-2">{title}</h3>
                <div className="flex justify-center mb-2">
                    <div className="w-32 h-1 rounded-full bg-blur-purple"></div>
                </div>
                <p className="text-white-600 text-lg 3xl:text-xl">
                    {content}
                </p>
            </div>
        </div>

    );
};

export default Card;
