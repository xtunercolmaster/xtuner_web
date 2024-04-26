import { banner1, backgroundBanner } from '../assets/images';

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center w-full text-white p-8 min-h-screen bg-cover bg-no-repeat" style={{ backgroundImage: `url(${backgroundBanner})` }}>
      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-center items-center text-center lg:items-start lg:text-left lg:pl-[110px]">
        <h1 className="text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl mb-4">Conoce</h1>
        <h2 className="text-4xl md:text-2xl lg:text-5xl 2xl:text-6xl font-bold mb-4">La experiencia Xtuner!</h2>
        <div className='w-72 h-2 rounded-full bg-white my-4'/>
        <p className="mb-6 text-sm lg:text-base 2xl:text-lg max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet faucibus ipsum sit lacus pulvinar libero pretium. Odio facilisis diam quam donec ipsum. Augue bibendum pellentesque consequat cursus ac.
        </p>
        <button className="text-xl bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out w-48 h-14">
          Conoce más
        </button>
      </div>

      {/* Image Section */}
      <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[300px] lg:h-[300px] xl:w-[500px] xl:h-[500px] 2xl:w-[700px] 2xl:h-[700px] relative overflow-hidden mt-4 lg:mt-0">
        <div
          className="absolute top-0 left-0 w-full h-full bg-blur-purple opacity-50 rounded-full z-0"
          style={{ clipPath: 'circle(35% at 50% 60%)'}} 
        ></div>
        <img src={banner1} alt="hero image" className="absolute object-cover w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"/>
      </div>
    </div>
  );
};

export default Banner;
