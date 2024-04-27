import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import MainScreen from './screens/main/MainScreen';
import HomeScreen from './screens/home/HomeScreen';
import AboutUsScreen from './screens/aboutUs/AboutUsScreen';
import ServicesScreen from './screens/services/ServicesScreen';
import AlliesScreen from './screens/allies/AlliesScreen';
import ContactUsScreen from './screens/contactUs/ContactUsScreen';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />}>
          <Route index element={<HomeScreen />} />
          <Route path="home" element={<HomeScreen />} />
          <Route path="aboutus" element={<AboutUsScreen />} />
          <Route path="services" element={<ServicesScreen />} />
          <Route path="allies" element={<AlliesScreen />} />
          <Route path="contactus" element={<ContactUsScreen />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;