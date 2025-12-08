import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import React from 'react';
import top from '../assets/top.png';



const Footer = () => {
  return (
    <div className="w-full mt-5 md:py-50 pt-30 pb-30 bg-black h-50 flex flex-col  justify-center">
      <a href="#" className="mx-auto mb-2 animate-ping hover:animate-bounce transition duration-700 ease-in-out">
        <img src={top} alt="scroll to top" />
      </a>
      <div className="btp uppercase text-white text-xs font-semibold">
        back to top
      </div>
      <div className="flex">
        <div className="w-50 my-10 mx-auto img flex gap-4 justify-center">
          <Facebook className="text-white pointer h-10 w-7 rounded-full shadow-lg shadow-gray-400/50 cursor-pointer" />
          <Linkedin className="text-white  h-10 w-7 rounded-full shadow-lg shadow-gray-400/50 cursor-pointer" />
          <Youtube className="text-white  h-10 w-7 rounded-full shadow-lg shadow-gray-400/50 cursor-pointer" />
          <Instagram className="text-white  h-10 w-7 rounded-full shadow-lg shadow-gray-400/50 cursor-pointer" />
        </div>
      </div>
      <p className="cc text-white">@2025 Godwin Sunday All Rights Reserved.</p>
    </div>
  );
}

export default Footer
