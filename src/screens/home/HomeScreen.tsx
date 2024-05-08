
import { cardImg1, cardImg2, cardImg3 } from '../../assets/images';
import strings from '../../constants/strings';
import Banner from '../../components/Banner';
import CardSection from '../../components/CardSection';
import DownloadSection from '../../components/DownloadSection';
import ServicesSection from '../../components/ServicesSection';
import AlliesSection from '../../components/AlliesSection';

const HomeScreen = () => {

    const cardsData = [
        {
            title: strings.cardTitle1,
            content: strings.cardContent1,
            imageUrl: cardImg1,
            alt: strings.cardAlt1,
            shape: 'square' as 'square',
            imageWidth: "60%",
        },
        {
            title: strings.cardTitle2,
            content: strings.cardContent2,
            imageUrl: cardImg2,
            alt: strings.cardAlt2,
            shape: 'square' as 'square',
            imageWidth: "60%",
        },
        {
            title: strings.cardTitle3,
            content: strings.cardContent3,
            imageUrl: cardImg3,
            alt: strings.cardAlt3,
            shape: 'square' as 'square',
            imageWidth: "60%",
        },
    ];

    return (
        <div className="flex flex-col">
            <Banner />
            <CardSection
                sectionTitle={strings.cardSectionTittle}
                cardsData={cardsData}
            />
            <DownloadSection />
            <ServicesSection
                sectionTitle={strings.servicesSectionTittle}
            />
            <AlliesSection
                sectionTitle={strings.alliesSectionTittle}
            />

        </div>
    );
};


export default HomeScreen;

