import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoPhonePortraitOutline } from "react-icons/io5";

import { logo1 } from '../assets/images';

import strings from '../constants/strings';

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-dark-blue to-custom-purple text-white p-4">
      <div className="container mx-auto w-[90%] md:w-[85%] 3xl:w-[80%]">
        {/* Icon on the top left corner */}
        <div className="flex w-full mb-8 md:mb-16">
          <img src={logo1} alt="Logo" className="h-12 md:h-16 w-auto" />
        </div>

        {/* Two columns layout */}
        <div className="flex flex-col md:flex-row w-full">
          {/* First column */}
          <div className="flex flex-col w-full md:w-3/12 space-y-2 md:space-y-4 text-lg md:text-2xl mb-4 md:mb-16">
            <div>{strings.home}</div>
            <div>{strings.aboutUs}</div>
            <div>{strings.services}</div>
            <div>{strings.allies}</div>
            <div>{strings.contactUs}</div>
          </div>

          {/* Second column */}
          <div className="flex flex-col w-full md:space-y-2 text-lg md:text-xl">
            {/* First row with sections */}
            <div className="flex flex-col md:flex-row items-center md:mb-10">
              <p className="w-full md:w-[20%] text-xl md:text-2xl font-bold">
                {strings.contactUs}
              </p>
              <div className='w-full md:w-[80%] flex flex-col my-5 md:flex-row md:items-center md:justify-between gap-4 md:gap-6'>
                <div className="flex items-center space-x-2">
                  <CiLocationOn className='text-4xl md:text-5xl' />
                  <span className="whitespace-pre-wrap">{strings.xtunerAddress}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CiMail className='text-xl md:text-5xl font-bold' />
                  <span>{strings.xtunerEmail}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <IoPhonePortraitOutline className='text-3xl md:text-4xl font-bold' />
                  <span>{strings.xtunerPhone}</span>
                </div>
              </div>
            </div>

            {/* Second row with two sections */}
            <div className="flex flex-col md:flex-row">
              <p className="w-full md:w-[20%] text-xl md:text-2xl font-bold mb-5">{strings.followUs}</p>
              <div className="flex items-center justify-start mb-10 xl:ml-2 md:justify-end space-x-4 md:space-x-8 text-2xl md:text-3xl">
                <a href="https://www.facebook.com/" target='blank'><FaFacebook /></a>
                <a href="https://www.instagram.com/" target='blank'><FaInstagram /></a>
                <a href="https://twitter.com/" target='blank'><FaTwitter /></a>
                <a href="https://www.linkedin.com/" target='blank'><FaLinkedinIn /></a>
                <a href="https://www.youtube.com/" target='blank'><FaYoutube /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
