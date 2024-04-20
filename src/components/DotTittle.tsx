import React from 'react';

interface TitleSectionProps {
    sectionTitle: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ sectionTitle }) => {
    const dotsArray = new Array(12).fill(null);

    return (
        <div className='flex flex-row justify-center items-center pb-12'>
            {dotsArray.map((_, index) => (
                <div key={index + 'left'} className="w-2 h-2 bg-blur-purple rounded-full mx-1" />
            ))}
            <h2 className="text-center text-4xl font-bold px-6">{sectionTitle}</h2>
            {dotsArray.map((_, index) => (
                <div key={index + 'right'} className="w-2 h-2 bg-blur-purple rounded-full mx-1" />
            ))}
        </div>
    );
};

export default TitleSection;
