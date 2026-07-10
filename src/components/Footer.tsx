import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaGooglePlay, FaApple } from 'react-icons/fa';
import { CiMail } from "react-icons/ci";

import { logo1 } from '../assets/images';

import strings from '../constants/strings';
import { menuList } from '../constants/data';
import { MenuItemData } from './MenuItem';

const Footer = () => {

  const navigate = useNavigate();

  const navigateToScreen = (route: string) => {
    navigate(route);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-gradient-to-b from-dark-blue to-custom-purple text-white">
      <div className="container mx-auto w-[90%] md:w-[85%] 3xl:w-[80%] py-12 md:py-16">
        {/* Brand */}
        <div className="flex flex-col gap-4 mb-10 md:mb-14">
          <img src={logo1} alt="Xtuner" className="h-12 md:h-14 w-auto self-start" />
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-8">
          {/* Navigation */}
          <nav className="flex flex-col gap-2 text-lg">
            {menuList.map((item: MenuItemData) => (
              <button
                key={item.id}
                className="text-left text-white/70 hover:text-white transition-colors duration-200 w-fit"
                onClick={() => navigateToScreen(item.route)}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Download app */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">{strings.downloadTittle}</h3>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                aria-label="Google Play"
                className="flex w-fit items-center gap-3 rounded-xl border border-white/20 px-4 py-2 hover:bg-white/10 transition-colors duration-200"
              >
                <FaGooglePlay className="text-2xl" />
                <div className="flex flex-col leading-tight">
                  <span className="text-[10px] text-white/60 uppercase tracking-wide">Disponible en</span>
                  <span className="text-sm font-semibold">Google Play</span>
                </div>
              </a>
              <a
                href="#"
                aria-label="App Store"
                className="flex w-fit items-center gap-3 rounded-xl border border-white/20 px-4 py-2 hover:bg-white/10 transition-colors duration-200"
              >
                <FaApple className="text-2xl" />
                <div className="flex flex-col leading-tight">
                  <span className="text-[10px] text-white/60 uppercase tracking-wide">Descarga en</span>
                  <span className="text-sm font-semibold">App Store</span>
                </div>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">{strings.contactUs}</h3>
            <a
              href={`mailto:${strings.xtunerEmail}`}
              className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-200"
            >
              <CiMail className="text-2xl" />
              <span>{strings.xtunerEmail}</span>
            </a>

            <p className="mt-2 text-sm font-semibold text-white/50 uppercase tracking-wide">
              {strings.followUs}
            </p>
            <div className="flex items-center gap-3 text-xl">
              <a
                href="https://www.facebook.com/"
                target="blank"
                aria-label="Facebook"
                className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/"
                target="blank"
                aria-label="Instagram"
                className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 md:mt-14 pt-6 border-t border-white/15 text-center text-sm text-white/50">
          <p>© {new Date().getFullYear()} Xtuner. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
