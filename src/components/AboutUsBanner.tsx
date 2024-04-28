import { aboutUsBanner, aboutUsBackground } from '../assets/images';
import strings from '../constants/strings';

const AboutUsBanner = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:gap-20 3xl:gap-0 justify-center items-center w-full min-h-screen text-white p-8 bg-cover bg-no-repeat"
            style={{
                backgroundImage: `linear-gradient(rgba(105,38,117, 0.9), rgba(20,20,56, 0.9)), url(${aboutUsBackground})`
            }}>
            {/* Text Section */}
            <div className="flex-1 flex flex-col justify-center items-center text-center lg:items-start lg:text-left lg:px-10 lg:pt-10 3xl:px-16 3xl:pt-12">
                <h1 className="text-2xl md:text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl mb-4">{strings.aboutUsBannerTittle}</h1>
                <h2 className="text-4xl md:text-2xl lg:text-5xl 3xl:text-[70px] font-bold mb-4">{strings.aboutUsBannerSubtittle}</h2>
                <div className='w-72 h-2 rounded-full bg-custom-purple my-4' />
            </div>

            {/* Image Section */}
            <div className="mb-8 2xl:mb-0 2xl:flex-1 flex justify-center items-center w-full lg:pr-10 lg:pt-10 3xl:pr-16 3xl:pt-12">
                <div className="xl:h-90 overflow-hidden">
                    <img src={aboutUsBanner} alt={strings.altForAboutUsBanner} className="object-cover w-full h-full" />
                </div>
            </div>
        </div>
    );
};

export default AboutUsBanner;
