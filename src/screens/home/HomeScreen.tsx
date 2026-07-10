
import { benefits1, benefits2, benefits3 } from '../../assets/images';
import strings from '../../constants/strings';
import Banner from '../../components/Banner';
import CardSection from '../../components/CardSection';
import DownloadSection from '../../components/DownloadSection';
import ServicesSection from '../../components/ServicesSection';

const HomeScreen = () => {

    const cardsData = [
        {
            title: strings.cardTitle1,
            content: strings.cardContent1,
            imageUrl: benefits1,
            alt: strings.cardAlt1,
            shape: 'square' as 'square',
            imageWidth: "60%",
        },
        {
            title: strings.cardTitle2,
            content: strings.cardContent2,
            imageUrl: benefits2,
            alt: strings.cardAlt2,
            shape: 'square' as 'square',
            imageWidth: "60%",
        },
        {
            title: strings.cardTitle3,
            content: strings.cardContent3,
            imageUrl: benefits3,
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

        </div>
    );
};


export default HomeScreen;
