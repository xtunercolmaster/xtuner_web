import { aboutUsImg1, aboutUsImg2, aboutUsImg3 } from '../../assets/images';

import AboutUsBanner from "../../components/AboutUsBanner";
import AboutUsSection from "../../components/AboutUsSection";
import strings from "../../constants/strings";

const AboutUsScreen = () => {
    return (
        <div className="flex flex-col">
            <AboutUsBanner />
            <AboutUsSection
                title={strings.aboutUsTittle1}
                content={strings.aboutUsContent1}
                imageUrl={aboutUsImg1}
                alt={strings.altAboutUs1}
                background={false}
                reverse={false}
            />
            <AboutUsSection
                title={strings.aboutUsTittle2}
                content={strings.aboutUsContent2}
                imageUrl={aboutUsImg2}
                alt={strings.altAboutUs2}
                background={true}
                reverse={true}
            />
            <AboutUsSection
                title={strings.aboutUsTittle3}
                content={strings.aboutUsContent3}
                imageUrl={aboutUsImg3}
                alt={strings.altAboutUs3}
                background={false}
                reverse={false}
            />
        </div>
    );
};


export default AboutUsScreen;

