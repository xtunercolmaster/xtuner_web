import { xtunerApp, backgroundDownload } from '../assets/images';
import strings from '../constants/strings';

const DownloadSection = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center w-full text-white p-8 bg-cover bg-no-repeat"
            style={{
                backgroundImage: `linear-gradient(rgba(105,38,117, 0.9), rgba(20,20,56, 0.9)), url(${backgroundDownload})`
            }}>
            {/* Text Section */}
            <div className="flex-1 flex flex-col justify-center items-center text-center lg:items-start lg:text-left lg:pl-16 xl:pl-40 3xl:pl-52">
                <h1 className="mb-8 text-3xl md:text-3xl lg:text-4xl 3xl:text-5xl">{strings.downloadTittle}</h1>
                <p className="mb-8 text-sm lg:text-base xl:text-xl 3xl:text-2xl max-w-md">
                    {strings.downloadContent}                
                </p>
                <button className="text-xl xl:text-2xl bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out w-48 h-14 xl:w-56">
                    {strings.downloadHere}
                </button>
            </div>

            {/* Image Section */}
            <div className="w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px] xl:w-[600px] xl:h-[600px] 2xl:w-[700px] 2xl:h-[700px] relative overflow-hidden mt-4 lg:mt-0 xl:mr-20 3xl:mr-32">
                <div
                    className="absolute top-0 left-0 w-full h-full bg-blur-purple opacity-50 rounded-full z-0"
                    style={{ clipPath: 'circle(35% at 50% 50%)' }}
                ></div>
                <img src={xtunerApp} alt={strings.altForDowloadSection} className="absolute object-cover w-[100%] h-[80%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" />
            </div>
        </div>
    );
};

export default DownloadSection;
