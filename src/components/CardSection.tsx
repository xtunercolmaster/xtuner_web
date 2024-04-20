import React from 'react';
import Card from './Card';
import DotTittle from './DotTittle';

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
        <DotTittle sectionTitle={sectionTitle} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
