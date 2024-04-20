
import { cardImg1, cardImg2, cardImg3 } from '../../assets/images';
import strings from '../../constants/strings';
import Banner from '../../components/Banner';
import CardSection from '../../components/CardSection';


const HomeScreen = () => {

    const cardsData = [
        {
            title: 'Lorem ipsum dolor sit',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu netus aliquam in orci dolor rhoncus. Eget eget consectetur neque eu id. Mattis suspendisse sagittis, sapien lectus placerat. A, metus varius rhoncus, mattis.',
            imageUrl: cardImg1,
        },
        {
            title: 'Lorem ipsum dolor sit',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu netus aliquam in orci dolor rhoncus. Eget eget consectetur neque eu id. Mattis suspendisse sagittis, sapien lectus placerat. A, metus varius rhoncus, mattis.',
            imageUrl: cardImg2,
        },
        {
            title: 'Lorem ipsum dolor sit',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu netus aliquam in orci dolor rhoncus. Eget eget consectetur neque eu id. Mattis suspendisse sagittis, sapien lectus placerat. A, metus varius rhoncus, mattis.',
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
        </div>
    );
};


export default HomeScreen;

