import React from 'react';
import Card from './Card';

interface CardSectionProps {
    sectionTitle: string;
    cardsData: {
        title: string;
        content: string;
        imageUrl: string;
    }[];
}

const CardSection: React.FC<CardSectionProps> = ({ sectionTitle, cardsData }) => {


    const dotsArray = new Array(12).fill(null);


    return (<div className="bg-dark-blue text-white py-12 px-4">
        <div className="max-w-screen-xl mx-auto">
            <div className='flex flex-row justify-center items-center pb-12'>
                {dotsArray.map((_, index) => (
                    <div key={index + 'left'}
                        className="w-2 h-2 bg-blur-purple rounded-full mx-1" />
                ))}
                <h2 className="text-center text-4xl font-bold px-6">{sectionTitle}</h2>
                {dotsArray.map((_, index) => (
                    <div key={index + 'right'}
                        className="w-2 h-2 bg-blur-purple rounded-full mx-1" />
                ))}

            </div>
            <div className="flex justify-center gap-8">
                {cardsData.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        content={card.content}
                        imageUrl={card.imageUrl}
                    />
                ))}
            </div>
        </div>
    </div>
    );
};

export default CardSection;
