import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { banner1, banner2, banner3, backgroundBanner } from '../assets/images';
import strings from '../constants/strings';

const bannerImages = [banner1, banner2, banner3];

const Banner = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  const goToServices = () => {
    navigate('/services');
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bannerImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center w-full text-white p-10 lg:p-8 min-h-screen bg-cover bg-no-repeat" style={{ backgroundImage: `url(${backgroundBanner})` }}>
      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-center items-center text-center lg:items-start lg:text-left lg:pl-[110px]">
        <h1 className="text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl mb-4">{strings.bannerTittle}</h1>
        <h2 className="text-4xl md:text-2xl lg:text-5xl 2xl:text-6xl 3xl:text-[70px] font-bold mb-4">{strings.bannerSubtittle}</h2>
        <div className='w-72 h-2 rounded-full bg-white my-4' />
        <p className="mb-8 text-sm lg:text-base 2xl:text-lg 3xl:text-2xl max-w-md 3xl:max-w-lg">
          {strings.bannerContent}
        </p>
        <button onClick={goToServices} className="text-xl 3xl:text-3xl bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out w-48 h-14 3xl:w-64 3xl:h-16">
          {strings.knowMore}
        </button>
      </div>

      {/* Image Section */}
      <div className="w-[550px] h-[550px] xl:w-[700px] xl:h-[700px] 2xl:w-[900px] 2xl:h-[900px] 3xl:w-[1100px] 3xl:h-[1100px] relative overflow-hidden mt-4 lg:mt-0 lg:self-end -mb-10 lg:-mb-8 3xl:mr-22 4xl:mr-40">
        <div
          className="absolute top-0 left-0 w-full h-full bg-secondary-purple opacity-50 rounded-full z-0"
          style={{ clipPath: 'circle(35% at 50% 60%)' }}
        ></div>
        {bannerImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={strings.altForBannerSection}
            className={`absolute object-cover object-bottom w-full h-full bottom-0 left-1/2 transform -translate-x-1/2 z-10 transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-dark-blue to-transparent z-20" />
      </div>
    </div>
  );
};

export default Banner;
