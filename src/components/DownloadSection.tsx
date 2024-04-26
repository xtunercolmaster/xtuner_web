import { xtunerApp, backgroundDownload } from '../assets/images';

const DownloadSection = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center w-full text-white p-8 min-h-screen bg-cover bg-no-repeat"
            style={{
                backgroundImage: `linear-gradient(rgba(105,38,117, 0.9), rgba(20,20,56, 0.9)), url(${backgroundDownload})`
            }}>
            {/* Text Section */}
            <div className="flex-1 flex flex-col justify-center items-center text-center lg:items-start lg:text-left lg:pl-[110px]">
                <h1 className="text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl mb-8">Descarga Nuestra App!</h1>
                <p className="mb-6 text-sm lg:text-base 2xl:text-lg max-w-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet faucibus ipsum sit lacus pulvinar libero pretium. Odio facilisis diam quam donec ipsum. Augue bibendum pellentesque consequat cursus ac.
                </p>
                <button className="text-xl bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out w-48 h-14">
                    Descarga Aqui
                </button>
            </div>

            {/* Image Section */}
            <div className="w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] md:w-[300px] md:h-[300px] lg:w-[300px] lg:h-[300px] xl:w-[500px] xl:h-[500px] 2xl:w-[700px] 2xl:h-[700px] relative overflow-hidden mt-4 lg:mt-0">
                <div
                    className="absolute top-0 left-0 w-full h-full bg-blur-purple opacity-50 rounded-full z-0"
                    style={{ clipPath: 'circle(35% at 50% 50%)' }}
                ></div>
                <img src={xtunerApp} alt="hero image" className="absolute object-cover w-[100%] h-[80%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" />
            </div>
        </div>
    );
};

export default DownloadSection;
