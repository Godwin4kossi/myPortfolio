import React, { useState } from "react";
import logo from "../assets/mylogo.png";
import logoWhite from "../assets/mylogo-white.png";
import { Link } from "react-scroll";
import { ChartNoAxesGantt, Menu, X } from "lucide-react";

function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full z-50 bg-black md:bg-transparent">
      <div className="md:w-4/5 px-5 md:px-auto flex justify-between items-center mx-auto py-4">
        <div className="w-20 stroke-cyan-500 ">
          <img src={logo} alt="Logo" className="hidden md:block rounded-full" />
          <img
            src={logoWhite}
            alt="Logo"
            className="md:hidden block w-[70%] rounded-full"
          />
        </div>

        <div
          className="md:hidden text-white transition duration-500 ease-in-out"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <ChartNoAxesGantt size={30} />}
        </div>

        <div className="hidden md:flex gap-10 text-white items-center ">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:bg-white text-white hover:text-black px-5 py-2 rounded-full cursor-pointer"
          >
            About Me
          </Link>

          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="hover:bg-white text-white hover:text-black px-5 py-2 rounded-full cursor-pointer"
          >
            Skills
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:bg-white text-white hover:text-black px-5 py-2 rounded-full cursor-pointer"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-6 md:text-center text-right text-white bg-black py-6 transition-all duration-500 ease-out">
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => setOpen(false)}
            className="hover:bg-white hover:text-black px-5 py-2 rounded-full cursor-pointer"
          >
            About me
          </Link>

          <Link
            to="skills"
            smooth={true}
            duration={500}
            onClick={() => setOpen(false)}
            className="hover:bg-white hover:text-black px-5 py-2 rounded-full cursor-pointer"
          >
            Skills
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => setOpen(false)}
            className="hover:bg-white hover:text-black px-5 py-2 rounded-full cursor-pointer"
          >
            Contact Me
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
