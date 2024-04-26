// ServicesSection component with image and text sections displayed next to each other for larger screens
import React from 'react';
import { serviceImg } from '../assets/images';
import DotTittle from './DotTittle';

interface ServicesSectionProps {
    sectionTitle: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ sectionTitle }) => {
    return (
        <div className="flex flex-col w-full text-white p-8 bg-cover bg-no-repeat bg-dark-blue">

            {/* Title */}
            <div className="w-full text-center mt-12 mb-6">
                <DotTittle sectionTitle={sectionTitle} />
            </div>

            {/* Content Section */}
            <div className="flex flex-col lg:flex-row justify-center items-center w-full">

                {/* Image Section */}
                <div className="lg:ml-32 xl:ml-32 mb-8 2xl:mb-0 2xl:flex-1 flex justify-center items-center">
                    <div className="w-[200px] h-[200px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] 2xl:w-[500px] 2xl:h-[500px] rounded-full overflow-hidden">
                        <img src={serviceImg} alt="service image" className="object-cover w-full h-full" />
                    </div>
                </div>

                {/* Text Section */}
                <div className="flex-1 flex flex-col justify-center items-center text-center lg:items-start lg:text-left lg:pl-[110px]">
                    <h1 className="text-3xl md:text-3xl lg:text-4xl mb-8">Más acerca de los tuyos</h1>
                    <p className="mb-6 text-sm lg:text-base 2xl:text-lg max-w-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet faucibus ipsum sit lacus pulvinar libero pretium. Odio facilisis diam quam donec ipsum. Augue bibendum pellentesque consequat cursus ac.
                    </p>
                    <button className="text-xl bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out w-48 h-14">
                        Conoce mas
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;