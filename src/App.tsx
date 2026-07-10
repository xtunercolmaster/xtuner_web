import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import MainScreen from "./screens/main/MainScreen";
import HomeScreen from "./screens/home/HomeScreen";
import AboutUsScreen from "./screens/aboutUs/AboutUsScreen";
import ServicesScreen from "./screens/services/ServicesScreen";
import TermsScreen from "./screens/terms/TermsScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />}>
          <Route index element={<HomeScreen />} />
          <Route path="home" element={<HomeScreen />} />
          <Route path="aboutus" element={<AboutUsScreen />} />
          <Route path="services" element={<ServicesScreen />} />
        </Route>
        <Route path="/terms" element={<TermsScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
