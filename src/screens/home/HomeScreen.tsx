
import { cardImg1, cardImg2, cardImg3 } from '../../assets/images';
import strings from '../../constants/strings';
import Banner from '../../components/Banner';
import CardSection from '../../components/CardSection';
import DownloadSection from '../../components/DownloadSection';

const HomeScreen = () => {

    const cardsData = [
        {
            title: strings.CardTitle1,
            content: strings.CardTitle1,
            imageUrl: cardImg1,
        },
        {
            title: strings.CardTitle2,
            content: strings.CardTitle2,
            imageUrl: cardImg2,
        },
        {
            title: strings.CardTitle3,
            content: strings.CardTitle3,
            imageUrl: cardImg3,
        },
    ];

    return (
        <div className="flex flex-col h-screen overflow-auto">
            <Banner />
            <CardSection
                sectionTitle="Beneficios Xtuner"
                cardsData={cardsData}
            />
            <DownloadSection />
        </div>
    );
};


export default HomeScreen;

