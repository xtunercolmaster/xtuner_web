import { servicesBanner, backgroundServicesBanner } from '../assets/images';
import strings from '../constants/strings';

const ServicesBanner = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center w-full text-white p-10 lg:p-8 min-h-screen bg-cover bg-no-repeat"
            style={{
                backgroundImage: `linear-gradient(rgba(105,38,117, 0.9), rgba(20,20,56, 0.9)), url(${backgroundServicesBanner})`
            }}>
            {/* Text Section */}
            <div className="flex-1 flex flex-col justify-center items-center text-center lg:items-start lg:text-left lg:pl-[110px]">
                <h1 className="text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl mb-4">{strings.ServicesBannerTittle}</h1>
                <h2 className="text-4xl md:text-2xl lg:text-5xl 2xl:text-6xl 3xl:text-[70px] font-bold mb-4">{strings.ServicesBannerSubtittle}</h2>
                <div className='w-72 h-2 rounded-full bg-secondary-purple my-4' />                
            </div>

            {/* Image Section */}
            <div className="w-[400px] h-[400px] xl:w-[500px] xl:h-[500px] 2xl:w-[700px] 2xl:h-[700px] 3xl:w-[800px] 3xl:h-[800px] relative overflow-hidden mt-4 lg:mt-0 3xl:mr-22 4xl:mr-40">
                <div
                    className="absolute top-0 left-0 w-full h-full bg-secondary-purple opacity-50 rounded-full z-0"
                    style={{ clipPath: 'circle(35% at 50% 60%)' }}
                ></div>
                <img src={servicesBanner} alt={strings.altForServicesBanner} className="absolute object-cover w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" />
            </div>
        </div>
    );
};

export default ServicesBanner;
