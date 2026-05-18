import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import React from 'react';
import top from '../assets/top.png';
import { FaWhatsapp } from "react-icons/fa";



const Footer = () => {
  return (
    <div className="w-full mt-5 md:py-50 pt-30 pb-30 bg-black h-50 flex flex-col  justify-center">
      <a
        href="#"
        className="mx-auto mb-2 animate-ping hover:animate-bounce transition duration-700 ease-in-out"
      >
        <img src={top} alt="scroll to top" />
      </a>
      <div className="btp uppercase text-white text-xs font-semibold">
        back to top
      </div>
      <div className="flex">
        <div className="w-50 my-10 mx-auto img flex gap-6 justify-center">
          <a
            href="https://www.facebook.com/profile.php?id=61582156525620"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="text-white h-10 w-7 rounded-full shadow-lg shadow-gray-400/50 cursor-pointer" />
          </a>

          <a
            href="https://www.linkedin.com/in/kenny-sunday-156413128?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="text-white h-10 w-7 rounded-full shadow-lg shadow-gray-400/50 cursor-pointer" />
          </a>

          <a
            href="https://www.youtube.com/@techlab007"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube className="text-white h-10 w-7 rounded-full shadow-lg shadow-gray-400/50 cursor-pointer" />
          </a>

          <a
            href="https://www.instagram.com/godwinsnd?igsh=MTkxcDllOXRreHpnMQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="text-white h-10 w-7 rounded-full shadow-lg shadow-gray-400/50 cursor-pointer" />
          </a>

          <a
            href="https://wa.me/2348091921106"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp
              src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
              alt="WhatsApp"
              className="text-white h-8 w-8 mt-1 rounded-full shadow-lg shadow-gray-400/50 cursor-pointer"
            />
          </a>
        </div>
      </div>
      <p className="cc text-white">@2025 Godwin Sunday All Rights Reserved.</p>
    </div>
  );
}

export default Footer
