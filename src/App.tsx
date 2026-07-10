import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import MainScreen from "./screens/main/MainScreen";
import HomeScreen from "./screens/home/HomeScreen";
import AboutUsScreen from "./screens/aboutUs/AboutUsScreen";
import ServicesScreen from "./screens/services/ServicesScreen";

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
      </Routes>
    </Router>
  );
}

export default App;
