import { BadgeCheck, Github, Instagram, Linkedin } from 'lucide-react';
import React from 'react'
import profile from "../assets/profile-bg.png"


const Hero = () => {
  return (
    <div className="w-4/5 flex md:flex-row flex-col-reverse justify-between items-center  mx-auto text-black">
      <div className="hero-left text-left md:w-1/2 w-full py-10 md:py-0">
        <span className="text-xl font-semibold">Hi, I am</span>

        <div className="">
          <h1 className="split-text-container flex items-center text-[4rem] font-semibold w-full">
            <span class="text-part left md:text-[4rem] text-[2.5rem]">Godwin</span>
            <span class="text-part right pl-5 md:text-[4rem]  text-[2.5rem]">Sunday</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="black"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-badge-check"
            >
              <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </h1>
        </div>
        <p className="text-xl">Front-End Developer / Wordpress Developer</p>

        <div className="flex gap-4 mt-5">
          <Github />
          <Linkedin />
          <Instagram />
        </div>
      </div>

      <div className="hero-right mb-5 md:">
        <img src={profile} alt="" />
      </div>
    </div>
  );
}

export default Hero
