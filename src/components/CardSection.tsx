import React from 'react';
import Card from './Card';
import DotTittle from './DotTittle';

interface CardSectionProps {
    sectionTitle: string;
    cardsData: {
        title: string;
        content: string;
        imageUrl: string;
        alt: string;
        shape: 'square' | 'circle';
        imageWidth: string;
    }[];
    paragraphText?: string;
}

const CardSection: React.FC<CardSectionProps> = ({ sectionTitle, cardsData, paragraphText }) => {
    return (
        <div className="bg-dark-blue text-white py-12 px-4">
            <div className="max-w-screen-xl mx-auto">
                {paragraphText && (
                    <div className="justify-center items-center text-center">
                        <p className="text-white-600 text-lg xl:text-xl 3xl:text-2xl xl:mx-24 mb-14">{paragraphText}</p>
                    </div>
                )}
                <DotTittle sectionTitle={sectionTitle} />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cardsData.map((card, index) => (
                        <Card
                            key={index}
                            title={card.title}
                            content={card.content}
                            imageUrl={card.imageUrl}
                            alt={card.alt}
                            shape={card.shape}
                            imageWidth={card.imageWidth}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardSection;
