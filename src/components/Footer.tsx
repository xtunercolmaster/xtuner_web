import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { GrLocation } from "react-icons/gr";
import { CiMail } from "react-icons/ci";
import { IoPhonePortraitOutline } from "react-icons/io5";

import { logo1 } from '../assets/images'; // Make sure this is the correct path and way to import images

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-dark-blue to-custom-purple text-white p-4">
      <div className="container mx-auto w-[90%]">
        {/* Icon on the top left corner */}
        <div className="flex w-full mb-4">
          <img src={logo1} alt="Logo" className="h-16 w-92" />
        </div>

        {/* Two columns layout */}
        <div className="flex flex-row w-full">
          {/* First column */}
          <div className="flex flex-col space-y-2 w-3/10">
            <div>Element 1</div>
            <div>Element 2</div>
            <div>Element 3</div>
            <div>Element 4</div>
            <div>Element 5</div>
          </div>

          {/* Second column */}
          <div className="flex flex-col space-y-2 w-7/10">
            {/* First row with sections */}
            <div className="flex items-center">
              <p className="flex-1">Text</p>
              <div className="border-l border-gray-400 h-full mx-2"></div>
              <div className="flex items-center space-x-2">
                <GrLocation />
                <span>Text</span>
              </div>
              <div className="border-l border-gray-400 h-full mx-2"></div>
              <div className="flex items-center space-x-2">
                <CiMail />
                <span>Text</span>
              </div>
              <div className="border-l border-gray-400 h-full mx-2"></div>
              <div className="flex items-center space-x-2">
                <IoPhonePortraitOutline />
                <span>Text</span>
              </div>
            </div>

            {/* Second row with two sections */}
            <div className="flex">
              <p className="flex-1">More Text</p>
              <div className="flex items-center space-x-2">
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaLinkedinIn />
                <FaYoutube />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
