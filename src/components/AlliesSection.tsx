import { candela, vibra, los40, olimpica, radioactiva } from '../assets/images';
import strings from '../constants/strings';
import DotTittle from './DotTittle';

interface AlliesSectionProps {
    sectionTitle: string;
}

const AlliesSection: React.FC<AlliesSectionProps> = ({ sectionTitle }) => {
    const logos = [
        { src: candela, alt: strings.candela },
        { src: vibra, alt: strings.vibra },
        { src: los40, alt: strings.los40 },
        { src: olimpica, alt: strings.olimpica },
        { src: radioactiva, alt: strings.radioactiva },
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
                    <div key={index} className="m-3 lg:m-6 xl:m-10 lg:mb-20 3xl:mb-24">
                        <img src={logo.src} alt={logo.alt} className="h-36 3xl:h-48" style={{ borderRadius: '5px' }}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AlliesSection;
