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
  return (<div className="bg-purple-900 text-white py-12 px-4">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-8">{sectionTitle}</h2>
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
