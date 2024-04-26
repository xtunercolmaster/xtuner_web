import { candela, vibra, los40, olimpica, radioactiva } from '../assets/images';
import DotTittle from './DotTittle';

interface AlliesSectionProps {
    sectionTitle: string;
}

const AlliesSection: React.FC<AlliesSectionProps> = ({ sectionTitle }) => {
    const logos = [
        { src: candela, alt: "Candela" },
        { src: vibra, alt: "Vibra" },
        { src: los40, alt: "Los 40" },
        { src: olimpica, alt: "Olimpica Barranquilla" },
        { src: radioactiva, alt: "Radioacktiva" },
    ];

    return (
        <div className="flex flex-col items-center w-full text-white p-8 bg-dark-blue">

            {/* Title */}
            <div className="w-full text-center mt-12 mb-6">
                <DotTittle sectionTitle={sectionTitle} />
            </div>

            {/* Logos Container */}
            <div className="flex justify-center items-center flex-wrap">
                {logos.map((logo, index) => (
                    <div key={index} className="m-10 lg:mb-20">
                        <img src={logo.src} alt={logo.alt} className="h-36" style={{ borderRadius: '5px' }}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AlliesSection;
