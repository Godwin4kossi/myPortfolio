import React from "react";
import logo from '../assets/mylogo.jpg';
import { Link } from "react-scroll";

function Navigation() {

  return (
    <nav className="">
      <div className="w-4/5 flex gap-6 justify-between mx-auto py-5">
      <div className="w-20 rounded-full text-white  py-2"><img src={logo} alt="" /></div>
      <div className="navbar flex gap-10 items-center text-white">
        <Link to="about" smooth={true} duration={500} className="hover:bg-white text-white rounded-full hover:text-black px-5 py-2">About me</Link>
        <Link to="skills" smooth={true} duration={500} className="hover:bg-white text-white rounded-full hover:text-black px-5 py-2">Skills</Link>
        <Link to="contact" smooth={true} duration={500} className="hover:bg-white text-white rounded-full hover:text-black px-5 py-2">Contact Me</Link>
      </div>
      </div>

    </nav>
  );
}

export default Navigation;
