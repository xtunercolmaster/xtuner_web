import React from 'react'; 
import {backgroundAboutUsSection } from '../assets/images';

interface AboutUsSectionProps {
    title: string;
    content: string;
    imageUrl: string;
    background: boolean;
    reverse: boolean;
}

const AboutUsSection: React.FC<AboutUsSectionProps> =  ({title, content, imageUrl, background = false, reverse = false}) => {
    const dotsArray = new Array(12).fill(null);
    const flexDirectionClass = reverse ? 'lg:flex-row-reverse' : 'lg:flex-row';
    const paddingContent = reverse ? 'xl:pr-20 3xl:pr-28' : 'xl:pl-20 3xl:pl-28';

    return (
    <div className={`flex flex-col ${flexDirectionClass} justify-center items-center w-full min-h-screen text-white p-8 bg-cover bg-no-repeat bg-dark-blue`}
    style={{
        backgroundImage: background ? `linear-gradient(rgba(105,38,117, 0.9), rgba(20,20,56, 0.9)), url(${backgroundAboutUsSection})` : 'none'
    }}>        
        {/* Text Section */}
        <div className={`flex-1 flex flex-col justify-center items-center text-center lg:items-start lg:text-left ${paddingContent}`}>
            <h1 className="text-2xl md:text-2xl lg:text-4xl 3xl:text-5xl font-semibold">{title}</h1>
            <div className='flex flex-row justify-center items-center py-8 3xl:py-10'>
                {dotsArray.map((_, index) => (
                    <div key={index + 'dot'} className="w-2 h-2 bg-blur-purple rounded-full mx-1" />
                ))}
            </div>
            <p className="mb-8 text-sm lg:text-3xl 3xl:text-4xl !leading-10">
                {content}
            </p>
        </div>

        {/* Image Section */}
        <div className="mb-8 2xl:mb-0 2xl:flex-1 flex justify-center items-center">
            <div className="xl:h-90 overflow-hidden">
                <img src={imageUrl} alt="About Us" className="object-cover h-[500px] aspect-square rounded-lg" />
            </div>
        </div>
    </div>
    );
};

    export default AboutUsSection;
