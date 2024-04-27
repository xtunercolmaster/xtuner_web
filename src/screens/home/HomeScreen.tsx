
import { cardImg1, cardImg2, cardImg3 } from '../../assets/images';
import strings from '../../constants/strings';
import Banner from '../../components/Banner';
import CardSection from '../../components/CardSection';
import DownloadSection from '../../components/DownloadSection';
import ServicesSection from '../../components/ServicesSection';
import AlliesSection from '../../components/AlliesSection';
import Footer from '../../components/Footer';

const HomeScreen = () => {

    const cardsData = [
        {
            title: strings.cardTitle1,
            content: strings.cardTitle1,
            imageUrl: cardImg1,
        },
        {
            title: strings.cardTitle2,
            content: strings.cardTitle2,
            imageUrl: cardImg2,
        },
        {
            title: strings.cardTitle3,
            content: strings.cardTitle3,
            imageUrl: cardImg3,
        },
    ];

    return (
        <div className="flex flex-col h-screen w-screen overflow-auto">
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
            <Footer />
        </div>
    );
};


export default HomeScreen;

