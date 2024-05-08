import { cardIcon } from '../../assets/images';
import strings from "../../constants/strings";

import ServicesBanner from "../../components/ServicesBanner";
import CardSection from '../../components/CardSection';
import AboutUsSection from "../../components/AboutUsSection";

const ServicesScreen = () => {

    const cardsData = [
        {
            title: strings.cardIconTittle1,
            content: strings.cardIconContent1,
            imageUrl: cardIcon,
            alt: strings.cardAlt1,
            shape: 'circle' as 'circle',
            imageWidth: '40%',
            imageHeight: '20%',
        },
        {
            title: strings.cardIconTittle2,
            content: strings.cardIconContent2,
            imageUrl: cardIcon,
            alt: strings.cardAlt2,
            shape: 'circle' as 'circle',
            imageWidth: '40%',
            imageHeight: '20%',
        },
        {
            title: strings.cardIconTittle3,
            content: strings.cardIconContent3,
            imageUrl: cardIcon,
            alt: strings.cardAlt3,
            shape: 'circle' as 'circle',
            imageWidth: '40%',
            imageHeight: '20%',
        },
    ];

    return (
        <div className="flex flex-col">
            <ServicesBanner />
            <CardSection
                paragraphText={strings.offeringContent}
                sectionTitle={strings.offeringTittle}
                cardsData={cardsData}
            />
        </div>
    );
};

export default ServicesScreen;

