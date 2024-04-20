
import { logo1 } from '../../assets/images';
import strings from '../../constants/strings';
import Banner from '../../components/Banner';

const HomeScreen = () => {

    return (
        <div className="flex h-screen overflow-auto">
            {/* <div className="w-full flex flex-col justify-center items-center bg-custom-purple">
                <p className="text-white">{strings.welcomeTitle}</p>
                <img className="w-32" src={logo1} alt="img" />
            </div> */}

            <Banner />
        </div>
    );
};


export default HomeScreen;

