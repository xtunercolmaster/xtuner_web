import { useEffect, useState } from 'react';
import { banner1, banner2, banner3, backgroundServicesBanner } from '../assets/images';
import strings from '../constants/strings';

const bannerImages = [banner1, banner2, banner3];

const ServicesBanner = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % bannerImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center w-full overflow-hidden text-white px-5 pt-28 pb-10 lg:p-8 min-h-screen bg-cover bg-no-repeat"
            style={{
                backgroundImage: `linear-gradient(rgba(105,38,117, 0.9), rgba(20,20,56, 0.9)), url(${backgroundServicesBanner})`
            }}>
            {/* Text Section */}
            <div className="flex-1 flex flex-col justify-center items-center text-center lg:items-start lg:text-left lg:pl-[110px] w-full max-w-md lg:max-w-none">
                <h1 className="text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl mb-4">{strings.ServicesBannerTittle}</h1>
                <h2 className="text-4xl md:text-2xl lg:text-5xl 2xl:text-6xl 3xl:text-[70px] font-bold mb-4">{strings.ServicesBannerSubtittle}</h2>
                <div className='w-full max-w-72 h-2 rounded-full bg-secondary-purple my-4' />
            </div>

            {/* Image Section */}
            <div className="w-full max-w-[360px] aspect-square lg:w-[550px] lg:h-[550px] lg:max-w-none xl:w-[700px] xl:h-[700px] 2xl:w-[900px] 2xl:h-[900px] 3xl:w-[1100px] 3xl:h-[1100px] relative overflow-hidden mt-4 lg:mt-0 lg:self-end -mb-10 lg:-mb-8 3xl:mr-22 4xl:mr-40">
                <div
                    className="absolute top-0 left-0 w-full h-full bg-secondary-purple opacity-50 rounded-full z-0"
                    style={{ clipPath: 'circle(35% at 50% 60%)' }}
                ></div>
                {bannerImages.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={strings.altForServicesBanner}
                        className={`absolute object-cover object-bottom w-full h-full bottom-0 left-1/2 transform -translate-x-1/2 z-10 transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
                    />
                ))}
                <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-dark-blue to-transparent z-20" />
            </div>
        </div>
    );
};

export default ServicesBanner;
