import React from 'react';

interface CardProps {
    title: string;
    content: string;
    imageUrl: string;
    alt: string;
    shape: 'circle' | 'square';
    imageWidth: string;  
    imageHeight?: string;
}

const Card: React.FC<CardProps> = ({ title, content, imageUrl, alt, shape, imageWidth, imageHeight }) => {
    const imageClassName = shape === 'circle' ? 'rounded-full' : 'rounded-lg h-60 w-full';

    return (
        <div className="w-full text-white-800 p-4 flex flex-col items-center px-2">
            <div style={{ width: imageWidth, maxWidth: '100%', height: imageHeight,  }} className="mx-auto">
                <img 
                    src={imageUrl} 
                    alt={alt} 
                    className={`${imageClassName} object-cover`} 
                />
            </div>
            <div className="p-4 text-center">
                <h3 className="font-bold text-2xl 3xl:text-3xl mb-2">{title}</h3>
                <div className="flex justify-center mb-2">
                    <div className="w-32 h-1 rounded-full bg-secondary-purple"></div>
                </div>
                <p className="text-white-600 text-lg xl:text-xl 3xl:text-2xl">
                    {content}
                </p>
            </div>
        </div>
    );
};

export default Card;
