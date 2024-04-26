import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between">
          {/* Left Side - Navigation */}
          <div className="flex flex-col">
            <span className="font-bold text-xl mb-2">XTuner</span>
            <nav>
              <ul>
                <li className="mb-1"><a href="#home">Inicio</a></li>
                <li className="mb-1"><a href="#about">Quienes somos</a></li>
                <li className="mb-1"><a href="#services">Servicios</a></li>
                <li className="mb-1"><a href="#allies">Aliados</a></li>
                <li className="mb-1"><a href="#contact">Contactanos</a></li>
              </ul>
            </nav>
          </div>
          
          {/* Center - Contact Info */}
          <div className="flex flex-col">
            <span className="font-bold text-lg mb-2">Contactanos</span>
            <p className="flex items-center mb-1"><span className="mr-2">📍</span>101 Browning Lane Corning, NY 14830</p>
            <p className="flex items-center mb-1"><span className="mr-2">✉️</span>xtunerCOL@gmail.com</p>
            <p className="flex items-center"><span className="mr-2">📞</span>607-937-7303</p>
          </div>

          {/* Right Side - Social Media Links */}
          <div className="flex flex-col">
            <span className="font-bold text-lg mb-2">Siguenos</span>
            <div className="flex">
              <a href="#facebook" className="mr-2"><FaFacebookF /></a>
              <a href="#instagram" className="mr-2"><FaInstagram /></a>
              <a href="#twitter" className="mr-2"><FaTwitter /></a>
              <a href="#linkedin" className="mr-2"><FaLinkedinIn /></a>
              <a href="#youtube"><FaYoutube /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
